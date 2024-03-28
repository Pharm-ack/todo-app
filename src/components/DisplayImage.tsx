import { useTheme } from "./ThemeProvider";

function DisplayImage() {
  const { theme } = useTheme();
  return (
    <div
      className={`dark:text-white ${
        theme === "dark" ? "darkBg" : "lightBg"
      } text-slate-900 h-48 md:h-52 max-w-full`}
    ></div>
  );
}

export default DisplayImage;
