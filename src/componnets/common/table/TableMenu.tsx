import React, { useState } from "react";

const TableMenu: React.FC<{ editHandler: () => void; deleteHandler: () => void }> = ({ deleteHandler, editHandler }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="relative cursor-pointer">
      <div
        tabIndex={0}
        onBlur={(e) => {
          const nextFocus = e.relatedTarget as HTMLElement | null;
          if (nextFocus?.closest(".menu-container")) {
            return;
          }
          setShowMenu(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setShowMenu(!showMenu);
          }
        }}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        ⚙️
      </div>
      <div
        tabIndex={0}
        className={`absolute top-4 right-6 menu-container min-h-[80px] min-w-[100px] bg-white border border-gray-200 shadow z-50 rounded ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <ul>
          <li
            onClick={() => {
              editHandler();
              setShowMenu(false);
            }}
            className="p-2 hover:bg-gold-100"
          >
            Edit
          </li>
          <li
            onClick={() => {
              deleteHandler();
              setShowMenu(false);
            }}
            className="p-2 hover:bg-gold-100"
          >
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableMenu;
