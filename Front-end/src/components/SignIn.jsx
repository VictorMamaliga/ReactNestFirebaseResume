import styles from '../styles/signIn.module.scss'



const SignIn = () => {


    const handleLogin = (e)=>{
        e.preventDefault();
    }

    return (
        <section id='signIn' className={styles.signIn}>
            <div className={styles.container}>
                <h2>Sign In</h2>
                <form onSubmit={handleLogin}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="emailInput" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="passwordInput" required />
                    </div>
                    <button type="submit" className={styles.btn}>Sign In</button>
                </form>
            </div>
        </section>
    );
};

export default SignIn;
