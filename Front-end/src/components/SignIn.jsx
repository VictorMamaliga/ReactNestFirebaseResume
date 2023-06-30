const SignIn = () => {
    return (
        <section id="sign-in">
            <div className="container">
                <h2>Sign In</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="btn">Sign In</button>
                </form>
            </div>
        </section>
    );
};

export default SignIn;
