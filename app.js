const COPY = {
  tr: {
    title: "Yaz, ",
    accent: "plan hazır",
    eyebrow: "Günün tek cümlesi",
    lede: "Ekran siyah ya da beyaz olabilir. Dil, yazıların hepsini birlikte değiştirir.",
    note: "Seçimin bu cihazda kalır. Sunucuya gitmez.",
    themeDark: "Beyaz",
    themeLight: "Siyah",
    themeToLight: "Beyaz ekrana geç",
    themeToDark: "Siyah ekrana geç",
    langGroup: "Dil",
  },
  en: {
    title: "Just type it, ",
    accent: "AI plans it",
    eyebrow: "One line for the day",
    lede: "The screen can be black or white. Language changes every line together.",
    note: "The choice stays on this device. Nothing is sent.",
    themeDark: "White",
    themeLight: "Black",
    themeToLight: "Switch to a white screen",
    themeToDark: "Switch to a black screen",
    langGroup: "Language",
  },
};

function readChoice(key, allowed, fallback) {
  try {
    const saved = localStorage.getItem(key);
    if (allowed.includes(saved)) return saved;
  } catch {
    /* gizli pencerede kayıt okunamayabilir */
  }
  return fallback;
}

function writeChoice(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* kayıt tutulamazsa seçim yine bu sayfada çalışır */
  }
}

function applyLanguage(lang) {
  const copy = COPY[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (copy[key]) node.textContent = copy[key];
  });
  document.querySelector(".lang").setAttribute("aria-label", copy.langGroup);
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", button.getAttribute("data-lang") === lang ? "true" : "false");
  });
  writeChoice("dplan-lang", lang);
}

function applyTheme(theme) {
  const lang = document.documentElement.lang === "en" ? "en" : "tr";
  const copy = COPY[lang];
  const button = document.getElementById("theme");
  document.documentElement.dataset.theme = theme;
  const light = theme === "light";
  button.textContent = light ? copy.themeLight : copy.themeDark;
  button.setAttribute("aria-pressed", light ? "true" : "false");
  button.setAttribute("aria-label", light ? copy.themeToDark : copy.themeToLight);
  writeChoice("dplan-theme", theme);
}

function init() {
  const lang = readChoice("dplan-lang", ["tr", "en"], "tr");
  const theme = readChoice("dplan-theme", ["dark", "light"], "dark");
  applyLanguage(lang);
  applyTheme(theme);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-lang"));
      applyTheme(document.documentElement.dataset.theme || "dark");
    });
  });

  document.getElementById("theme").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    applyTheme(next);
  });
}

init();
