import { MailAdapter, SendMailData } from "../mail.adapter";
import nodemailer from 'nodemailer'
import { brotliDecompressSync } from "zlib";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9fe331ed4dbb62",
      pass: "747536709d69fe"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({ subject, body }: SendMailData) {
           
   await transport.sendMail({
        from: 'Equipe Feedget <eduardo.ananiasdev@outlook.com>',
        to: 'Eduardo Ananias <eduardo.ananias2@hotmail.com>',
        subject,
        html: body,
        
    })
    };
}