import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // A URL para a sua aplicação Next.js || `http://localhost:3000`
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
});
