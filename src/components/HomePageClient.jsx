"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import api from "@/lib/api";
import FAQSection from "@/components/FAQSection";
import ScrollingLogosSection from "@/components/ScrollingLogosSection";
import {
  Eye,
  Target,
  Award,
  UsersIcon,
  CheckCircle,
  Users,
  TrendingUp,
} from "lucide-react";
import CountUp from "react-countup";
import Trusted from "@/components/Trusted";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import CardContainer from "@/components/CardContainer";
import SuccessStory from "@/components/SucessStory";
import HeroSection from "@/components/HeroSection";
import GreenButton from "@/components/GreenButton";
import ContactUsForm from "@/components/ContactUsForm";
import batch1 from "../../public/assets/img/batch1.webp";
import batch2 from "../../public/assets/img/batch2.webp";
import batch3 from "../../public/assets/img/batch3.webp";

// Import static data directly
import { OurServicesList, testimonialsOne, SucessStoryData } from "@/lib/staticData";

const BgColors = [
  "bgblue",
  "peachgreen",
  "bggreen",
  "bgpurpal",
  "bgorange",
  "bgdarkgreen",
];

const rowOne = [
  {
    icon: CheckCircle,
    countEnd: 1000,
    countSuffix: "+",
    title: "Projects Successfully Delivered",
    text: "From startups to large enterprises, we deliver solutions that drive business growth",
    iconBgClass: "bg-blue-600",
  },
  {
    icon: Users,
    countEnd: 100,
    countSuffix: "+",
    title: "Skilled Web Developers",
    text: "Our team consists of experts in every aspect of web development and IT solutions",
    iconBgClass: "bg-purple-600",
  },
  {
    icon: Award,
    countEnd: 99.9,
    countSuffix: "%",
    decimals: 1,
    title: "Client Satisfaction Rate",
    text: "We maintain the highest standards of service quality and client satisfaction",
    iconBgClass: "bg-green-600",
  },
  {
    icon: TrendingUp,
    big: "24/7",
    title: "Support & Monitoring",
    text: "Round-the-clock support and monitoring to ensure your systems run smoothly",
    iconBgClass: "bg-gray-600",
  },
];

const rowTwo = [
  {
    countEnd: 11,
    countSuffix: "+ Years",
    title: "Industry Experience",
    text: "Delivering innovative solutions since 2016",
  },
  {
    countEnd: 50,
    countSuffix: "+ Countries",
    title: "Global Reach",
    text: "Serving clients worldwide across continents",
  },
  {
    big: "ISO 9001 & 27001",
    title: "Quality Certified",
    text: "International quality management standards",
  },
];

const services = [
  "Web Development Services",
  "Mobile App Development",
  "Data Management Services",
  "Cloud Services",
  "UI/UX Design & Development",
  "Testing & QA",
];

const faqs = [
  {
    qId: 1,
    question: "What services does LogZero Technologies offer?",
    answer:
      "We provide complete IT solutions including web development, mobile app development, UI/UX design, cloud services, software development, solutions, data management, QA testing, and remote tech teams.",
  },
  {
    qId: 2,
    question: " Why should I choose LogZero Technologies for my project?",
    answer:
      "Because we focus on quality, transparency, modern technologies, and scalable solutions. Our team understands your business goals and delivers results that drive real growth.",
  },
  {
    qId: 3,
    question: "Do you offer customized digital solutions for businesses?",
    answer:
      "Yes. Every solution we build—websites, mobile apps, software, dashboards, or cloud systems—is fully customized to your business needs and long-term goals.",
  },
  {
    qId: 4,
    question: "  Do you work with startups as well as enterprises?",
    answer:
      "Absolutely. We support startups, SMEs, and large enterprises with flexible engagement models and tailored tech solutions.",
  },
  {
    qId: 5,
    question: "How does LogZero  ensure quality and timely delivery?",
    answer:
      "We follow a structured process that includes requirement analysis, agile development, QA testing, code reviews, and milestone-based delivery to ensure high-quality output.",
  },
  {
    qId: 6,
    question: " Do you provide ongoing support after project delivery?",
    answer:
      "Yes. We offer continued support, maintenance, updates, performance optimization, and technical assistance to keep your product running smoothly.",
  },
];

export default function HomePageClient({ caseStudies }) {
  const topRef = useRef(null);
  const [status, setStatus] = useState("");

  // Use passed case studies or fallback to static data
  const displayedCaseStudies = caseStudies && caseStudies.length > 0 ? caseStudies : SucessStoryData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formFields = {
      fullName: e.target.fullName?.value ?? "",
      email: e.target.email?.value ?? "",
      phone: e.target.phone?.value ?? "",
      projectDetails: e.target.projectDetails?.value ?? "",
    };

    try {
      const response = await api.post("/api/contact", formFields, { baseURL: "" });

      if (response.status >= 200 && response.status < 300) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <HeroSection
        title="Empowering Your Digital Transformation"
        description="Specializing in Web Development, Mobile App Development, Data Management, DevOps, and UI/UX Design "
        description2={false}
        shortdescription={false}
        addCounterNo={true}
        BtnPrimary={true}
        buttonText="Request a Consultation"
        buttonLink="/"
        isocertified={false}
        KeyFeatures={true}
        servicesOptions={services}
        bannerimage="/assets/img/empowering.webp"
        nostats={[
          { Novalue: 1000, indicator: "+", label: "Projects Completed" },
          { Novalue: 100, indicator: "+", label: "Expert Developer" },
          { Novalue: 10, indicator: "+", label: "Industries Served" },
        ]}
      />

      <section className="bggray1 px-6 animate-zoomIn ">
        <div className="container mx-auto ">
          <div className="text-center py-16">
            <h2 className="">About LogZero Technologies</h2>
            <p className="mt-4 max-w-3xl mx-auto">
              We are a leading IT solutions company dedicated to empowering
              businesses through innovative technology solutions and exceptional
              service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center  ">
            <div className="space-y-8  ">
              <div className="flex gap-4 items-start ">
                <div className="w-14 h-14 p-4 bgblue5 flex items-center justify-center rounded-full">
                  <Target className="text-[#1658E9] text-xl" />
                </div>
                <div>
                  <p className="subheading-2 ptextcolor">Our Mission</p>
                  <p className="subtext subtextcolor">
                    To deliver cutting-edge technology solutions that drive
                    business growth and digital transformation for our clients
                    worldwide.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 p-4 bgblue6 flex items-center justify-center rounded-full">
                  <Eye className="text-[#14886F] text-xl" />
                </div>
                <div>
                  <p className="subheading-2 ptextcolor">Our Vision</p>
                  <p className="subtext subtextcolor">
                    To be the global leader in innovative IT solutions,
                    recognized for excellence in service delivery and client
                    satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-14 h-14 p-4 bgpurpal2 flex items-center justify-center rounded-full">
                  <Award className="text-[#996218] text-xl" />
                </div>
                <div>
                  <p className="subheading-2 ptextcolor">Our Values</p>
                  <p className="subtext subtextcolor">
                    Innovation, quality, integrity, and client success form the
                    foundation of everything we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end bggray1  mx-auto">
              <div className="flex">
                <video
                  src="/assets/img/homeviedo.mp4"
                  autoPlay
                  muted
                  loop
                  controls
                  width="100%"
                  className="rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] object-cover min-h-[350px]"
                />
              </div>
            </div>
          </div>

          <div className="py-16 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 text-center">
            <div className="text-center">
              <div className=" flex items-center justify-center  mx-auto">
                {/* <UsersIcon className="text-[#ffffff] text-xl" /> */}
                <Image src={batch1} className="" alt="year of experience image" />
              </div>
              <h4 className="mt-3">11+ Years Experience</h4>
              <p className="mt-2 subtext subtextcolor px-4">
                Delivering exceptional IT solutions since 2014 to drive business growth through reliable development, innovation, and expert support.
              </p>
            </div>

            <div className="text-center">
              <div className=" flex items-center justify-center  mx-auto">
                {/* <UsersIcon className="text-[#ffffff] text-xl" /> */}
                <Image src={batch2} className="" alt="ISO 9001 and 27001 Certified" />
              </div>
              <h4 className="mt-3">ISO 9001 and 27001 Certified</h4>
              <p className="mt-2 subtext subtextcolor px-4">
              Quality and information security certified, ensuring secure and consistent delivery.
              </p>
            </div>

            <div className="text-center">
             <div className=" flex items-center justify-center  mx-auto">
                {/* <UsersIcon className="text-[#ffffff] text-xl" /> */}
                <Image src={batch3} className="" alt="DesignRush" />
              </div>
              <h4 className="mt-3">Industry Recognition</h4>
              <p className="mt-2 subtext subtextcolor px-4">
              Proudly recognized by DesignRush as one of the Top Web Development Companies (2025).
              </p>
            </div>
          </div>
        </div>
      </section>

      <Trusted
        bgcolorchange="bgsecondary"
        titlecolor="textwhite"
        subtitlecolor="textwhite"
        title="Trusted by Leading Companies"
        subtitle="We’ve partnered with industry leaders across various sectors"
      />

      <section className="py-16 px-6 bggray1 animate-zoomIn   ">
        <div className="container mx-auto">
          <div className="headingbox pb-2">
            <h2 className="mb-4 text-center">Our Services</h2>
            <p className="text-center mb-10 max-w-full md:max-w-[65%] mx-auto">
              Comprehensive IT solutions designed to accelerate your business
              growth and digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {OurServicesList?.map((service, index) => (
              <CardContainer
                key={index}
                index={index}
                service={service}
                bgadd="bggray1"
                borderadd="border0px"
                bordercolor="border-[#E6E6E6]"
                maincartrounded="rounded-[10px]"
                shadowadd="shadow1"
                IconbgColor={BgColors[index % BgColors.length]}
                roundcorner="rounded-full"
                desminheight="min-h-[80px]"
                lineclamp="line-clamp-3"
                ctaType="primary"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 animate-zoomIn  ">
        <CTA
          title="Need Expert Developer"
          description="Hire our skilled developers to work on your projects with flexible engagement models"
          linkUrl="/developer-for-hire"
          ctabtnType="primary"
          linkText="Hire a Developer"
        />
      </section>

      <section className="py-16 px-6 bg-[#F2F7FC]">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="">Tailored Data Services Across Industries</h2>
            <p className="mt-5 max-w-full md:max-w-[75%] mx-auto">
              Every sector has unique data challenges. We provide
              industry-specific data governance frameworks to ensure compliance
              and efficiency.
            </p>
          </div>

          <div className="flex md:flex-nowrap flex-wrap pt-6 pb-6">
            <div className="md:w-[50%] w-full pr-4">
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-lg group h-[245px]">
                  <Image
                    src="/assets/img/healthcare.jpg"
                    alt="Healthcare"
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                      Healthcare
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 h-[465px] sm:h-[365px]">
                  <div className="relative overflow-hidden rounded-lg group">
                    <Image
                      src="/assets/img/travel.jpg"
                      alt="Travel"
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                        Travel
                      </span>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-lg group">
                    <Image
                      src="/assets/img/realestate.jpg"
                      alt="Real Estate"
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                        Real Estate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[50%] w-full pr-4 mt-4 md:mt-0">
              <div className="grid gap-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 h-[465px] sm:h-[365px]">
                  <div className="relative overflow-hidden rounded-lg group">
                    <Image
                      src="/assets/img/automobile.jpg"
                      alt="automobile"
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                        Automobile
                      </span>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-lg group">
                    <Image
                      src="/assets/img/ecommerce.jpg"
                      alt="E-commerce"
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                        E-commerce
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-lg group h-[245px]">
                  <Image
                    src="/assets/img/media.jpg"
                    alt="media"
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-[#111827] font-semibold text-[16px] px-4 py-2 rounded shadow">
                      Media
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <div className="inline-block">
              <GreenButton
                text="+ More Industries"
                linkurl="/industry"
                linktarget=""
                MoveRighticon={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F6F6F6]">
        <div className="container mx-auto">
          <Testimonials
            title="See Why Our Clients Trust Us"
            subtitle="Discover how our solutions have helped clients achieve success. Hear their stories and experiences with our services."
            testimonials={testimonialsOne}
          />
        </div>
      </section>

      <section className="px-6 bgblue1 py-16">
        <div className="container mx-auto">
          <SuccessStory
            title="Our Success Story"
            subtitle="Real projects, real results. See how we’ve helped businesses transform their ideas into successful mobile applications that drive growth and user engagement."
            caseStudies={displayedCaseStudies}
            portfolioCategorySlug="mobile-development"
          />
        </div>
      </section>


    {/* Scrolling Logos Section */}
    
      <ScrollingLogosSection
          title="Build Smarter Digital Experiences with Expert Web Technologies"
          description="We build smart, engaging digital experiences using modern web technologies—delivering high-performance websites 
                  and web apps that drive real results."
      />
   
                

      <section className="bgsecondary py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="!text-white">Our Achievements</h2>
            <p className="text-white mt-2">
              Numbers that reflect our commitment to excellence and client
              success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 justify-between">
            {rowOne.map((item, i) => (
              <article
                key={`r1-${i}`}
                className="bg-[#163B31] border !border-white/10 rounded-lg p-5 flex flex-col hover:bg-[#1f4d40] transition-transform hover:scale-104"
              >
                <div className="flex items-start flex-col gap-3">
                  <div
                    className={`mb-3 rounded-full h-12 w-12 flex items-center justify-center ${item.iconBgClass}`}
                  >
                    <item.icon size={24} className="text-white" />
                  </div>

                  <p className="!text-white !font-Sumana !text-[2rem] !font-semibold">
                    {item.countEnd ? (
                      <CountUp
                        end={item.countEnd}
                        suffix={item.countSuffix}
                        decimals={item.decimals || 0}
                        duration={2.5}
                        enableScrollSpy={true}
                        scrollSpyDelay={300}
                        separator=","
                      />
                    ) : (
                      item.big
                    )}
                  </p>

                  <h4 className="!text-white">{item.title}</h4>
                  <p className="mt-2 text-white subtext"> {item.text} </p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            {rowTwo.map((item, i) => (
              <article
                key={`r2-${i}`}
                className="bg-[#163B31] border border-white/10 rounded-lg p-5 gap-3 hover:bg-[#1f4d40] transition-transform hover:scale-104"
              >
                <div className="flex flex-col gap-3">
                  <p className="!text-white !font-Sumana !text-[2rem] !font-semibold">
                    {item.countEnd ? (
                      <CountUp
                        end={item.countEnd}
                        suffix={item.countSuffix}
                        decimals={item.decimals || 0}
                        duration={2.5}
                        enableScrollSpy={true}
                        scrollSpyDelay={300}
                        separator=","
                      />
                    ) : (
                      item.big
                    )}
                  </p>

                  <h4 className="!text-white"> {item.title} </h4>
                  <p className="text-white subtext"> {item.text} </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center mt-7">
            <a
              href="/case-studies"
              className="bluenew textcolor px-7 py-3 rounded-lg text-base font-bold max-w-[338px] flex items-center justify-center hover:brightness-95 transition-transform hover:scale-104"
            >
              Join Our Success Stories
            </a>
          </div>
        </div>
      </section>

      <ContactUsForm
        heading="Get In Touch"
        subheading="Ready to transform your  idea into reality? Let’s discuss your project and see how we can help you achieve your goals."
        contactCardTitle="Why choose LogZerotechnologies?"
        contactText=""
        phone={{
          label: "Expert Developer",
          number: "Skilled professionals with proven track records",
          
        }}
        email={{
          label: "Quick Turnaround",
          address: "Start your project within 24-48 hours",
        }}
        emailComposeMode="gmail"
        address={{
          label: "Competitive Rates",
          lines: ["Quality development at affordable prices"],
        }}
        contactDetails={{
          need: "Need immediate Help?",
          urgent: "Mail us directly for urgent requirements",
          email: "sales@logzerotechnologies.com",
        }}
        // businessHours={[
        //   { day: "Monday–Friday", text: "24x7 Open" },
        //   { day: "Saturday", text: "Closed" },
        //   { day: "Sunday", text: "Closed" },
        // ]}
        form={{
          respondText:
            "🔒Your information is secure and will only be used to contact you about your inquiry.",
        }}
        onSubmit={(formData) => {
          // console.log("Form submitted:", formData);
        }}
      />

      <FAQSection
        title="FAQs"
        subtitle=""
        faqs={faqs}
        sectionBg="#F2F7FC"
        cardBg="#042C21"
      />
    </>
  );
}
