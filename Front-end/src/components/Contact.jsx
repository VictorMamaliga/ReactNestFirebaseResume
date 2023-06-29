
const Contact = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;
