import { Save, FolderOpen, FilePlus } from "lucide-react";

export default function Header() {
  return (
    <header
      className="
      h-14
      bg-slate-900
      text-white
      flex
      items-center
      justify-between
      px-4
      "
    >
      <div className="font-bold text-lg">SmartOffice AI</div>

      <div className="flex gap-2">
        <button className="p-2 hover:bg-slate-700 rounded">
          <FilePlus size={18} />
        </button>

        <button className="p-2 hover:bg-slate-700 rounded">
          <FolderOpen size={18} />
        </button>

        <button className="p-2 hover:bg-slate-700 rounded">
          <Save size={18} />
        </button>
      </div>
    </header>
  );
}
