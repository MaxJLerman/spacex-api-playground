import { CompanyInfo } from "@/types/CompanyInfo.type";
import { CrewData } from "@/types/CrewData.type";

export const fetchAllCrewData = async (): Promise<ResponseData<CrewData[]>> => {
  const response = await fetch(`${process.env.CREW_ENDPOINT}`);

  if (!response.ok) {
    throw new Error("Failed to fetch all crew data");
  }

  const data: CrewData[] = await response.json();
  return { message: "Successfully fetched all crew data", data };
};

export const fetchCrewDataById = async (
  id: string,
): Promise<ResponseData<CrewData>> => {
  const response = await fetch(`${process.env.CREW_ENDPOINT}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch crew data of id: " + id);
  }

  const data: CrewData = await response.json();
  return { message: "Successfully fetched crew data with id", data };
};

export const fetchLaunchName = async (
  launchId: string,
): Promise<ResponseData<string>> => {
  const response = await fetch(`${process.env.LAUNCHES_ENDPOINT}/${launchId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch launch data of id: " + launchId);
  }

  const { name } = await response.json();
  return { message: "Successfully fetched crew data with id", data: name };
};

export const fetchCompanyInfo = async (): Promise<
  ResponseData<CompanyInfo>
> => {
  const response = await fetch(`${process.env.COMPANY_INFO_ENDPOINT}`);

  if (!response.ok) {
    throw new Error("Failed to fetch company information");
  }

  const data: CompanyInfo = await response.json();
  return { message: "Successfully fetched company information", data };
};
