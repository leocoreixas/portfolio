import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Resume } from "./Resume";

export const ResumeForm = () => {

  return (
    <>
      <MailchimpSubscribe
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
