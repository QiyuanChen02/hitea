import { useSession } from "next-auth/react";
import { useConsole } from "./useConsole";

/** Current admins. */
const adminEmails: string[] = [
  "qiyuan.chen2002@gmail.com",
  "wwwindwing@gmail.com",
];

// Uncomment this to test what the website looks like for non-admins
// const adminEmails: string[] = []

export const isAdminEmail = (email: string | null | undefined) =>
  adminEmails.includes(email || "not admin email");

/** Returns whether or not the user is an admin */
export const useAdmin = () => {
  const { data: sessionData, status } = useSession();
  useConsole(sessionData?.user?.email, "sessionData?.user?.email");
  return [isAdminEmail(sessionData?.user?.email), status] as const;
};
