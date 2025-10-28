"use client";

import { Plus } from "lucide-react";

export function Separator() {
  return (
    <div className="w-full lg:w-[1104px] border-b border-dashed mx-auto relative">
      <Plus
        className="w-6 h-6 hidden lg:block text-foreground absolute -left-3 -top-3"
        strokeWidth={1}
      />
      <Plus
        className="w-6 h-6 hidden lg:block text-foreground absolute -right-3 -top-3"
        strokeWidth={1}
      />
    </div>
  );
}
