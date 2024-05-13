import { BackButton } from "@/components/BackButton/BackButton";
import { CompanyInfoDisplay } from "@/components/CompanyInfoDisplay/CompanyInfoDisplay";

export default async function Page() {
  return (
    <main
      className={
        "flex flex-col max-w-largeDesktopScreen mx-auto justify-start p-5 2xl:p-10 mt-[-60px] md:mt-0"
      }
    >
      <div className={"flex justify-between"}>
        <BackButton />
      </div>
      <section
        className={
          "flex flex-col w-full items-center justify-center pt-7 2xl:pt-10 gap-10 2xl:gap-20"
        }
      >
        <h1 className={"text-3xl 2xl:text-4xl font-bold flex text-center"}>
          Company Info Page
        </h1>
      </section>
      <CompanyInfoDisplay />
    </main>
  );
}
