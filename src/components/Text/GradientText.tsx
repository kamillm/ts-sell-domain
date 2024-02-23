import React from "react";

import type { ComponentProps } from "@/types";

interface GradientTextProps extends ComponentProps {
  gradientColor?: string;
}

export default function GradientText({ children, gradientColor }: GradientTextProps) {
  return (
    <p className={`${gradientColor ? gradientColor : "inline bg-primary_gradient_text"} bg-clip-text text-transparent`}>
      {children}
    </p>
  );
}
