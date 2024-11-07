import App from "next/app";
import Home from "./components/home";
import { getHomeAPIData } from "./components/apiSever";

export default async function Page() {
  const data = await getHomeAPIData();
  return (
    <>
  <Home state={data}/>
    </>
  );
}