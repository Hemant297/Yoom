import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <main className="flex-center w-full h-screen ">
      <SignUp />
    </main>
  );
}

export default SignUpPage;
