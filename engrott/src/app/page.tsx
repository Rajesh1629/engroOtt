import App from "next/app";
import Home from "./components/home";
import { getCommonListingData } from "./components/apiSever";

export default async function Page() {
  const data = await getCommonListingData('1','page','playlist');   
  return (
    <>
  <Home state={data}/>
    </>
  );
}