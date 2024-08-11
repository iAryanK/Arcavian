import * as React from "react";

interface EmailTemplateProps {
  username: string;
  useremail: string;
  userphone: string;
  usermessage: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  useremail,
  userphone,
  usermessage,
}) => (
  <div>
    <p className="text-lg font-bold">
      Message from <span className="text-blue-500">{username}</span> !
    </p>
    <br />
    <p>Sender&apos;s MailID: {useremail}</p>
    <p>
      Sender&apos;s Phone Number:{" "}
      <span className="text-blue-500">{userphone}</span>
    </p>
    <p className="underline underline-offset-4">Sender&apos;s Message:</p>
    <p className="pt-2">{usermessage}</p>
  </div>
);
