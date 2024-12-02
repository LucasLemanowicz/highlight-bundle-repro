import { H } from "highlight.run";
import { Outlet } from "react-router";

const HIGHLIGHT_PROJECT_ID = import.meta.env.VITE_HIGHLIGHT_PROJECT_ID;
const BUILD_ID = import.meta.env.VITE_GIT_COMMIT_SHA;

if (HIGHLIGHT_PROJECT_ID != null) {
  H.init(HIGHLIGHT_PROJECT_ID, {
    serviceName: "frontend-app",
    tracingOrigins: true,
    networkRecording: {
      enabled: true,
      recordHeadersAndBody: true,
    },
    version: BUILD_ID,
  });
}

export const Root: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
