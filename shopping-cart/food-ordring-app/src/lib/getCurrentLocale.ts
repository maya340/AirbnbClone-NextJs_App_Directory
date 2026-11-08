import { headers } from "next/headers";
import { Locale } from "../i18n.config";


const getCurrentLocale = async () => {
  
    const url = (await headers()).get("referer") || "";
    const locale = url?.split("/")[3] as Locale;
    return locale;
  
}

export default getCurrentLocale