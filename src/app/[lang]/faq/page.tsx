import { montserrat } from "@/app/fonts";
import ContactsPage from "@/components/pages/contacts-page/contacts-page";
import FaqPage from "@/components/pages/faq-page/faq-page";
import PolicyPage from "@/components/pages/policy-page/policy-page";
import { getContacts, getFaq, getPolicy } from "@/utils/fetches";
import {getRequestData} from "@/utils/requestData";

export default async function Page() {
  var requestData = getRequestData();
  const data = await getFaq(requestData);

  return (
    <div className={`${montserrat.variable}`}>
      <FaqPage data={data} />
    </div>
  );
}
