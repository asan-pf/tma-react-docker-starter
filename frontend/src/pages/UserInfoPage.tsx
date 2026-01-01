import type { FC } from "react";
import { useSignal, initDataState, type User } from "@telegram-apps/sdk-react";
import PageLayout from "../components/PageLayout";

type RowProps = {
  label: string;
  value: string | number;
  imageUrl?: string;
}
function Row({ label, value, imageUrl }: RowProps) {
  return (
    <div className="">

      {imageUrl ? (
        <div className="flex justify-center"> 

          <div
            className="h-20 w-20 shrink-0 rounded-full bg-zinc-200
                        mask mask-circle overflow-hidden"
          >
            <img
              src={imageUrl}
              alt=""
              className="h-full w-full object-cover"
            />
            
          </div>
        </div>
      ) : (
        <div className="flex items-baseline justify-between gap-4">
          <div className="text-xs font-medium text-zinc-500">{label}</div>
          <div className="text-sm font-medium text-zinc-900 break-all">{value}</div>
        </div>

      )}
    </div>
  );
}

export const UserInfoPage: FC = () => {
  const initData = useSignal(initDataState);
  const user = initData?.user;
  console.log('initData :', initData);
  return (
    <PageLayout title="UserInfo">
      <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
        {!user ? (
          <p className="text-sm text-zinc-600">
            No Telegram user detected. Check that the app is launched as a Telegram Mini App.
          </p>
        ) : (
          <div className="space-y-3">
            {"photo_url" in user && (user as User).photo_url ? (
              <Row label="Photo" imageUrl={(user as User).photo_url} value={""} />
            ) : null}
            <Row label="ID" value={user.id} />
            <Row
              label="Name"
              value={[user.first_name, user.last_name].filter(Boolean).join(" ")}
            />
            {user.username ? <Row label="Username" value={`@${user.username}`} /> : null}
            {user.language_code ? <Row label="Language" value={user.language_code} /> : null}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

