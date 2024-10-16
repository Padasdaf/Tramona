import { EmailTemplateProps, EmailTemplate } from "@/components/ambassador/EmailTemplate";

export const TwoWeeksBeforeEmail = (props: EmailTemplateProps) => {
  return {
    subject: "Your Upcoming Stay is Just Two Weeks Away!",
    body: (
      <EmailTemplate {...props}>
        <p>Hi {props.values.firstName},</p>
        <p>
          We hope you’re excited about your upcoming trip to {props.values.schoolName}! Your stay at {props.values.college} is just two weeks away, and we wanted to send you a few details to make your experience as smooth as possible.
        </p>
        <p>Stay Details:</p>
        <ul>
          <li>Check-in Date: {props.values.question1}</li>
          <li>Check-out Date: {props.values.question2}</li>
          <li>Address: {props.values.phone}</li>
          <li>Host: {props.user.name}</li>
          <li>Host Contact: {props.user.phoneNumber}</li>
        </ul>
        <p>Check-in Instructions: {props.values.question3}</p>
        <p>Amenities Included: {props.values.instagram}</p>
        <p>
          If you have any questions about your stay or need anything from your host, feel free to reach out! We’ll send you more information as your check-in date approaches.
        </p>
        <p>Safe travels,</p>
        <p>The Tramona Team</p>
      </EmailTemplate>
    ),
  };
};
