import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {

    try {
        const body = await req.json();

        const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASSWORD,
        },
        });

        //管理人が受け取るメール
        const toHostMailData = {
            from: body.email,
            to: process.env.GMAIL_USER,
            subject: `【お問い合わせ】${body.name}様より`,
            text: body.message + " | Sent from: " + body.email,
            html: `
                <p>【名前】</p>
                <p>${body.name}</p>
                <p>【会社】</p>
                <p>${body.company}</p>
                <p>【メッセージ】</p>
                <p>${body.message}</p>
                <p>【メールアドレス】</p>
                <p>${body.email}</p>
            `,
        };
        const info = await transporter.sendMail(toHostMailData);
        console.log("メール送信成功:", info.messageId);

        return NextResponse.json({ message: "送信に成功しました" }, { status: 200 });
        } catch (error) {
        console.error("メール送信エラー:", error);
        return NextResponse.json({ message: "送信に失敗しました" }, { status: 500 });
        }
}