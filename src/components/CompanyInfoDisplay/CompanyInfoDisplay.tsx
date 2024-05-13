"use client";

import Image from "next/image";

import { TooltipElement } from "@/elements/TooltipElement/TooltipElement";
import { useTypedSelector } from "@/redux/store/hooks";

export const CompanyInfoDisplay: React.FC = () => {
  const { companyInfo } = useTypedSelector((state) => state.companyInfoReducer);

  const summaryJSX = (
    <div className={"flex flex-col"}>
      <span className={"uppercase 2xl:text-xl mt-8 2xl:mt-14 text-right"}>
        summary
      </span>
      <span
        className={
          "font-semibold text-xl 2xl:text-3xl flex-wrap self-end text-right max-w-[600px]"
        }
      >
        {companyInfo.summary}
      </span>
    </div>
  );

  return (
    <section
      className={
        "flex flex-col md:flex-row max-w-largeDesktopScreen items-start justify-between py-10 md:py-20"
      }
    >
      <Image
        src={
          "https://image.cnbcfm.com/api/v1/image/104504783-GettyImages-494548555.jpg?v=1533926309&w=740&h=416&ffmt=webp&vtcrop=y"
        }
        className={"flex sm:hidden self-end mb-10"}
        alt={"elon"}
        width={350}
        height={250}
      />
      <div className={"flex flex-col"}>
        <div className={"grid grid-cols-2"}>
          <div className={"flex flex-col"}>
            <span className={"uppercase 2xl:text-xl"}>name</span>
            <span className={"font-bold text-xl 2xl:text-3xl"}>
              {companyInfo.name}
            </span>
          </div>
          <div className={"flex flex-col"}>
            <span className={"uppercase 2xl:text-xl text-right md:text-left"}>
              founder
            </span>
            <span
              className={
                "font-bold text-xl 2xl:text-3xl text-right md:text-left"
              }
            >
              {companyInfo.founder}
            </span>
          </div>
          <div className={"flex flex-col"}>
            <span className={"uppercase 2xl:text-xl mt-8 2xl:mt-14"}>
              founded
            </span>
            <span className={"font-bold text-xl 2xl:text-3xl"}>
              {companyInfo.founded}
            </span>
          </div>
          <div className={"flex flex-col"}>
            <span
              className={
                "uppercase 2xl:text-xl mt-8 2xl:mt-14 text-right md:text-left"
              }
            >
              employees
            </span>
            <span
              className={
                "uppercase font-bold text-xl 2xl:text-3xl text-right md:text-left"
              }
            >
              {companyInfo.employees}
            </span>
          </div>
        </div>
        <span className={"uppercase 2xl:text-xl mt-8 2xl:mt-14"}>
          valuation
        </span>
        <span className={"uppercase font-bold text-xl 2xl:text-3xl"}>
          $
          {companyInfo.valuation
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <span className={"uppercase 2xl:text-xl mt-8 2xl:mt-14"}>
          headquarters
        </span>
        <span className={"uppercase font-bold text-xl 2xl:text-3xl"}>
          {`${companyInfo.headquarters.address}, ${companyInfo.headquarters.city}, ${companyInfo.headquarters.state}`}
        </span>
        <div className={"flex md:hidden"}>{summaryJSX}</div>
        <div className={"grid grid-cols-3 mt-8 2xl:mt-14"}>
          <div className={"flex flex-col"}>
            <span className={"uppercase text-xs 2xl:text-xl"}>vehicles</span>
            <span className={"uppercase font-bold text-base 2xl:text-3xl"}>
              {companyInfo.vehicles}
            </span>
          </div>
          <div className={"flex flex-col"}>
            <span
              className={
                "uppercase text-xs 2xl:text-xl text-center md:text-left"
              }
            >
              launch sites
            </span>
            <span
              className={
                "uppercase font-bold text-base 2xl:text-3xl text-center md:text-left"
              }
            >
              {companyInfo.launch_sites}
            </span>
          </div>
          <div className={"flex flex-col"}>
            <span
              className={
                "uppercase text-xs 2xl:text-xl text-right md:text-left"
              }
            >
              test sites
            </span>
            <span
              className={
                "uppercase font-bold text-base 2xl:text-3xl text-right md:text-left"
              }
            >
              {companyInfo.test_sites}
            </span>
          </div>
        </div>
        <div className={"grid grid-cols-2 mt-8 2xl:mt-14"}>
          <div className={"flex flex-col"}>
            <span className={"uppercase text-xs 2xl:text-xl"}>ceo</span>
            <span className={"font-bold text-base 2xl:text-3xl"}>
              {companyInfo.ceo}
            </span>
          </div>
          <div className={"flex flex-col"}>
            <span
              className={
                "uppercase text-xs 2xl:text-xl text-right md:text-left"
              }
            >
              cto
            </span>
            <span
              className={
                "font-bold text-base 2xl:text-3xl text-right md:text-left"
              }
            >
              {companyInfo.cto}
            </span>
          </div>
          <div className={"flex flex-col"}>
            <span className={"uppercase text-xs 2xl:text-xl mt-8 2xl:mt-14"}>
              coo
            </span>
            <span className={"font-bold text-base 2xl:text-3xl"}>
              {companyInfo.coo}
            </span>
          </div>
          <div className={"flex flex-col"}>
            <span
              className={
                "uppercase text-xs 2xl:text-xl mt-8 2xl:mt-14 text-right md:text-left"
              }
            >
              cto propulsion
            </span>
            <span
              className={
                "font-bold text-base 2xl:text-3xl text-right md:text-left"
              }
            >
              {companyInfo.cto_propulsion}
            </span>
          </div>
        </div>
      </div>
      <div className={"flex flex-col max-xs:w-full"}>
        <Image
          src={
            "https://image.cnbcfm.com/api/v1/image/104504783-GettyImages-494548555.jpg?v=1533926309&w=740&h=416&ffmt=webp&vtcrop=y"
          }
          className={"hidden 2xl:flex"}
          alt={"elon"}
          width={600}
          height={350}
        />
        <div className={"hidden sm:block"}>{summaryJSX}</div>
        <span
          className={
            "uppercase 2xl:text-xl mt-8 2xl:mt-14 text-right hidden md:block"
          }
        >
          links
        </span>
        <div
          className={
            "grid 2xl:flex grid-cols-1 place-items-center 2xl:justify-between mt-10 md:mt-4 max-xs:gap-5"
          }
        >
          <TooltipElement
            title={"SpaceX"}
            content={"Visit SpaceX's website"}
            href={companyInfo.links.website}
          />
          <TooltipElement
            title={"Flickr"}
            content={"Visit SpaceX on Flickr"}
            href={companyInfo.links.flickr}
          />
          <TooltipElement
            title={"Twitter"}
            content={"Visit SpaceX on Twitter"}
            href={companyInfo.links.twitter}
          />
          <TooltipElement
            title={"Elon Musk on Twitter"}
            content={"Visit Elon Musk on Twitter"}
            href={companyInfo.links.elon_twitter}
          />
        </div>
      </div>
    </section>
  );
};
