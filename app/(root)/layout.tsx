import StreamVideoProvider from "@/providers/streamClientProvider";
import { ReactNode } from "react";
const RoootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RoootLayout;
