const domainUrl = process.env.BASE_URL

export async function getHomeAPIData() {
  try {
    let sliderData:any =[],otherData:any = [];
    const res = await fetch(`${domainUrl}page/page/1?siteId=822`);
    const data = await res.json();
    
    const playlistData = await Promise.allSettled(
      data?.data?.playlist
        .map(async (item: any) => {
          const response = await fetch(`${domainUrl}playlist/playlist/${item.key}?siteId=822`);
          const playlist = await response.json();
          return { [item.type]: playlist };
        })
    );
    
    playlistData.filter(result => result.status === 'fulfilled')
    .forEach((result) => {
      const value = (result as PromiseFulfilledResult<any>).value;
      const [key] = Object.keys(value);
      if(key === 'slider'){
       sliderData.push(value?.[key]?.data);
      }else 
      {     
        otherData.push(value?.[key]?.data);
       }
    })
    const filteredPlaylistData = {'sliderData': sliderData, 'otherData':otherData};
    // Return structured data
    return  filteredPlaylistData ;
  } catch (error) {
    console.error("Error fetching API data:", error);
    return { error: "Failed to fetch data" };
  }
}
export async function getcontentAPIData(section:any) {
  try {
    const res = await fetch(`${domainUrl}content/${section}/233423?siteId=822`);
    debugger
    const data = await res.json();      
    return data
  } catch (error) {
    console.error("Error fetching API data:", error);
    return { error: "Failed to fetch data" };
  }
}
export async function getAPIData() {
  try {
    const res = await fetch(`${domainUrl}page/page/3?siteId=822`);
    const data = await res.json();
    
    const articleListingData = await Promise.allSettled(
      data?.data?.playlist
        .map(async (item: any) => {
          const response = await fetch(`${domainUrl}content/playlist/${item.key}?siteId=822`);
          const playlist = await response.json();
          return { [item.type]: playlist };
        })
    );
    let articleData:any = []
    articleListingData.filter(result => result.status === 'fulfilled')
    .forEach((result) => {
      const value = (result as PromiseFulfilledResult<any>).value;
      const [key] = Object.keys(value);
      if(key === 'slider'){
       articleData.push(value?.[key]?.data);
      }
    })
    return articleData;
   
  } catch (error) {
    console.log(error, "error in article listing API");
    
  }
}
export async function getArticleListingData(){
  try {
    const res = await fetch(`${domainUrl}page/page/2?siteId=822`);
    const data = await res.json();
    
    const articleListingData = await Promise.allSettled(
      data?.data?.playlist
        .map(async (item: any) => {
          const response = await fetch(`${domainUrl}content/playlist/${item.key}?siteId=822`);
          const playlist = await response.json();
          return { [item.type]: playlist };
        })
    );
    let articleData:any = []
    articleListingData.filter(result => result.status === 'fulfilled')
    .forEach((result) => {
      const value = (result as PromiseFulfilledResult<any>).value;
      const [key] = Object.keys(value);
      if(key === 'slider'){
       articleData.push(value?.[key]?.data);
      }
    })
    return articleData;
   
  } catch (error) {
    console.log(error, "error in article listing API");
    
  }
}