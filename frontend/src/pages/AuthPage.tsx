import type { FC } from "react";
import PageLayout from "../components/PageLayout";

export const AuthPage: FC = () => {
  return (
    <PageLayout title="Auth page">
      <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
        <p className="text-sm text-zinc-700">Auth page</p>
      </div>
    </PageLayout>
  );
};
