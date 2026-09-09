import { LiveData } from "@/app/types/app";
import { getLive } from "@/app/utils/api";
import LiveCard from "../LiveCard";

const Live = async () => {
  const LiveData: LiveData = await getLive();
  return (
    <section className="pt-20">
      <div className="container">
        <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3 ">
          {LiveData.map((item) => (
            <LiveCard key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Live;
