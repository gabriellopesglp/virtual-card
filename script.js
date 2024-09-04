const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", () => {
  function updateThemeColor() {
    const body = document.body;
    const isDarkTheme = body.classList.contains("dark-mode");
    const themeColor = isDarkTheme ? "#1c1c1e" : "#f6f7f8";

    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement("meta");
      metaThemeColor.name = "theme-color";
      document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.content = themeColor;
  }

  updateThemeColor();

  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    updateThemeColor();
  });
});
