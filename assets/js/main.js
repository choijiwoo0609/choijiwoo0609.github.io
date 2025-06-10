document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".nav-title");
  const iconContainers = document.querySelectorAll(".nav-icon-container");

  // 텍스트 hover 색상 처리
  titles.forEach((title) => {
    const originalColor = title.style.color;
    const hoverColor = title.dataset.hover;

    title.addEventListener("mouseenter", () => {
      title.style.color = hoverColor;
    });
    title.addEventListener("mouseleave", () => {
      title.style.color = originalColor;
    });
  });

  // SVG 아이콘 삽입 및 색상 필터 적용
  iconContainers.forEach(async (container) => {
    const url = container.dataset.icon;
    const defaultHue = container.dataset.default || "0";
    const hoverHue = container.dataset.hover || "0";

    try {
      const res = await fetch(url);
      const svgText = await res.text();

      // 문자열을 DOM 요소로 파싱
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
      const svg = svgDoc.querySelector("svg");

      // 클래스 추가 & 초기 필터 설정
      svg.classList.add("nav-icon");
      svg.style.filter = `brightness(0) saturate(100%) sepia(100%) hue-rotate(${defaultHue}deg)`;

      // 이벤트 추가
      svg.addEventListener("mouseenter", () => {
        svg.style.filter = `brightness(0) saturate(100%) sepia(100%) hue-rotate(${hoverHue}deg)`;
      });
      svg.addEventListener("mouseleave", () => {
        svg.style.filter = `brightness(0) saturate(100%) sepia(100%) hue-rotate(${defaultHue}deg)`;
      });

      container.appendChild(svg);
    } catch (err) {
      console.error("SVG 로딩 실패:", err);
    }
  });
});
