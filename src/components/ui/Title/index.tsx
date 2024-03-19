import { titleFont } from "@/config/fonts";
import React from "react";
interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}
export const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <h1
        className={`
          antialiased text-4xl font-semibold
          ${titleFont.className} 
        `}
      >
        {title}
      </h1>
      {subtitle && <h3 className="text-xl">{subtitle}</h3>}
    </div>
  );
};
