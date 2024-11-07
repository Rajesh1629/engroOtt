import App from "next/app";
import '../../../public/home.css'
import Detail from "../detail/page";
import Posters from "../components/posters";

const Section = async({params}:any)=>{
    let {section = ''} = await params
    section = section.replace(".html", '')
    const data = await getAPIData(section);
    
    return(
        (section === 'movie' || section === 'series' || section ==='livetv' ?            
            
       <Posters data ={data?.data} image = "posterImage"/>
       :
           <Detail/>
        ) 

    )
}
export async function getAPIData(section:any) {
    try {
      const res = await fetch(`https://apifo-wyk-xms.engro.in/api/frontend-config/v2/content/${section}?lang=en&platform=android`);
      const data = await res.json();      
      return data
    } catch (error) {
      console.error("Error fetching API data:", error);
      return { error: "Failed to fetch data" };
    }
  }
export default Section