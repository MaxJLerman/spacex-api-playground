import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <main
      className={
        "flex flex-col max-w-largeDesktopScreen mx-auto justify-start p-10"
      }
    >
      <section
        className={
          "flex flex-col w-full items-center justify-center pt-7 2xl:pt-10 gap-10 2xl:gap-20"
        }
      >
        <Skeleton className={"rounded-md h-10 w-72"} />
        <section
          className={
            "flex flex-row max-w-largeDesktopScreen items-start justify-between py-20 gap-[1000px]"
          }
        >
          <div className={"flex flex-col gap-10"}>
            <div className={"grid grid-cols-2 gap-10"}>
              {"abcd".split("").map((index) => (
                <div key={index} className={"flex flex-col"}>
                  <Skeleton className={"h-7 w-10 rounded-md"} />
                  <Skeleton className={"h-10 w-20 rounded-md mt-5"} />
                </div>
              ))}
            </div>
            <Skeleton className={"h-7 w-14 rounded-md"} />
            <Skeleton className={"h-10 w-30 rounded-md"} />
          </div>
          <div className={"flex flex-col"}>
            <Skeleton className={"h-40 w-60 rounded-md"} />
          </div>
        </section>
      </section>
    </main>
  );
}
