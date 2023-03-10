import { BrowserRouter, Routes } from "react-router-dom";
import { BASEURL } from "./constants";

function App() {
  return (
    <BrowserRouter basename={BASEURL}>
    <Routes>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
