import MainHeading from "@/src/components/main-heading";
import Menu from "@/src/components/menu";
import getCurrentLocale from "@/src/lib/getCurrentLocale";
import getTrans from "@/src/lib/translation";
import { getBestSellers } from "@/src/server/db/product";

async function BestSellers() {
const bestSellers = await getBestSellers(3)
  const locale = await getCurrentLocale();
  const {home} = await getTrans(locale);
  const {bestSeller}= home;
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading title={bestSeller.OurBestSellers} subtitle={bestSeller.checkOut} />
        </div>
        <Menu items={bestSellers}/>
      </div>
    </section>
  );
}

export default BestSellers;
