import styles from '../styles/contact.module.scss'

const Contact = () => {
    return (
        <section id='contact' className={styles.contact}>
            <div className={styles.container}>
                <h2>Contact</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>

                    <div className={styles.formGroup}>
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>

                <div className={styles.socialMediaLinks}>
                    <a href="#" target="_blank">LinkedIn</a>
                    <a href="#" target="_blank">Github</a>
                    <a href="#" target="_blank">Twitter</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
