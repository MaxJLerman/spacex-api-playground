import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CompanyInfo } from "@/types/CompanyInfo.type";

type CompanyInfoState = {
  companyInfo: CompanyInfo;
};

const COMPANY_INFO_INITIAL_STATE: CompanyInfoState = {
  companyInfo: {
    headquarters: {
      address: "",
      city: "",
      state: "",
    },
    links: {
      website: "",
      flickr: "",
      twitter: "",
      elon_twitter: "",
    },
    name: "",
    founder: "",
    founded: 0,
    employees: 0,
    vehicles: 0,
    launch_sites: 0,
    test_sites: 0,
    ceo: "",
    cto: "",
    coo: "",
    cto_propulsion: "",
    valuation: 0,
    summary: "",
    id: "",
  },
};

export const companyInfoSlice = createSlice({
  name: "companyInfo",
  initialState: COMPANY_INFO_INITIAL_STATE,
  reducers: {
    setCompanyInfo: (state, action: PayloadAction<CompanyInfo>) => {
      state.companyInfo = action.payload;
    },
  },
});

export const { setCompanyInfo } = companyInfoSlice.actions;

export default companyInfoSlice.reducer;
