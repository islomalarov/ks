// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#0A2FFF"
        options={{ showSpinner: true }}
        // shallowRouting
        // startPosition={0.3}
        stopDelay={1000}
      />
    </>
  );
};

export default Providers;
