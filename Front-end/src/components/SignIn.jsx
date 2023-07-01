import styles from '../styles/signIn.module.scss'


const SignIn = () => {
    return (
        <section id='signIn' className={styles.signIn}>
            <div className={styles.container}>
                <h2>Sign In</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className={styles.btn}>Sign In</button>
                </form>
            </div>
        </section>
    );
};

export default SignIn;
