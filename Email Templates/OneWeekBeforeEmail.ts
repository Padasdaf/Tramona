import { EmailTemplateProps, EmailTemplate } from "@/components/ambassador/EmailTemplate";

export const OneWeekBeforeEmail = (props: EmailTemplateProps) => {
  return {
    subject: "One Week to Go! Here’s Everything You Need for Your Stay",
    body: (
      <EmailTemplate {...props}>
        <p>Hi {props.values.firstName},</p>
        <p>Your stay at {props.values.college} is just one week away, and we’re excited to welcome you. Here’s a quick reminder of the essential details:</p>
        <p>Stay Details:</p>
        <ul>
          <li>Check-in Date: {props.values.question1}</li>
          <li>Check-out Date: {props.values.question2}</li>
          <li>Address: {props.values.phone}</li>
        </ul>
        <p>Host Contact: {props.user.name} ({props.user.phoneNumber})</p>
        <p>Check-in Instructions: {props.values.question3}</p>
        <p>Local Recommendations: {props.values.otherSocialMedia}</p>
        <p>As always, if you have any questions or need assistance, your host is here to help. We can’t wait to help you enjoy a great stay!</p>
        <p>Best regards,</p>
        <p>The Tramona Team</p>
      </EmailTemplate>
    ),
  };
};
