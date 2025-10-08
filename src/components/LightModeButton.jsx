function LightModeButton({ toggleTheme, theme }) {
  return <button
    className="absolute top-4 right-24 px-3 py-2 rounded bg-wih-700 text-wih-50 text-sm"
    onClick={toggleTheme}
  >
    Toggle {theme === "light" ? "Dark" : "Light"} Mode
  </button>;
}

export default LightModeButton;