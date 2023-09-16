import { montserrat } from "@/app/fonts";
import ContactsPage from "@/components/pages/contacts-page/contacts-page";
import { getContacts } from "@/utils/fetches";
import {getRequestData} from "@/utils/requestData";

export default async function Page() {
  var requestData = getRequestData();
  const data = await getContacts(requestData);
  return (
    <div className={`${montserrat.variable}`}>
      <ContactsPage data={data} />
    </div>
  );
}
