import '../../../public/home.css'
import Slider from "./Slider";
import SmallSlider from "./smallSlider";
const Home = ({ state }: any) => {
  
  return (
    <div className="main" id="main">
      {
        state?.sliderData?.map?.((item:any,index:any)=>{
         return(
          index == 0 ?
            <Slider state={item} />
           :
             <div className='container'>
                <SmallSlider state = {item}/>
              </div>
           )
        })
      }     
    </div>
  );
};

export default Home;