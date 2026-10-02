import { create } from "zustand";

interface DocumentState {
  content: string;
  title: string;

  setContent: (content: string) => void;
  setTitle: (title: string) => void;
}

export const useDocumentStore = create<DocumentState>((set) => ({
  content: "",

  title: "새 문서",

  setContent: (content: string) =>
    set({
      content,
    }),

  setTitle: (title: string) =>
    set({
      title,
    }),
}));
