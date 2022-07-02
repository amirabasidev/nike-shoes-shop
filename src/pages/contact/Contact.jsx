import ContactForm from '../../components/contact/contactForm/ContactForm'

import classes from "./contact.module.css";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <section className={classes.contact__details}>
        <h1 className={classes.contact__title}>Contact Us</h1>
        <p className={classes.contact__description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <ContactForm />
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12785.12031650439!2d51.36260091119631!3d35.73191267909269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e073abb40a4e9%3A0x9115f15a2c882824!2sNike!5e1!3m2!1sen!2s!4v1656764148432!5m2!1sen!2s"
        loading="lazy"
        className={classes.contact__maps}
      ></iframe>
    </section>
  );
};

export default Contact;
