document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".nav-title");
  const icons = document.querySelectorAll(".nav-icon");

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

  icons.forEach((icon) => {
    const defaultHue = icon.dataset.default || "0"; // ← 기본 회전값
    const hoverHue = icon.dataset.hover || "0";

    // 초기 hue-rotate 값 적용
    icon.style.filter = brightness(0) saturate(100%) sepia(100%) hue-rotate(${defaultHue}deg);

    icon.addEventListener("mouseenter", () => {
      icon.style.filter = brightness(0) saturate(100%) sepia(100%) hue-rotate(${hoverHue}deg);
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.filter = brightness(0) saturate(100%) sepia(100%) hue-rotate(${defaultHue}deg);
    });
  });
});
