import App from "next/app";
import '../../../public/home.css'
import Detail from "../detail/page";
import Posters from "../components/posters";
import { getAPIData } from "../components/apiSever";

const Section = async({params}:any)=>{
    let {section = ''} = await params
    section = section.replace(".html", '')
    const data = await getAPIData();
    console.log("fataaaa",data);
    
    return(
        (section === 'movie' || section === 'series' || section ==='music' ?            
            data?.map?.((item:any,index:any)=>{
                return(
                   <>
                <Posters data ={item} key={index} image = "posterImage"/>
                   </>
                )
            })
       :
        <Detail/>
        ) 
    )
}

export default Section