import { PropsWithChildren } from 'react';

function GlobalView({ children }: PropsWithChildren) {
  return (
    <div className="relative flex justify-center w-full min-h-[100svh]">
      {children}
    </div>
  );
}

export default GlobalView;
