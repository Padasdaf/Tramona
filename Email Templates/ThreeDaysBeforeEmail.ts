import { EmailTemplateProps, EmailTemplate } from "@/components/ambassador/EmailTemplate";

export const ThreeDaysBeforeEmail = (props: EmailTemplateProps) => {
  return {
    subject: `3 Days Until Your Stay at ${props.values.college}!`,
    body: (
      <EmailTemplate {...props}>
        <p>Hi {props.values.firstName},</p>
        <p>Just 3 days left until your stay at {props.values.college}! We want to make sure everything is set for your arrival. Here’s a final reminder of your trip details:</p>
        <p>Stay Details:</p>
        <ul>
          <li>Check-in Date: {props.values.question1} at {props.values.twitter}</li>
          <li>Check-out Date: {props.values.question2} by {props.values.instagram}</li>
          <li>Address: {props.values.phone}</li>
        </ul>
        <p>Host Contact: {props.user.name} ({props.user.phoneNumber})</p>
        <p>Check-in Information: {props.values.question3}</p>
        <p>Have a great trip, and don’t hesitate to reach out if you need any last-minute assistance!</p>
        <p>Safe travels,</p>
        <p>The Tramona Team</p>
      </EmailTemplate>
    ),
  };
};
