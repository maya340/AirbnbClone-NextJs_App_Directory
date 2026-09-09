import { ExploreData } from "../types/app";
import { getExplore } from "../utils/api";
import ExploreCard from "./ExploreCard";
import MainHeading from "./header/MainHeading";
import { motion } from "framer-motion";
const Explore = async () => {
  const exploreData: ExploreData = await getExplore();
  return (
    <section
  className="pt-6">
      <div className="container">
        <h3 className="
  text-3xl font-semibold tracking-tight text-gray-900 mt-6
  animate-[fadeIn_0.8s_ease-in-out]
">
  Explore Nearby
</h3>

        
        <div className="grid grid-cols-1 sm:grid-cols-2  flex items-center gap-4 p-4 rounded-xl bg-white 
  transition duration-300 cursor-pointer
  animate-[fadeInUp_0.6s_ease-in-out]
 ">
          {exploreData.map((item) => (
            <ExploreCard
              key={item.img}
              img={item.img}
              location={item.location}
              distance={item.distance}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
