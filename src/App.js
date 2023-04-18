import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Header from "./components/Header/Header";
import useFetch from "./hooks/useFetch";

function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inicio" element={<Home/>} />
          <Route path="/series" element={<Series/>} />
          <Route path="/comics" element={<Comics/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;