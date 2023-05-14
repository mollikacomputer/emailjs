import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
// for email js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  // for email js
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6cbaf0b",
        "template_39szbht",
        form.current,
        "QZ-FwUQStvQDi1wdO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h2 className="text-3xl">EmailJS</h2>
      <p>Sent mail without server code</p>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sent Your Request</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              className="input input-error w-full max-w-xs"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              className="input input-bordered input-error w-full max-w-xs"
            />
            <label>Message</label>
            <textarea
              name="message"
              className="input input-bordered input-error w-full max-w-xs"
            />
            <div className="card-actions justify-start">
              <button type="submit" value="Send" className="btn">
                Buy Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
