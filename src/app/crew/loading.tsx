import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <main
      className={
        "flex flex-col max-w-largeDesktopScreen mx-auto justify-start p-5 pt-0 2xl:p-10"
      }
    >
      <section
        className={
          "flex flex-col w-full items-center justify-center pt-7 2xl:pt-10 gap-10 2xl:gap-20"
        }
      >
        <Skeleton className={"rounded-md h-10 w-40"} />
        <div>
          {"abcdefghij".split("").map((index) => (
            <Skeleton
              key={index}
              className={"rounded-md w-[1200px] h-10 mt-6"}
            />
          ))}
        </div>
        <Skeleton className={"rounded-md h-10 w-60"} />
        <Skeleton className={"rounded-md h-10 w-60 mt-5"} />
      </section>
    </main>
  );
}
