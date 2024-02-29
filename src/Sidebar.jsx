import React, { useState } from "react";

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar}>
        {isSidebarOpen ? "메뉴 닫기" : "메뉴 열기"}
      </button>
      {isSidebarOpen && (
        <nav>
          <ul>
            <li>메뉴 1</li>
            <li>메뉴 2</li>
            <li>메뉴 3</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
