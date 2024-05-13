import Image from "next/image";

import { fetchCrewDataById, fetchLaunchName } from "@/api/api";
import { BackButton } from "@/components/BackButton/BackButton";

interface Params {
  params: {
    id: string;
  };
}

export default async function Page({ params }: Params) {
  if (!params.id) return null;
  const { data: crewMemberData } = await fetchCrewDataById(params.id);
  const { data: launchName } = await fetchLaunchName(
    crewMemberData.launches[0],
  );

  return (
    <main
      className={
        "flex flex-col max-w-largeDesktopScreen mx-auto justify-start p-10"
      }
    >
      <div className={"flex justify-between"}>
        <BackButton />
      </div>
      <section
        className={
          "flex flex-row max-w-largeDesktopScreen items-start justify-between py-20"
        }
      >
        <div className={"flex flex-col"}>
          <span className={"uppercase text-xl"}>name</span>
          <span className={"font-bold text-3xl"}>{crewMemberData.name}</span>
          <span className={"uppercase text-xl mt-10"}>agency</span>
          <span className={"font-bold text-3xl"}>{crewMemberData.agency}</span>
          <span className={"uppercase text-xl mt-10"}>
            launches [{crewMemberData.launches.length}]
          </span>
          <span className={"font-bold text-3xl"}>{launchName}</span>
          <span className={"uppercase text-xl mt-10"}>status</span>
          <span className={"uppercase font-bold text-3xl text-green-500"}>
            {crewMemberData.status}
          </span>
        </div>
        <Image
          src={crewMemberData.image}
          alt={"img"}
          width={350}
          height={350}
        />
      </section>
    </main>
  );
}
