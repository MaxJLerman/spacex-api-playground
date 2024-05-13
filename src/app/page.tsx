import { LinkButton } from "@/elements/LinkButton/LinkButton";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-start gap-20 2xl:gap-52">
      <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mt-10">
        Explore data called from a SpaceX API endpoint
      </h1>
      <section
        className={
          "flex flex-col xl:flex-row w-full xl:w-3/5 items-center xl:justify-around gap-20 xl:gap-0"
        }
      >
        <LinkButton href={"/crew"}>Crew</LinkButton>
        <LinkButton href={"/company-info"}>Company Info</LinkButton>
      </section>
    </main>
  );
}
