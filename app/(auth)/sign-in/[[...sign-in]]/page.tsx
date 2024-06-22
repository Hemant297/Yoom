import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return (
    <main className="flex-center w-full h-screen ">
      <SignIn />
    </main>
  );
}

export default SignInPage;
