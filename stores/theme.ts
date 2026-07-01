import { create } from "zustand";

type ThemeState = {
   theme: string | undefined;
   resolvedTheme: string | undefined;
   setTheme: (theme: string | undefined) => void;
   setResolvedTheme: (theme: string | undefined) => void;
   toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
   theme: undefined,
   resolvedTheme: undefined,
   setTheme: (theme) => set({ theme }),
   setResolvedTheme: (resolvedTheme) => set({ resolvedTheme }),
   toggleTheme: () => {
      const { resolvedTheme } = get();
      set({ theme: resolvedTheme === "dark" ? "light" : "dark" });
   },
}));
