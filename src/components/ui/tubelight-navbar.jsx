import React, { useState } from "react";
import { cn } from "../../lib/utils";

/**
 * NavBar Component with tube light animation effect
 * @param {Object} props - Component props
 * @param {Array} props.items - Navigation items with name, url and icon
 * @param {string} props.className - Additional CSS classes
 * @returns {JSX.Element} - NavBar component
 */
export function NavBar({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  return (
    <div
      className={cn(
        "fixed sm:top-0 bottom-0 left-1/2 -translate-x-1/2 z-40 mb-6 sm:py-6",
        className,
      )}
    >
      <div className="flex items-center gap-2 py-1.5 px-2 md:gap-3 lg:gap-4 xl:gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
                // Use smooth scrolling for hash links
                if (item.url.startsWith('#')) {
                  const element = document.querySelector(item.url);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  window.location.href = item.url;
                }
              }}
              className={cn(
                "relative cursor-pointer font-medium rounded-full transition-all duration-300",
                "text-white/80 hover:text-white",
                "text-xs sm:text-sm md:text-base lg:text-lg",
                "px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3",
                isActive && "bg-muted/10 text-white font-semibold",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <div
                  className="absolute inset-0 w-full bg-primary/20 rounded-full -z-10"
                >
                  <div className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 w-4 sm:w-6 md:w-8 lg:w-10 h-0.5 sm:h-1 md:h-1.5 bg-[#4ECCA3] rounded-t-full">
                    <div className="absolute w-6 sm:w-8 md:w-12 lg:w-16 h-3 sm:h-4 md:h-6 lg:h-8 bg-[#4ECCA3]/30 rounded-full blur-md -top-1.5 -left-1.5 sm:-top-2 sm:-left-2" />
                    <div className="absolute w-5 sm:w-6 md:w-8 lg:w-12 h-3 sm:h-4 md:h-6 lg:h-8 bg-[#4ECCA3]/30 rounded-full blur-md -top-0.5 sm:-top-1" />
                    <div className="absolute w-3 sm:w-4 md:w-5 lg:w-6 h-3 sm:h-3 md:h-4 lg:h-6 bg-[#4ECCA3]/40 rounded-full blur-sm top-0 left-1.5 sm:left-2" />
                  </div>
                </div>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
