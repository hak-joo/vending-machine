import { PropsWithChildren } from 'react';

function GlobalView({ children }: PropsWithChildren) {
  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      {children}
    </div>
  );
}

export default GlobalView;
