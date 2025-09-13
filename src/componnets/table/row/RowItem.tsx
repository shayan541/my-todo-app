import React from "react";

const RowItem: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => {
  return <td className={`px-4 py-2 ${className}`}>{children}</td>;
};

export default RowItem;
