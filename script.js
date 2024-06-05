const themeToggler = document.querySelector(".theme-toggler");
const themeTogglerShade = document.querySelector(".theme-toggler__shade");
const htmlElement = document.querySelector("html");
const cartIconContainer = document.querySelector(
  ".header__icons-container__cart-icon-wrapper"
);
const arrowDownContainer = document.querySelector(
  ".hero-section__arrow-down-container__wrapper"
);
const arrowDownImages = arrowDownContainer.querySelectorAll("img");
const cartImages = cartIconContainer.querySelectorAll("img");

const searchIconContainer = document.querySelector(
  ".header__icons-container__search-icon-wrapper"
);
const searchImages = searchIconContainer.querySelectorAll("img");

const htmlStyles = getComputedStyle(htmlElement);
const heroSection = document.querySelector(".hero-section");
const heroSectionStyles = getComputedStyle(heroSection);

// Initially set to dark mode
const theme = {
  primaryColor: htmlStyles.getPropertyValue("--theme-primary"),
  secondaryColor: htmlStyles.getPropertyValue("--theme-secondary"),
  primaryHeroBackground: heroSectionStyles.background,
  secondaryHeroBackground: "white",
};

let isDarkMode = true;

themeToggler.addEventListener("click", switchTheme);

function switchTheme(e) {
  htmlElement.style.setProperty("--theme-primary", theme.secondaryColor);
  htmlElement.style.setProperty("--theme-secondary", theme.primaryColor);
  heroSection.style.setProperty("background", theme.secondaryHeroBackground);

  themeTogglerShade.style.setProperty("left", isDarkMode ? "4px" : "27px");

  // Swap theme colors
  [theme.primaryColor, theme.secondaryColor] = [
    theme.secondaryColor,
    theme.primaryColor,
  ];
  [theme.primaryHeroBackground, theme.secondaryHeroBackground] = [
    theme.secondaryHeroBackground,
    theme.primaryHeroBackground,
  ];

  isDarkMode = !isDarkMode;
  searchImages.forEach((searchImage) => searchImage.classList.toggle("hide"));
  cartImages.forEach((cartImage) => cartImage.classList.toggle("hide"));
  arrowDownImages.forEach((arrowDownImage) =>
    arrowDownImage.classList.toggle("hide")
  );
}
