import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

export async function getCurrentUser() {
  const session: {
    name: string;
    email: string;
    picture: string;
  } | null = await getServerSession(authOptions);
  console.log("getCurrentUser", session);

  return session;
}
