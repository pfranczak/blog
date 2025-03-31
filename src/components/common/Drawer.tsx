import { ReactNode } from "react";
import "./Drawer.css";

interface DrawerProps {
  isOpen: boolean;
  children: ReactNode;
  onOutsideClick?: () => void;
}

export function Drawer({ isOpen, children, onOutsideClick }: DrawerProps) {
  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? "block" : "hidden"}`}
        onClick={onOutsideClick}
      />
      <div className={`drawer z-10 absolute right-0 top-0 w-3/4 max-w-sm h-full bg-white dark:bg-gray-800 ${isOpen ? "drawer--is-open" : ""}`}>
        {children}
      </div>
    </>
  )
}