import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { useDocumentStore } from "../../services/documentStore";

import Ribbon from "./Ribbon";

export default function DocumentEditor() {
  const { setContent } = useDocumentStore();

  const editor = useEditor({
    extensions: [
      StarterKit,

      Placeholder.configure({
        placeholder: "문서를 작성하세요...",
      }),
    ],

    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },

    content: `

      <h1>새 문서</h1>

      <p></p>

    `,
  });

  return (
    <div
      className="
      flex-1
      flex
      flex-col
      "
    >
      <Ribbon editor={editor} />

      <div
        className="
        flex-1
        overflow-auto
        p-8
        bg-gray-200
        "
      >
        <div
          className="
          bg-white
          mx-auto
          p-16
          min-h-[1200px]
          w-[900px]
          shadow-lg
          "
        >
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
}
