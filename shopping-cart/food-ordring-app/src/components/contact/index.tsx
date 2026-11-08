import { Routes } from "@/src/constans/enum";
import MainHeading from "../main-heading";
import getTrans from "@/src/lib/translation";
import getCurrentLocale from "@/src/lib/getCurrentLocale";

const Contact =  async () => {
  const locale = await getCurrentLocale();
  const { home } = await getTrans(locale);
  const { contact } = home;
  return (
    <section className='section-gap mt-20' id={Routes.CONTACT}>
      <div className='container text-center'>
        <MainHeading
          subtitle={contact["Don'tHesitate"]}
          title={contact.contactUs}
        />
        
        <div className='mt-8'>
          <a className='text-4xl underline text-accent' href='tel:+2012121212'>
            +963******
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;