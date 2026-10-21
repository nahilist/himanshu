import React from "react";

interface MenuButtonProps {
  onClick: () => void;
  isDark?: boolean;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  onClick,
  isDark = false,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`group relative flex size-11 cursor-pointer items-center justify-center rounded-[9px] border-2 transition-all duration-300 hover:scale-[1.03] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.97] ${
      isDark
        ? "border-white/80 bg-neutral-950 text-white focus-visible:outline-white"
        : "border-[#353a33] bg-white text-[#252a24] focus-visible:outline-[#353a33]"
    }`}
    aria-label="Open menu"
  >
    <span className="relative size-6" aria-hidden="true">
      <span className="absolute right-0.5 top-[7px] h-[2px] w-3 rounded-full bg-current transition-transform duration-300 group-hover:-translate-x-0.5" />
      <span className="absolute bottom-[7px] left-0.5 h-[2px] w-3 rounded-full bg-current transition-transform duration-300 group-hover:translate-x-0.5" />
    </span>
  </button>
);
