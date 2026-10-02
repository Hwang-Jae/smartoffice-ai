import { Editor } from "@tiptap/react";

interface Props {
  editor: Editor | null;
}

export default function Ribbon({ editor }: Props) {
  if (!editor) return null;

  return (
    <div
      className="
      h-12
      border-b
      bg-white
      flex
      items-center
      gap-2
      px-4
      "
    >
      <button onClick={() => editor.chain().focus().toggleBold().run()}>
        B
      </button>

      <button onClick={() => editor.chain().focus().toggleItalic().run()}>
        I
      </button>

      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        • 목록
      </button>

      <button>표</button>

      <button>이미지</button>

      <button>PDF</button>
    </div>
  );
}
