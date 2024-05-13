"use client";

import { useRef } from "react";
import { Provider } from "react-redux";

import { makeStore, TypedStore } from "@/redux/store/store";
import { setCrewData } from "@/redux/reducers/crew.reducer";
import { CrewData } from "@/types/CrewData.type";
import { CompanyInfo } from "@/types/CompanyInfo.type";
import { setCompanyInfo } from "../reducers/companyInfo.reducer";

interface Props {
  children: React.ReactNode;
  crewData: CrewData[];
  companyInfo: CompanyInfo;
}

export default function StoreProvider({
  crewData,
  companyInfo,
  children,
}: Props) {
  const storeRef = useRef<TypedStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(setCrewData(crewData));
    storeRef.current.dispatch(setCompanyInfo(companyInfo));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
