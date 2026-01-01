import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  icon?: ReactNode; // usually a small colored square with an icon
  right?: ReactNode; // optional override for right side
};

export default function Cell({ title, subtitle, icon, right }: Props) {
  return (
    <div className="flex items-center gap-3 px-4 py-3">
      {icon ? (
        <div className="grid h-10 w-10 place-items-center rounded-xl">{icon}</div>
      ) : null}

      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-zinc-900">{title}</div>
        {subtitle ? (
          <div className="mt-0.5 line-clamp-2 text-xs text-zinc-500">{subtitle}</div>
        ) : null}
      </div>

      <div className="shrink-0 text-zinc-400">
        {right ?? <ChevronRight className="h-4 w-4" />}
      </div>
    </div>
  );
}
