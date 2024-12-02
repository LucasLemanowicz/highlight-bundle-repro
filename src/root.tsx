import { Outlet } from "react-router";

/*

If you leave the code as is and run `pnpm build` the build will look like this:

```
dist/index.html                           0.46 kB │ gzip:   0.30 kB
dist/assets/react-CHdo91hT.svg            4.13 kB │ gzip:   2.05 kB
dist/assets/index-n_ryQ3BS.css            1.39 kB │ gzip:   0.71 kB
dist/assets/index-DjMApXNi-BbQAe5Vu.js  355.20 kB │ gzip: 117.28 kB
dist/assets/index-C-B63nXv.js           424.32 kB │ gzip: 128.17 kB
```

However if you remove the lines below, the build will be significantly smaller:

```
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-n_ryQ3BS.css    1.39 kB │ gzip:  0.71 kB
dist/assets/index-D8s4E482.js   215.73 kB │ gzip: 70.92 kB
```

Notice that even the original index file is smaller (not the one that is loaded async)

*/

// Highlight Start
import { H } from "highlight.run";

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
// Highlight End

export const Root: React.FC = () => {
  return (
    <div>
      {/* Various Providers and other application wrappers here */}
      <Outlet />
    </div>
  );
};
