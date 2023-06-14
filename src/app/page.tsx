import { Check } from "lucide-react";

export default function Home() {
  return (
    <main className={"h-screen w-screen"}>
      <div className={"flex h-full w-full items-center justify-center gap-5"}>
        <span className="inline-flex h-fit w-fit items-center rounded-full bg-blue-100 p-1.5 text-sm font-semibold text-blue-800 dark:bg-gray-700 dark:text-blue-400">
          <Check size={15} />
          <span className="sr-only">Icon description</span>
        </span>
        <h1>Starter Next.js 13 + Trpc + Flowbite + ESlint + Prettier</h1>
      </div>
    </main>
  );
}
