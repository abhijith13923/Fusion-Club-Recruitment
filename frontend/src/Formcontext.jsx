import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    regId: "",
    email: "",
    contact: "",
    otherClub: "",

    timeCommitment: "",
    workingStyle: "",
    genres: [],

    teams: [],
    experience: "",
    instagram: "",
    linkedin: "",
    github: "",
    fitReason: "",
    expectations: "",
    source: ""
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
