import type { ReactNode } from "react";

type Props = {
  header: string;
  footer?: string;
  children: ReactNode;
};

export default function Section({ header, footer, children }: Props) {
  return (
    <section className="space-y-2">
      <div className="px-4">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          {header}
        </h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        {children}
      </div>

      {footer ? (
        <div className="px-4">
          <p className="text-xs text-zinc-500">{footer}</p>
        </div>
      ) : null}
    </section>
  );
}
