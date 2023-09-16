import FormInput from "@/components/ui/inputs/form-input/form-input";
import styles from "./contacts-form.module.scss";

function ContactsForm({contact}:any) {
  return (
    <div className={styles.container}>
      <p className={styles.formTitle}>Contacts</p>
      <div className={styles.form}>
        <FormInput name="name" title="Name*" value={contact.name} />
        <FormInput name="email" title="Email*" value={contact.email} />
        <FormInput name="surname" title="Surname*" value={contact.surname} />
        <FormInput name="phone" title="Phone*" value={contact.phone} />
      </div>
    </div>
  );
}

export default ContactsForm;
