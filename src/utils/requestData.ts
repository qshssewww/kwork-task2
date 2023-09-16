import {cookies} from "next/headers";
import { headers } from "next/headers";
export const getRequestData = () => {
    const defaultLang = 'english';
    const defaultCurrency = 'usd';
    const defaultCountry = 'AE';
    // var data = {};
    const data : {[name: string]: any} = {};

    const headersList = headers();
    data['url'] = headersList.get("x-invoke-path") || "";

    var lang :any = false
    var currency :any = false;

    var langCookie = cookies().get("lang")?.value;
    if (langCookie) lang = JSON.parse(langCookie);
    if (lang && lang['lang']) data['lang'] = lang['lang'].toLowerCase();
    else data['lang'] = defaultLang;

    currency = cookies().get("currency")?.value;
    if (currency) data['currency'] = currency;
    else data['currency'] = defaultCurrency;

    var country = cookies().get("country")?.value;
    if (!country) country = defaultCountry;
    data['city'] = country;
    return data;
}
