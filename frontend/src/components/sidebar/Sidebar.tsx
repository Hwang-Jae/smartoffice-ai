import { FileText, Clock, Star, Trash2 } from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      className="
      w-72
      bg-slate-800
      text-white
      p-4
      "
    >
      <button
        className="
        w-full
        p-3
        rounded-lg
        bg-blue-600
        "
      >
        + 새 문서
      </button>

      <div className="mt-6 space-y-3">
        <div className="flex gap-2">
          <FileText size={18} />
          문서함
        </div>

        <div className="flex gap-2">
          <Clock size={18} />
          최근 문서
        </div>

        <div className="flex gap-2">
          <Star size={18} />
          즐겨찾기
        </div>

        <div className="flex gap-2">
          <Trash2 size={18} />
          휴지통
        </div>
      </div>

      <div className="mt-8">
        <div className="text-sm text-gray-400 mb-2">최근 작업</div>

        <div className="text-sm">업무보고서</div>

        <div className="text-sm">회의록</div>

        <div className="text-sm">프로젝트 제안서</div>
      </div>
    </aside>
  );
}
