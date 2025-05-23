import './ContactPage.css'

function ContactPage() {
    return (
        <div className="contact-page">
            <h2>Contact Me</h2>
            <p>If you have any questions or would like to get in touch, feel free to reach out!</p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    );
}
export default ContactPage;