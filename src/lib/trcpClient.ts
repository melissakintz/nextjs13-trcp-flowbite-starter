import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/server/routers/appRouter/appRouter";

export const trpc = createTRPCReact<AppRouter>();
