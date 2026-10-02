import Header from "./components/layout/Header";
import Sidebar from "./components/sidebar/Sidebar";
import DocumentEditor from "./components/editor/DocumentEditor";
import AiPanel from "./components/ai/AiPanel";

import { useEffect } from "react";

import { startAutoSave } from "./services/autoSave";

function App() {
  useEffect(() => {
    startAutoSave();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-slate-100">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <DocumentEditor />

        <AiPanel />
      </div>
    </div>
  );
}

export default App;
