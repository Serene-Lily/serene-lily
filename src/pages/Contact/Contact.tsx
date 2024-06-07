import './Contact.css'
import { ContactUsForm } from './ContactUsForm'

export const Contact = () => {
  return (
    <div className="contact__container">
      <h2>Contact Us</h2>
      <p>
        Ready to take the next step? Reach out to us today and discover how we
        can help you achieve your digital goals.
      </p>

      <ContactUsForm />

      <p>
        By blending our professional experience with a personal touch, we aim to
        make our story relatable and our expertise evident. We look forward to
        the opportunity to work with you and to turn your web dreams into
        reality.
      </p>
    </div>
  )
}
