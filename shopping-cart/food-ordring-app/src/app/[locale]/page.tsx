
import getTrans from "@/src/lib/translation";
import About from "../../components/about";
import Contact from "../../components/contact";
import BestSellers from "./_components/BestSellers";
import Hero from "./_components/Hero";


type Props = {
  params: Promise<{ locale: any }>;
};

export default async function Home({ params }: Props) {
 const { locale } = await params;
  const { home } = await getTrans(locale);
  return (
    <main>
      <Hero />
      <BestSellers />
      <About />
      <Contact />
    </main>
  );
}