import { create } from "zustand";

export interface IUseNavigationStore {
  visibleSection:
    | "hero-section"
    | "about-me"
    | "projects"
    | "skills"
    | "contact";
  setVisibleSection: (
    section: "hero-section" | "about-me" | "projects" | "skills" | "contact"
  ) => void;
}

const useNavigationStore = create<IUseNavigationStore>((set) => ({
  visibleSection: "hero-section",
  setVisibleSection: (
    section: "hero-section" | "about-me" | "projects" | "skills" | "contact"
  ) => set(() => ({ visibleSection: section })),
}));

export default useNavigationStore;
