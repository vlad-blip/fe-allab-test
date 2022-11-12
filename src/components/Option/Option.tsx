import React, { ReactNode } from "react";

const Option: React.FC<{type: string, children: ReactNode}> = ({ type, children }) => {
  return (
    <li
      className={`font-bold text-base py-6 px-4 text-center rounded-xl border ${
        type === "benefits"
          ? 'border-yellow bg-yellow-800 text-yellow-100'
          : 'border-blue-800 bg-blue-900 text-blue-300'
      }`}
    >
      {children}
    </li>
  );
};

export default Option;
