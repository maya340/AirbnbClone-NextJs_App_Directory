import Banner from "./components/Banner";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import GreatestOutdoors from "./components/GreatestOutdoors";
import Header from "./components/header/Header";
import Live from "./components/header/Live";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Banner/>
      <Explore/>
      <Live/>
      <GreatestOutdoors
      img="https://pictures.altai-travel.com/1160x0/mount-everest-nepal-istock-3746.jpg"
      title="The Greatest Outdoors"
      description="Wishlists curated by Airbnb"
      linkText="Get Inspired"
      />
    </main>
    <Footer/>
    </>
    
  );
}
