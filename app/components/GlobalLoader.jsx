"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Loader from "./Loader";

export default function GlobalLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current && pathname === "/") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        firstLoad.current = false;
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
      firstLoad.current = false;
    }
  }, [pathname]);

  if (loading) return <Loader />;
  return children;
} 