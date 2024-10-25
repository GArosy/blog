import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import {
  NextApiRequest,
  NextApiResponse,
} from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getServerSession(
    req,
    res,
    authOptions
  );
  console.log("session", session);
  res.send(session);
};
