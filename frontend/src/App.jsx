import { Routes, Route } from "react-router-dom";
import { FormProvider } from "./Formcontext";
import "./App.css";

import Section1 from "./pages/section1";
import Section2 from "./pages/section2";
import Section3 from "./pages/section3";
import Preview from "./pages/preview";
import Success from "./pages/success";

function App() {
  return (
    <FormProvider>
      <Routes>
        <Route path="/" element={<Section1 />} />
        <Route path="/section2" element={<Section2 />} />
        <Route path="/section3" element={<Section3 />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </FormProvider>
  );
}

export default App;
