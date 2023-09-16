import { montserrat } from "@/app/fonts";
import ContactsPage from "@/components/pages/contacts-page/contacts-page";
import PolicyPage from "@/components/pages/policy-page/policy-page";
import { getContacts, getPolicy } from "@/utils/fetches";
import {getRequestData} from "@/utils/requestData";

export default async function Page() {
  var requestData = getRequestData();
  const data = await getPolicy(requestData);

  return (
    <div className={`${montserrat.variable}`}>
      <PolicyPage data={data} />
    </div>
  );
}
