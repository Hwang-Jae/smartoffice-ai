import { useDocumentStore } from "./documentStore";

export const startAutoSave = () => {
  setInterval(async () => {
    const state = useDocumentStore.getState();

    if (!state.content) {
      return;
    }

    try {
      await fetch("http://localhost:8000/documents/save", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: state.title,
          content: state.content,
        }),
      });

      console.log("자동 저장 완료");
    } catch (error) {
      console.error(error);
    }
  }, 30000);
};
