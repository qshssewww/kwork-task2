import styles from "./contacts-page.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import RoutePath from "@/components/ui/route-path/route-path";
import { FC } from "react";
import Link from "next/link";

interface Props {
  data: any;
}

const ContactsPage: FC<Props> = ({ data: data }) => {
  const contacts = data.Contact.contactMass[0];
  const contacts2 = data.Contact.contactMass[1];
  const mapPosition = data.Contact.map[0].position;

  // console.log(data.Contact.contactMass,"---conf1");

  return (
    <div>
      <Header data={data} colorTheme="dark" />
      <main>
        <div className={`${styles.section} ${styles.container}`}>
          <div>
            {data?.Contact.Bread && (
              <RoutePath data={data?.Contact.Bread} colorTheme="grey" />
            )}
            <h1 className={styles.title}>{data.Contact.name}</h1>
          </div>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <h3 className={styles.contactsTitle}>{contacts?.name}</h3>
              <div className={styles.contactsGrig}>
                <div>
                  <span className={styles.contactsItemTitle}>
                    {contacts.email.name}
                  </span>
                  <span className={styles.contactsItemDesc}>
                    {contacts.email.adres}
                  </span>
                </div>
                <div className={styles.contactsMessangers}>
                  <span className={styles.contactsItemTitle}>Messengers:</span>
                  <ul className={styles.messangerList}>
                    {contacts.messenger.mass.map((mass:any) => (
                      <Link href={mass.url}>
                        <img className={styles.messangerIcon} src={mass.icon} />
                      </Link>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className={styles.contactsItemTitle}>
                    {contacts.phone.name}
                  </span>
                  <span className={styles.contactsItemDesc}>
                    {contacts.phone.adres}
                  </span>
                </div>

                <div>
                  <span className={styles.contactsItemTitle}>
                    {contacts.workTime.name}
                  </span>
                  <span className={styles.contactsItemDesc}>
                    {contacts.workTime.adres}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <h3 className={styles.contactsTitle}>{contacts2?.name}</h3>
              <div className={styles.contactsGrig}>
                <div>
                  <span className={styles.contactsItemTitle}>
                    {contacts2.email.name}
                  </span>
                  <span className={styles.contactsItemDesc}>
                    {contacts2.email.adres}
                  </span>
                </div>
                <div className={styles.contactsMessangers}>
                  <span className={styles.contactsItemTitle}>Messengers:</span>
                  <ul className={styles.messangerList}>
                    {contacts2.messenger.mass.map((mass:any) => (
                      <Link href={mass.url}>
                        <img className={styles.messangerIcon} src={mass.icon} />
                      </Link>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className={styles.contactsItemTitle}>
                    {contacts2.phone.name}
                  </span>
                  <span className={styles.contactsItemDesc}>
                    {contacts2.phone.adres}
                  </span>
                </div>

                <div>
                  <span className={styles.contactsItemTitle}>
                    {contacts2.workTime.name}
                  </span>
                  <span className={styles.contactsItemDesc}>
                    {contacts2.workTime.adres}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115712.30334037998!2d54.96925429474182!3d24.99979385040248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f11451d1e2f2d%3A0x25611a1e01c28695!2sJA%20Lake%20View%20Hotel!5e0!3m2!1sru!2sru!4v1690983856864!5m2!1sru!2sru`}
            className={styles.mapContainer}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
      <Footer data={data} />
    </div>
  );
};

export default ContactsPage;
