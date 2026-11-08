import getCurrentLocale from "@/src/lib/getCurrentLocale";
import getTrans from "@/src/lib/translation";

const Footer =  async () => {
 const locale = await getCurrentLocale();
  const { copyRight } = await getTrans(locale);
  
  return (
    <footer className='border-t p-8 text-center text-accent'>
      <div className='container'>
        <p>{copyRight}</p>
      </div>
    </footer>
  );
};

export default Footer;