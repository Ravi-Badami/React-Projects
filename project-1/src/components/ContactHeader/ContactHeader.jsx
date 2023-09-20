import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`${styles.contact_section}`}>
      <h1>Contact us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempore
        porro maiores cum perferendis rerum harum iusto repellat itaque
        asperiores debitis aspernatur totam corporis ut quae delectus, eius
        nostrum? Vitae?
      </p>
    </div>
  );
};

export default ContactHeader;
