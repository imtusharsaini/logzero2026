import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";
import Recaptcha from "./Recaptcha";
import logger from "@/lib/logger";
import api from "@/lib/api";
// import connectImage from "../../public/assets/img/connectwithus.webp";
import connectImage from "../../public/assets/img/connectwithus.png";
// const CONTACT_INQUIRY_ENDPOINT = `${(process.env.NEXT_PUBLIC_API_BASE_URL || "https://webapi.logzerotechnologies.com/api").replace(/\/$/, "")}/v1/consultation/create-inquiry`;
const CONTACT_INQUIRY_ENDPOINT = `${(process.env.NEXT_PUBLIC_API_BASE_URL || "https://webapi.logzerotechnologies.com/api").replace(/\/$/, "")}/v1/consultation/create-inquiry`;

export default function ContactSection({
  id = "contact",
  heading = "Get In Touch",
  subheading = `Ready to transform your mobile app idea into reality? Let’s\ndiscuss your project and see how we can help you achieve your\ngoals.`,
  contactCardTitle = "Let’s Start a Conversation",
  contactText = `We’re here to answer your questions and discuss how we can bring\nyour mobile app vision to life. Reach out to us through any of\nthe following channels.`,

  phone = {
    label: "Phone Number",
    number: "+91 11 40789940",
    href: "tel:+91 11 40789940",
  },
  email = {
    label: "Email",
    address: "sales@logzerotechnologies.com",
  },

  address = {
    label: "Address",
    lines: [
      "Pegasus Tower, A-10, 8th Floor Sector-68,Gautam Buddha Nagar, Noida, Uttar Pradesh, 201301,",
    ],
    mapLink: "https://maps.app.goo.gl/f1tAeRmdHf2wWoMD6",
  },

  contactDetails = {
    need: "Need immediate Help?",
    urgent: "Mail us directly for urgent requirements",
    email: "sales@logzerotechnologies.com",
  },

  form = {
    respondText: "We typically respond within 24 hours during business days.",
  },
  emailComposeMode = "mailto",
  onSubmit,
}) {
  const emailHref =
    emailComposeMode === "gmail"
      ? `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
          email.address,
        )}`
      : `mailto:${email.address}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    detail: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionMeta = buildFormLogMeta(formData);
    logger.debug({ submissionMeta }, "Submitting contact form");

    if (!recaptchaToken) {
      logger.warn(
        { submissionMeta },
        "Contact form blocked because reCAPTCHA is missing",
      );
      alert("Please complete the reCAPTCHA verification.");
      // Optional: If you are using explicit rendering, you might need to reset/re-render the widget here.
      return;
    }
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.detail.trim()) {
      errors.detail = "Please tell us about your project.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    const payload = {
      full_name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      project_desc: formData.detail,
      "g-recaptcha-response": recaptchaToken,
    };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

    try {
      logger.info(
        { submissionMeta, endpoint: CONTACT_INQUIRY_ENDPOINT },
        "Sending contact form submission",
      );

      const { data: responseData, status } = await api.post(CONTACT_INQUIRY_ENDPOINT, payload);
      if (status >= 200 && status < 300) {
        logger.info(
          {
            submissionMeta,
            endpoint: CONTACT_INQUIRY_ENDPOINT,
            status,
            responseMessage: responseData.message,
          },
          "Contact form submission successful",
        );

        // console.log(responseData);
        setFormSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          detail: "",
        });
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      } else {
        logger.error(
          {
            submissionMeta,
            endpoint: CONTACT_INQUIRY_ENDPOINT,
            status,
            responseMessage: responseData.message,
          },
          "Contact form submission failed",
        );
        alert(`Form submission failed: ${responseData.message}`);
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
      }
    } catch (error) {
      if (error.name === "AbortError") {
        logger.error({
          submissionMeta,
          endpoint: CONTACT_INQUIRY_ENDPOINT,
          error: "Request timed out",
        });
      } else {
        logger.error(
          {
            submissionMeta,
            endpoint: CONTACT_INQUIRY_ENDPOINT,
            error: error.message,
          },
          "Network error during contact form submission",
        );
      }

      console.error("Error submitting form:", error);
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } finally {
      clearTimeout(timeoutId);
    }
  };

  return (
    <section id={id} className="py-16 px-6 bgblue3 ">
      <div className="container mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3">{heading}</h2>
          <p className="mx-auto max-full md:max-w-[55%] text-center whitespace-pre-line">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-white p-6 border border-[#E6E8E999] shadow-[0px_19px_25px_-5px_rgba(16,24,40,0.05)]">
            <h3 className="mb-6 !text-[24px]">{contactCardTitle}</h3>
            <div className="mb-6">
              <Image
                src={connectImage}
                alt="Connect with us"
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
            {/* <p className="whitespace-pre-line">{contactText}</p> */}

            <ul className="space-y-5 pt-5">
              <li className="flex flex-col lg:flex-row items-start gap-4 p-2">
                <div className="w-14 h-14 p-3 bgblue0 flex items-center justify-center rounded-full">
                  <Phone size={24} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="subheading-2 mb-2 mb-2">{phone.label}</p>
                  <p className="subtextcolor text-[#525D6A] text-lg">
                    {phone.number}
                  </p>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row items-start gap-4 p-2">
                <div className="w-14 h-14 p-3 peachgreen-200 flex items-center justify-center rounded-full">
                  <Mail size={24} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="subheading-2 mb-2">{email.label}</p>
                  <div className="space-y-0.5">
                    <p className="subtextcolor  break-words text-[#525D6A] text-lg">
                      {email.address}
                    </p>
                  </div>
                </div>
              </li>

              <li className="flex flex-col lg:flex-row items-start gap-4 p-2">
                <div className="w-14 h-14 p-4 bggreen-100 flex items-center justify-center rounded-full">
                  <MapPin size={24} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="subheading-2 mb-2">{address.label}</p>
                  <p className="subtextcolor  break-words text-[#525D6A] text-lg ">
                    {address.lines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i !== address.lines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </li>

              {/* <li className="flex flex-col lg:flex-row items-start gap-4 p-2">
                <div className="w-14 h-14 p-3 bgorange-200 flex items-center justify-center rounded-full">
                  <Clock size={24} className="text-white" />
                </div>


                <div className="min-w-0">
                  <p className="subheading-2 mb-2">Business Hours</p>
                  <div className="subtext subtextcolor">
                    {businessHours.map((h, idx) => (
                      <p key={idx} className="subtext subtextcolor !mb-0">
                        {h.day}: {h.text}
                      </p>
                    ))}
                  </div>

                </div>
                
              </li> */}
            </ul>

            {contactDetails && (
              <div className="mt-6 p-4">
                <p className="!font-semibold !text-[#111827] !text-lg ">
                  {contactDetails.need}
                </p>
                <p className=" text-[#525D6A] my-2">{contactDetails.urgent}</p>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-base text-[#252525] font-medium underline hover:text-[#5BC2A7]"
                >
                  {contactDetails.email}
                </a>
              </div>
            )}
          </div>

          <div className="rounded-xl bg-white p-6 border border-[#E6E8E999] shadow-[0px_19px_25px_-5px_rgba(16,24,40,0.05)]">
            <h3 className="mb-6 !text-[24px]">Schedule a Free Consultation</h3>
            {formSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                <p className="font-bold">Success! 🎉</p>
                <p>
                  Your consultation request has been submitted. We will contact
                  you shortly.
                </p>
              </div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                  <label className="block text-[15px] leading-[22px] font-[600] text-[#111827] font-inter">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Your First Name"
                    className="block w-full box-border bg-white text-[#111827] font-inter text-[15px] leading-[22px] border border-[#E5E5E7] rounded-[6px] px-[12px] py-[12px] placeholder-slate-400 outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-2 transition-all duration-300"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-2 ">
                  <label className="block text-[15px] leading-[22px] font-[600] text-[#111827] font-inter">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your @email.com"
                    onChange={handleChange}
                    value={formData.email}
                    className="block w-full box-border bg-white text-[#111827] font-inter text-[15px] leading-[22px] border border-[#E5E5E7] rounded-[6px] px-[12px] py-[12px] placeholder-slate-400 outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-2 transition-all duration-300"
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div className="space-y-2">
                  <label className="block text-[15px] leading-[22px] font-[600] text-[#111827] font-inter">
                    Phone Number{" "}
                    <span className="text-slate-400">(Optional)</span>
                  </label>
                  <input
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    type="tel"
                    placeholder="+91 95674 78449"
                    className="block w-full box-border bg-white text-[#111827] font-inter text-[15px] leading-[22px] border border-[#E5E5E7] rounded-[6px] px-[12px] py-[12px] placeholder-slate-400 outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-2 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[15px] leading-[22px] font-[600] text-[#111827] font-inter">
                  Project Details
                </label>
                <textarea
                  name="detail"
                  rows={4}
                  onChange={handleChange}
                  value={formData.detail}
                  placeholder="Tell us about your project and requirements..."
                  className="block w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 outline-none ring-emerald-500 focus:border-emerald-500 focus:ring-2"
                />
                {formErrors.detail && (
                  <p className="text-red-500 text-sm mt-1">
                    {formErrors.detail}
                  </p>
                )}
              </div>
              <div className="flex justify-center py-4">
                <Recaptcha onVerify={setRecaptchaToken} />
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center bluenew text-white font-[600] text-[15px] leading-[22px] border border-[#5BC2A7] rounded-[6px] px-[24px] py-[17px] font-inter cursor-pointer transition duration-300 ease-in-out hover:bg-[#179A8E] hover:text-white transition-transform hover:scale-104 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  <Send className="textcolor text-[9px] pr-[10px]" /> Send
                  Message
                </button>
                <p className="mx-auto max-w-[616px] subtextcolor text-center !text-[14px] px-6">
                  {form.respondText}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

ContactSection.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  contactCardTitle: PropTypes.string,
  contactText: PropTypes.string,
  phone: PropTypes.shape({
    label: PropTypes.string,
    number: PropTypes.string,
    href: PropTypes.string,
  }),
  email: PropTypes.shape({
    label: PropTypes.string,
    address: PropTypes.string,
  }),
  address: PropTypes.shape({
    label: PropTypes.string,
    lines: PropTypes.arrayOf(PropTypes.string),
    mapLink: PropTypes.string,
  }),
  businessHours: PropTypes.arrayOf(
    PropTypes.shape({ day: PropTypes.string, text: PropTypes.string }),
  ),
  form: PropTypes.object,
  emailComposeMode: PropTypes.oneOf(["mailto", "gmail"]),
  onSubmit: PropTypes.func,
};
