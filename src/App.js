import { useState } from "react";
import Navbar from "./Header/Navbar";
import Sidebar from "./Header/Sidebar";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex">
      <Navbar />
    </div>
  );
}

export default App;
