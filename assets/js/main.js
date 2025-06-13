document.addEventListener("DOMContentLoaded", () => {
  // nav-title: 텍스트 호버 효과
  const titles = document.querySelectorAll(".nav-title");
  titles.forEach((title) => {
    // computedStyle을 사용하는 것이 더 안정적입니다.
    const originalColor = window.getComputedStyle(title).color;
    const hoverColor = title.dataset.hover;
  
    title.addEventListener("mouseenter", () => {
      title.style.color = hoverColor;
    });
    title.addEventListener("mouseleave", () => {
      title.style.color = originalColor;
    });
  });
  
  // nav-icon: 인라인 SVG 호버 효과 (fill 속성 변경)
  const icons = document.querySelectorAll(".nav-icon");
  icons.forEach((icon) => {
    const defaultColor = icon.dataset.default || "#000000";
    const hoverColor = icon.dataset.hover || defaultColor;
    
    // 초기 fill 적용
    icon.style.fill = defaultColor;
  
    icon.addEventListener("mouseenter", () => {
      icon.style.fill = hoverColor;
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.fill = defaultColor;
    });
  });
});
