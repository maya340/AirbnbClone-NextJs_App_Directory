import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { getSearchResult } from "../utils/api";
import { searchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";
import Map from "../components/Map";
  // Mapping Code
 async function getCoordinates(location: string) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${location}`,
    {
      headers: {
        "User-Agent": "my-airbnb-clone-app", 
      },
    }
  );

  const data = await res.json();

  if (!data || data.length === 0) return null;

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  };
}

  // Mapping Code
type SearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  NumberofGuest: string;
};
export default async function SearchResult({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  console.log(params);
  const { startDate, endDate, NumberofGuest, location } = params;

  let FormatedStartDate;
  let FormatedEndDate;
  if (startDate && endDate) {
    FormatedStartDate = format(new Date(startDate), "dd MMMM yy");
    FormatedEndDate = format(new Date(endDate), "dd MMMM yy");
    console.log(startDate);
  }
  const range = `${FormatedStartDate}-${FormatedEndDate}`;
  const filters =["Cancellation Flexibility","Type of Place","Price","Rooms and Beds","More filters"]
  const searchResultData : searchResultData = await getSearchResult()
  console.log(searchResultData)

  {/*========Mapping section  ============*/}

  
const coords = await getCoordinates(location);

const lat = coords?.lat || 51.5072;
const lng = coords?.lng || -0.1276;

{/*========Mapping section  ============*/}

  return (
    <>
      <Header
        placeholder={`${location} | ${range} | ${NumberofGuest} guests`}
        
      />
      <main>
        <section >
          <div className="container flex">
                <div className="pt-14 pr-4" >
                  <p className="text-xs">
            300+ Stays - {range} - for {NumberofGuest} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {filters.map(filter => (
              <button type="button" className="filter-btn" key={filter}>
                    {filter}
              </button>
            ))}
          </div>
          <div className="space-y-1 animate-fade-up">
            {searchResultData.map(listing => (
            <ListingCard key={listing.title} 
                  img={listing.img} 
                  title={listing.title}
                  location={listing.location} 
                  description={listing.description}
                  total={listing.total}
                  star={listing.star}
                  price={listing.price}
                  />
                ))}
          
          </div>
                </div>
          <div className="hidden xl:inline-flex xl:min-w-150 mt-50 ml-10">
           <Map lat={lat} lng={lng} />  

          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
