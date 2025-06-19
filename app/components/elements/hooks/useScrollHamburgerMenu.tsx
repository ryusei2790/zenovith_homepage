"use client"
import { useState, useEffect, Dispatch, SetStateAction } from "react";

/**
 * スクロール量に応じてハンバーガーメニューの表示・開閉状態を管理するカスタムフック
 * @param {number} scrollThreshold - 何pxスクロールしたら表示するか
 * @returns { [boolean, boolean, function] } [showMenu, open, setOpen]
 */
export default function useScrollHamburgerMenu(
    scrollThreshold: number = 100
): [boolean, boolean, Dispatch<SetStateAction<boolean>>] {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollThreshold]);

  return [showMenu, open, setOpen];
} 