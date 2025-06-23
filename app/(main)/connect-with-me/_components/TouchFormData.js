"use client";

import { sendMessage } from "@/app/actions/sendMessage";
import Spinners from "@/components/Spinners";
import MessageSuccess from "@/modals/MessageSuccess";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function TouchFormData() {
   const [loading, setLoading] = useState(false);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
   const [showSuccess, setShowSuccess] = useState(false);
   const captchaRef = useRef(null);
   const [captchaToken, setCaptchaToken] = useState(null);

   const isDisable = name && email && subject && message;

   const onSubmit = async (e) => {
      e.preventDefault();

      setLoading(true);

      const formData = new FormData(e.target);
      const userData = Object.fromEntries(formData.entries());

      //  const userData = {
      //    name: e.target.name.value,
      //    company: e.target.company.value,
      //    email: e.target.email.value,
      //    isAccepted: e.target.isAccepted.value,
      //  };

      const token = captchaRef.current.getValue();
      captchaRef.current.reset();

      // formData.append("captchaToken", token);
      formData.append("captchaToken", captchaToken);

      const response = await sendMessage(formData);
      // setLoading(true);

      if (response.success) {
         setShowSuccess(true);
         setName("");
         setEmail("");
         setSubject("");
         setMessage("");
         //  setLoading(false);
      } else {
         //  setLoading(false);
         console.error("Error sending message:", response.error);
      }
      setLoading(false);

      console.log(userData);
   };

   return (
      <>
         {/* <p>
            Contact form <br />
            Email address <br />
            Social links (LinkedIn, GitHub, Facebook page) <br />
            Optionally: WhatsApp or Calendly <br />
         </p> */}

         <form onSubmit={onSubmit}>
            {/* Full Name */}
            <div className="relative my-6">
               <input
                  id="name-n10"
                  type="text"
                  name="name"
                  placeholder="your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  className="peer relative h-10 w-full border-b px-4 text-sm placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
               />
               <label
                  htmlFor="name-n10"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
                  Full Name<span className="text-red-500">*</span>
               </label>
            </div>
            {/* Phone Number */}
            <div className="relative my-6">
               <input
                  id="phone-p10"
                  type="text"
                  name="phone"
                  placeholder="phone"
                  className="peer relative h-10 w-full border-b px-4 text-sm placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
               />
               <label
                  htmlFor="phone-p10"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
                  Phone Number
               </label>
            </div>
            {/* Work Email Address */}
            <div className="relative my-6 pb-1">
               <input
                  id="email-e10"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer relative h-10 w-full border-b px-4 text-sm placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
               />
               <label
                  htmlFor="email-e10"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
                  Work Email Address<span className="text-red-500">*</span>
               </label>
               <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                  <span>We recommend using your work email</span>
               </small>
            </div>
            {/* Project Subject */}
            <div className="relative my-6">
               <input
                  id="company-d10"
                  type="text"
                  name="subject"
                  placeholder="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="peer relative h-10 w-full border-b px-4 text-sm placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
               />
               <label
                  htmlFor="company-d10"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
                  Project Subject
                  <span className="text-red-500">*</span>
               </label>
            </div>
            {/* Project Details */}
            <div className="relative mb-6">
               <textarea
                  id="id-l04"
                  type="text"
                  name="message"
                  rows="3"
                  placeholder="Write your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="peer relative w-full border-b border-slate-200 p-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
               ></textarea>
               <label
                  htmlFor="id-l04"
                  className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
               >
                  Project Details
                  <span className="text-red-500">*</span>
               </label>
               <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                  <span>
                     Briefly describe your project goals, requirements, and
                     preferred timeline.{" "}
                  </span>
                  <span className="text-slate-500">
                     {" "}
                     {message.length}/500 characters{" "}
                  </span>
               </small>
            </div>
            {/* reCAPTCHA */}
            <ReCAPTCHA
               sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               ref={captchaRef}
               onChange={(token) => setCaptchaToken(token)}
               onExpired={() => setCaptchaToken(null)}
            />
            {/* onSubmit */}
            <div className="flex justify-center items-center mt-6">
               {/* <button
                     type="submit"
                     disabled={loading || !isDisable}
                     className={`rounded-lg py-2 w-full font-semibold text-white ${
                        loading || !isDisable
                           ? "bg-blue-400 cursor-not-allowed"
                           : "bg-blue-600 hover:bg-blue-700"
                     }`}
                  >
                     {loading ? (
                        <span className="flex items-center justify-center gap-2">
                           Sending message <Spinners />
                        </span>
                     ) : (
                        "Send message"
                     )}
                  </button> */}
               {/* <button
                     type="submit"
                     disabled={loading || !isDisable || !captchaToken}
                     className={`rounded-lg py-2 w-full font-semibold text-white ${
                        loading || !isDisable || !captchaToken
                           ? "bg-blue-400 cursor-not-allowed"
                           : "bg-blue-600 hover:bg-blue-700"
                     }`}
                  >
                     {loading ? (
                        <span className="flex items-center justify-center gap-2">
                           Submitting Project Request <Spinners />
                        </span>
                     ) : (
                        "Submit Project Request"
                     )}
                  </button> */}
               <button
                  type="submit"
                  aria-busy={loading}
                  aria-disabled={loading || !isDisable || !captchaToken}
                  disabled={loading || !isDisable || !captchaToken}
                  className={`rounded-lg py-2 w-full font-semibold text-white 
      ${
         loading || !isDisable || !captchaToken
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
      } 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
      transition-colors duration-200 ease-in-out
   `}
               >
                  {loading ? (
                     <span className="flex items-center justify-center gap-2">
                        Submitting Project Request <Spinners />
                     </span>
                  ) : (
                     "Submit Project Request"
                  )}
               </button>
            </div>
         </form>
         <MessageSuccess
            isOpen={showSuccess}
            onClose={() => setShowSuccess(false)}
            title="Your request has been submitted."
            message="Thanks for reaching out! IU+2019ll get back to you soon."
         />
      </>
   );
}
