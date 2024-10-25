"use client";

import AuthForm from "@/components/auth-form";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <div className="py-6">
      <SessionProvider>
        <AuthForm />
      </SessionProvider>
    </div>
  );
}
