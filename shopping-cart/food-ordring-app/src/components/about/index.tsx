
import { Routes } from "@/src/constans/enum";
import MainHeading from "../main-heading";
import getTrans from "@/src/lib/translation";
import getCurrentLocale from "@/src/lib/getCurrentLocale";

 async function About() {
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { about } = home;
  return (
    <section className="section-gap mt-18" id={Routes.ABOUT}>
      <div className="container text-center">
        <MainHeading subtitle={about.ourStory} title={about.aboutUs} />
        <div className="text-accent max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
           {about.descriptions.one}
          </p>
          <p>
            {about.descriptions.two}
          </p>
          <p>
            {about.descriptions.three}
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
