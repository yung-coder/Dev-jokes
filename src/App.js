import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Jokecont from "./parts/Jokecont";
function App() {
  const [joke, setjoke] = useState([]);
  const fetch = () => {
    axios
      .get("https://backend-omega-seven.vercel.app/api/getjoke")
      .then((response) => {
        setjoke(response.data);
        console.log(response);
      });
  };
  useEffect(()=>{
    fetch();
  },[])
  return (
    <>
     <Jokecont joke={joke} fetch={fetch}/>
    </>
  );
}

export default App;
