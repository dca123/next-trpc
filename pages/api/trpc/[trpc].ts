import { PrismaClient, Periodicity } from "@prisma/client";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import superjson from "superjson";

const prisma = new PrismaClient();

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}!`,
      };
    },
  })
  .query("documents", {
    async resolve() {
      return await prisma.document.findMany({
        include: {
          licensee: true,
        },
        orderBy: {
          uploadDate: "desc",
        },
      });
    },
  })
  .query("licensees", {
    async resolve() {
      return await prisma.licensee.findMany();
    },
  })
  .mutation("createDocument", {
    input: z.object({
      licensee: z.string(),
      period: z.nativeEnum(Periodicity),
      date: z.date(),
    }),
    resolve: async ({ input }) => {
      return await prisma.document.create({
        data: {
          periodicity: input.period,
          serial: input.date,
          status: "PENDING",
          licensee: {
            connect: {
              id: input.licensee,
            },
          },
        },
      });
    },
  });

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
