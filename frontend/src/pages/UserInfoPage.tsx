import type { FC } from "react";
import { themeParams, useSignal, initDataState, type User } from "@telegram-apps/sdk-react";
import PageLayout from "../components/PageLayout";
import { Row } from "../components/Row";


export const UserInfoPage: FC = () => {
  
  const tp = useSignal(themeParams.state);
  const isDark = useSignal(themeParams.isDark)
  // console.log('tp', tp);
  const initData = useSignal(initDataState);
  const user = initData?.user;
  // console.log('initData :', initData);
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
            {tp.bg_color ? <Row label="Background color" value={`${tp.bg_color}`} /> : null}
            {isDark ? <Row label="Theme" value={"Dark theme"} /> : <Row label="Theme" value={"Light theme"} />}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

