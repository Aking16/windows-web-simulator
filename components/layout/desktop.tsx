import ShortcutButton from "@/components/custom-ui/shortcut-button";
import { ThemeToggler } from "@/components/custom-ui/theme-toggler";

const Desktop = () => {
  return (
    <div className="grid gap-5 px-4 py-2">
      <ShortcutButton />
      <ThemeToggler />
    </div>
  );
};

export default Desktop;