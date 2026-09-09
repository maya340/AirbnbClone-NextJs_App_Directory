import Link from "next/link"

 const Footer = () => {
    const links = [
        {
            title:"ABOUT",
            links:[
                "How Airbnb Work",
                "Newsroom",
                "Investors",
                "Airbnb Plus",
                "Airbnb Luxe",
            ]
        }
        ,
        {
            title:"COMMUNITY",
            links:[
                "Accessibility",
                "This is not a real site",
                "Its a pretty awesome clone",
                "Referrals accepted",
                "Papafam",
            ]
        }
        ,
        {
            title:"HOST",
            links:[
                "Papa React",
                "Presents",
                "Zero to full Stack Here",
                "Hundreds of Students",
                "Join Now",
            ]
        },
        {
            title:"SUPPORT",
            links:[
                "Help Centre",
                "Trust & Safety",
                "Say Hi Youtube",
                "Easer Eggs",
                "For the Win",
            ]
        }

    ]
   return (
    <footer>
  <div className="grid grid-cols-2 gap-x-10 gap-y-10 
                  md:grid-cols-4 
                  py-12 px-6 sm:px-10 md:px-20 lg:px-32 
                  bg-gray-100
                  leading-none
                  ">

    {links.map((link) => (
      <div key={link.title} className="text-xs text-gray-800 space-y-4">
        <h5 className="font-bold">{link.title}</h5>
        {link.links.map((item) => (
          <Link
            href={item}
            key={item}
            className="block transition-all hover:text-gray-900 hover:translate-x-0.5"
          >
            {item}
          </Link>
        ))}
      </div>
    ))}

  </div>
</footer>

   )
 }
 
 export default Footer