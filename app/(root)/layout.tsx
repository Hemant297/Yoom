import StreamVideoProvider from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}

export default Layout;
