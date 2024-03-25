import { create } from "zustand";

interface State {
  inSideMenuOpen: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useUiStore = create<State>()((set) => ({
  inSideMenuOpen: false,

  openSideMenu: () => set({ inSideMenuOpen: true }),
  closeSideMenu: () => set({ inSideMenuOpen: false }),
}));
