import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Resume } from "./Resume";

export const ResumeForm = () => {

  return (
    <>
      <MailchimpSubscribe
        url={process.env.REACT_APP_MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <Resume
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}
