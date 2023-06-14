import { appRouter } from "@/server/routers/appRouter/appRouter";

const RandomServerComponent = async () => {
  const caller = appRouter.createCaller({});
  // call the tRPC endpoint
  const result = await caller.userById(2);
  return (
    <div>
      <p>RandomClientComponent</p>
      <p>Query result : {result?.name ?? "pas de nom"}</p>
    </div>
  );
};
export default RandomServerComponent;
