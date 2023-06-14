"use client";
import { trpc } from "@/lib/trcpClient";

const RandomClientComponent = () => {
  const { data, error } = trpc.userById.useQuery(1);
  return (
    <div>
      <p>RandomClientComponent</p>
      {data?.name ? (
        <p>Query result : {data?.name ?? error ?? ""}</p>
      ) : (
        <p>Query result : {error?.message}</p>
      )}
    </div>
  );
};

export default RandomClientComponent;
