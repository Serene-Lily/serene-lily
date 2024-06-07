import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const serviceId = process.env.REACT_APP_CONTACT_FORM_SERVICE_ID
const templateId = process.env.REACT_APP_CONTACT_FORM_TEMPLATE_ID
const publicKey = process.env.REACT_APP_EMAIL_JS_API_KEY

export const ContactUsForm = () => {
  const form = useRef()

  const sendEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()

    emailjs
      .sendForm(
        // @ts-ignore
        serviceId,
        templateId,
        // @ts-ignore
        form.current,
        {
          publicKey,
        },
      )
      .then(
        () => {
          console.log('SUCCESS!')
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  // TODO: validation and error handling on form, CAPTCHA test
  return (
    // @ts-ignore
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
    </form>
  )
}
