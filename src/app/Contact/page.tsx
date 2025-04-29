"use client"
// import { Inter } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// const inter = Inter({ subsets: ["latin"] });

export default function Contact() {

  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("送信中・・・");
    console.log(nameRef.current?.value);

    const data = {
      name: nameRef.current?.value,
      company: companyRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    console.log("送信中・・・2");
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("送信に成功しました");
    });
  };

  return (
    <div className="container mt-5 ">
    <h2 className="mb-3">お問い合わせフォーム</h2>
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          お名前
        </label>
        <input
          className="form-control"
          type="text"
          id="name"
          required
          ref={nameRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="company">
          会社名
        </label>
        <input
          className="form-control"
          type="text"
          id="company"
          required
          ref={emailRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          メールアドレス
        </label>
        <input
          className="form-control"
          type="email"
          id="email"
          required
          ref={emailRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          メッセージ
        </label>
        <textarea
          className="form-control"
          id="message"
          required
          ref={messageRef}
        />
      </div>
      <button className="btn btn-danger" type="submit">
        メール送信
      </button>
    </form>
  </div>
  );
}
