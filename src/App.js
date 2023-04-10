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

  const  exampleApi =
   useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=d8678cc1aab56cc80df385b41b2745d6&hash=8c539840b7d8959c5ce38501dfe92527');

   console.log(exampleApi)
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