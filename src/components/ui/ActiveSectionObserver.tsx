"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ActiveSectionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            if (sectionId === "hero") {
              // שומר על הנתיב הנוכחי (כולל השפה) ומנקה את ה-Hash
              window.history.replaceState(null, "", pathname);
            } else {
              // משתמש ב-pathname הדינמי במקום ב-'/' קשיח
              window.history.replaceState(null, "", `${pathname}#${sectionId}`);
            }
          }
        });
      },
      {
        rootMargin: "-40% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]); // הוספנו את pathname כאן כדי שהאובזרבר יתעדכן כשהשפה משתנה

  return null;
}