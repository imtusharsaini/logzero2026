"use client";
import { createContext } from "react";
import * as StaticData from "@/lib/staticData";

export const Lztallcontext = createContext({});

const LztProvider = ({ children }) => {
  // We are removing the client-side fetch for 'blogs' (case studies)
  // because it should be done on the server or by the specific component if needed.
  // For backward compatibility with components using context, we provide empty state for blogs.

  const contextValue = {
    ...StaticData,
    blogs: [], // Default empty, or could be passed from props if LztProvider accepted it
    caseStudiesLoaded: true,
    caseStudiesError: false,
  };

  return (
    <Lztallcontext.Provider value={contextValue}>
      {children}
    </Lztallcontext.Provider>
  );
};

export default LztProvider;
