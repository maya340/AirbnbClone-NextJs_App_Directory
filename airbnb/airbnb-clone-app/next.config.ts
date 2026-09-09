import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images:{
    domains : ['links.papareact.com',
           "www.visitlondon.com",
           "i.imgur.com",
           "res.cloudinary.com",
           "hips.hearstapps.com",
           "media.tacdn.com",
            "upload.wikimedia.org",
            "www.thetimes.com",
            "offloadmedia.feverup.com",
            "www.visitcornwall.com",
             "devvlsnxxkrq9.cloudfront.net",
              "pictures.altai-travel.com",
              "cdn.home-designing.com",
              "www.checkinapartments.com",
              "adro.gov.ae",
    ]
  }
};

export default nextConfig;


