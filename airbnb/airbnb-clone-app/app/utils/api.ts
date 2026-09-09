export const getExplore = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/I2Y8N`);
    const exploreData = await res.json();
    return exploreData;
  } catch (error) {
    console.log(error);
  }
};

export const getLive = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
    const LiveData = await res.json();
    return LiveData;
  } catch (error) {
    console.log(error);
  }
};
export const getSearchResult = async () =>{
 try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/X205L`);
    const searchResultData = await res.json();
    return searchResultData;
  } catch (error) {
    console.log(error);
  } 
};