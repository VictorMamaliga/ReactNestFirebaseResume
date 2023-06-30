const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2>Contact</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn">Submit</button>
                    </div>
                </form>

                <div className="social-media-links">
                    <a href="#" target="_blank">LinkedIn</a>
                    <a href="#" target="_blank">Github</a>
                    <a href="#" target="_blank">Twitter</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
