import React from "react";
import CountUp from "react-countup";
import {
  BsGlobe,
  BsPhone,
  BsDatabase,
  BsServer,
  BsPalette,
  BsCheckCircle,
  BsGlobe2,
} from "react-icons/bs";

import {
  Wrench,
  RefreshCcw,
  DollarSign,
  BadgeInfo,
  ClockArrowDown,
  Headset,
  ShoppingBag,
  Briefcase,
  Truck,
  SmartphoneCharging,
  ShieldCheck,
  MonitorCog,
  LayoutGrid,
  Smartphone,
  ShieldEllipsis,
  GraduationCap,
  TabletSmartphone,
  Users,
  Globe,
  Award,
  IndianRupee,
  Zap,
  Shield,
  TrendingUp,
  Box,
  FileJson,
  Building2,
  HeartPlus,
  Cpu,
  HandCoins,
  Trophy,
  Search,
  MousePointer,
  TestTube,
  Star,
  PenTool,
  Settings,
  LayoutDashboard,
  Layers,
  Palette,
  Cog,
  Repeat,
  Rocket,
  ScreenShare,
  AppWindowMac,
  AppWindow,
  CodeXml,
  FileCode2,
  LaptopMinimalCheck,
  MessageCircleHeart,
  SquaresExclude,
  TicketPlus,
  HeartPulse,
  Hospital,
  Dumbbell,
  Plane,
  Code,
  Cloud,
  Database,
  Factory,
  FileText,
  Sparkles,
  Lightbulb,
  HandHeart,
  Eye,
  Heart,
  ChartColumnIncreasing,
  Server,
  Clock,
  CircleCheckBig,
  Target,
  Phone,
  ShoppingCart,
  Building,
  Car,
  Film,
  Landmark,
  CheckCircle,
  AlertTriangle,
  Gauge,
  Lock,
} from "lucide-react";

import Healthcare from "../../public/assets/img/healthcare.svg";
import Automobile from "../../public/assets/img/automobile.svg";
import RealEstate from "../../public/assets/img/realestate.svg";
import ECommerce from "../../public/assets/img/e-com.svg";
import Travel from "../../public/assets/img/travel.svg";
import MediaEntertainment from "../../public/assets/img/media.svg";
import EducationLearning from "../../public/assets/img/lerning.svg";
import DontAskus from "../../public/assets/img/askus.svg";

import cloudmigration from "../../public/assets/img/cloudmigration.webp";
import cloudinfrastructure from "../../public/assets/img/cloudinfrastructure.webp";
import cloudsecurity from "../../public/assets/img/cloudsecurity.webp";
import hybridcloud from "../../public/assets/img/hybridcloud.webp";
import devops from "../../public/assets/img/devops.webp";
import backupcloud from "../../public/assets/img/backupcloud.webp";
import Finance from "../../public/assets/img/Finance.webp";
import Insurance from "../../public/assets/img/Insurance.webp";
import Investment from "../../public/assets/img/Investment.webp";
import oil from "../../public/assets/img/oil.webp";
import Professional from "../../public/assets/img/Professional.webp";
import Retail from "../../public/assets/img/Retail.webp";
import Transportation from "../../public/assets/img/Transportation.webp";
import RealEstatee from "../../public/assets/img/RealEstatee.webp";
import Travell from "../../public/assets/img/Travell.webp";
import Fintech from "../../public/assets/img/Fintech.webp";
import project from "../../public/assets/img/project.webp";
import innovation from "../../public/assets/img/innovation.webp";
import goals2 from "../../public/assets/img/goals2.webp";
import custom from "../../public/assets/img/customsd.webp";
import web from "../../public/assets/img/websd.webp";
import mobile from "../../public/assets/img/mobilesd.webp";
import enterprise from "../../public/assets/img/enterprisesd.webp";
import cloud from "../../public/assets/img/cloudsd.webp";
import software from "../../public/assets/img/softwaresd.webp";
import Node from "../../public/assets/img/node.webp";
import Python from "../../public/assets/img/python.webp";
import AWS from "../../public/assets/img/aws.webp";
import MongoDB from "../../public/assets/img/mongodb.webp";
import Docker from "../../public/assets/img/docker.webp";
import Js from "../../public/assets/img/js.webp";
import Ts from "../../public/assets/img/ts.webp";
import ReactImg from "../../public/assets/img/react.webp";
import ETL from "../../public/assets/img/data_managemet_one.webp";
import MDM from "../../public/assets/img/data_managemet_two.webp";
import Management from "../../public/assets/img/data_managemet_three.webp";
import Migration from "../../public/assets/img/migration.webp";
import Governance from "../../public/assets/img/data_managemet_four.webp";
import Analytics from "../../public/assets/img/data_managemet_five.webp";
import Design from "../../public/assets/img/Designs-Tailored.webp";
import Collaborative from "../../public/assets/img/Collaborative-Approach.webp";
import End from "../../public/assets/img/End-To-End.webp";

import Manufacturing from "../../public/assets/img/Manufacturing.jpg";

export const OurServicesList = [
    {
      icon: <Globe size={22} className="text-white" />,
      title: "Web Development Services",
      description:
        "Custom web solutions tailored to your business needs with responsive design and SEO optimization.",
      technologies: ["React", "Node.js", "Django", "WordPress"],
      linkurl: "/services/web-development",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "E-commerce Integration",
        "Performance Optimization",
      ],
    },

    {
      icon: <Smartphone size={22} className="text-white" />,
      title: "Mobile App Development",
      description:
        "Native and hybrid mobile applications for iOS and Android with seamless performance.",
      technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
      linkurl: "/services/mobile-app-development",
      features: [
        "Cross-platform",
        "User-friendly UI",
        "Performance Optimized",
        "App Store Deployment",
      ],
    },

    {
      icon: <Database size={22} className="text-white" />,
      title: "Data Management Services",
      description:
        "Robust data solutions ensuring accuracy, accessibility, and real-time analytics.",
      technologies: ["SQL", "NoSQL", "Hadoop", "Cloud Storage"],
      linkurl: "/solutions/data-management",
      features: [
        "Data Warehousing",
        "Real-time Analytics",
        "Data Governance",
        "Migration Services",
      ],
    },

    {
      icon: <Server size={22} className="text-white" />,
      title: "Cloud Services",
      description:
        "Streamlining development and operations for faster, more reliable delivery.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Azure"],
      linkurl: "/services/cloud-services",
      features: [
        "CI/CD Pipelines",
        "Infrastructure Automation",
        "24/7 Monitoring",
        "Cloud Migration",
      ],
    },
    {
      icon: <Palette size={22} className="text-white" />,
      title: "UI/UX Design & Development",
      description:
        "Designing intuitive interfaces and providing expert developers for hire.",
      technologies: ["Figma", "Adobe XD", "React", "Vue.js"],
      linkurl: "/services/ui-design",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Front-end Development",
      ],
    },
    {
      icon: <CheckCircle size={22} className="text-white" />,
      title: "Testing & QA",
      description:
        "Ensuring software quality through thorough testing and quality assurance.",
      technologies: ["Selenium", "Jest", "Cypress", "Postman"],
      linkurl: "/services/testing-service",
      features: [
        "Automated Testing",
        "Manual Testing",
        "Bug Tracking",
        "Performance Testing",
      ],
    },
  ];

  export const ChallengesMobileApp = [
    {
      icon: <BadgeInfo size={22} className="text-white" />,
      title: "User Experience Issues",
      description:
        "Poor design and confusing navigation can lead to app abandonment.",
      featurestext: "70% of users uninstall apps with poor UX",
    },

    {
      icon: <ClockArrowDown size={22} className="text-white" />,
      title: "Performance Delays",
      description: "Slow load times and bugs degrade the user experience.",
      featurestext: "3+ seconds loading time = 53% user bounce rate",
    },
    {
      icon: <Headset size={22} className="text-white" />,
      title: "Lack of Support",
      description:
        "Many businesses fail to provide consistent app updates and support post-launch.",
      featurestext: "85% of apps lack proper maintenance",
    },
    {
      icon: <SmartphoneCharging size={22} className="text-white" />,
      title: "Cross-Platform Compatibility",
      description:
        "Issues with apps running seamlessly across different devices.",
      featurestext: "60% of users switch between devices daily",
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      title: "Security Concerns",
      description:
        "Data breaches and inadequate privacy protection lead to a lack of trust.",
      featurestext: "45% won’t use apps with security issues",
    },
    {
      icon: <MonitorCog size={22} className="text-white" />,
      title: "Technical Debt",
      description:
        "Legacy code and outdated architecture slow down development.",
      featurestext: "40% development time wasted on fixes",
    },
  ];

  export const MobileAppDevelopment = [
    {
      icon: <LayoutGrid size={22} className="text-white" />,
      title: "Mobile App Design",
      description:
        "User-centric designs ensuring intuitive interfaces that drive engagement and conversions.",
      features: [
        "UI/UX Design",
        "Prototyping",
        "User Research",
        "Design Systems",
      ],
      linkurl: "/",
    },

    {
      icon: <Smartphone size={22} className="text-white" />,
      title: "Mobile App Integration",
      description:
        "Seamless integration with existing systems, APIs, and third-party services.",
      features: [
        "API Integration",
        "Database Sync",
        "Cloud Services",
        "System Migration",
      ],
      linkurl: "http://gmail.com",
    },

    {
      icon: <ShieldEllipsis size={22} className="text-white" />,
      title: "Testing & QA",
      description:
        "Rigorous testing processes ensuring flawless performance across all devices.",
      features: [
        "Automated Testing",
        "Performance Testing",
        "Security Testing",
        "User Testing",
      ],
      linkurl: "/",
    },

    {
      icon: <Headset size={22} className="text-white" />,
      title: "Maintenance & Support",
      description:
        "Ongoing support to keep your app updated, secure, and performing optimally.",
      features: [
        "24/7 Support",
        "Regular Updates",
        "Bug Fixes",
        "Performance Monitoring",
      ],
      linkurl: "/",
    },

    {
      icon: <SmartphoneCharging size={22} className="text-white" />,
      title: "Mobile App Transformation",
      description:
        "Modernizing legacy apps for enhanced functionality and improved user experience.",
      features: [
        "Legacy Modernization",
        "Architecture Upgrade",
        "Technology Migration",
        "Feature Enhancement",
      ],
      linkurl: "http://gmail.com",
    },

    {
      icon: <TabletSmartphone size={22} className="text-white" />,
      title: "Redesign Your Mobile App",
      description:
        "Revamping apps to meet current user expectations and market standards.",
      features: [
        "UI Refresh",
        "UX Optimization",
        "Feature Redesign",
        "Brand Alignment",
      ],
      linkurl: "/",
    },
  ];

  export const TailoredAppSolutions = [
    {
      icon: <Zap size={22} className="text-white" />,
      title: "Custom App Development",
      description:
        "Bespoke apps designed to fit your unique requirements and business objectives.",
      technologies: ["React", "Node.js", "Django", "WordPress"],
      linkurl: "/",
    },
    {
      icon: <ScreenShare size={22} className="text-white" />,
      title: "Hybrid App Development",
      description:
        "Cross-platform apps offering broader reach with single codebase efficiency.",
      technologies: ["Ionic", "Xamarin", "PhoneGap", "Cordova"],
      linkurl: "/",
    },
    {
      icon: <AppWindowMac size={22} className="text-white" />,
      title: "Native App Development",
      description:
        "Platform-specific apps for optimal performance and user experience.",
      technologies: ["Swift", "Objective-C", "Kotlin", "Java"],
      linkurl: "/",
    },
    {
      icon: <AppWindow size={22} className="text-white" />,
      title: "iOS App Development",
      description:
        "Apps tailored for the Apple ecosystem with premium design and functionality.",
      technologies: ["SwiftUI", "UIKit", "Core Data", "CloudKit"],
      linkurl: "/",
    },
    {
      icon: <Smartphone size={22} className="text-white" />,
      title: "Android App Development",
      description:
        "Robust Android apps built for diverse device ecosystems and user bases.",
      technologies: ["Jetpack Compose", "Firebase", "Android SDK", "Room"],
      linkurl: "/",
    },
    {
      icon: <CodeXml size={22} className="text-white" />,
      title: "Cross-Platform Development",
      description:
        "Unified apps for multiple platforms with consistent user experience.",
      technologies: ["React Native", "Flutter", "Xamarin", "NET MAUI"],
      linkurl: "/",
    },
    {
      icon: <FileCode2 size={22} className="text-white" />,
      title: "Enterprise App Development",
      description:
        "Scalable solutions for large organizations with complex requirements.",
      technologies: ["Enterprise APIs", "SSO", "MDM", "Analytics"],
      linkurl: "/",
    },
    {
      icon: <LaptopMinimalCheck size={22} className="text-white" />,
      title: "Web App Development",
      description:
        "Responsive web applications for diverse needs and seamless experiences.",
      technologies: ["React", "Vue.js", "Angular", "PWA"],
      linkurl: "/",
    },
  ];

  export const IndustryFocusedMobile = [
    {
      icon: <MessageCircleHeart size={22} className="text-white" />,
      title: "Dating Apps",
      description:
        "Connecting people through intuitive platforms with advanced matching algorithms.",
      features: [
        "Smart Matching",
        "Real-time Chat",
        "Video Calls",
        "Safety Features",
      ],
      linkurl: "/",
    },

    {
      icon: <SquaresExclude size={22} className="text-white" />,
      title: "Investment Apps",
      description:
        "Tools for managing and tracking investments with real-time market data.",
      features: [
        "Portfolio Tracking",
        "Market Analysis",
        "Trading Tools",
        "Risk Assessment",
      ],
      linkurl: "/",
    },
    {
      icon: <LayoutGrid size={22} className="text-white" />,
      title: "Navigational Apps",
      description:
        "Guiding users with real-time navigation and location-based services.",
      features: [
        "GPS Navigation",
        "Traffic Updates",
        "Offline Maps",
        "Route Optimization",
      ],
      linkurl: "/",
    },
    {
      icon: <TicketPlus size={22} className="text-white" />,
      title: "Booking Apps",
      description:
        "Simplifying reservations and ticketing processes for various services.",
      features: [
        "Easy Booking",
        "QR Tickets",
        "Payment Integration",
        "Calendar Sync",
      ],
      linkurl: "/",
    },
    {
      icon: <HeartPulse size={22} className="text-white" />,
      title: "Insurance Apps",
      description:
        "Managing policies and claims efficiently with digital convenience.",
      features: [
        "Policy Management",
        "Claim Processing",
        "Document Upload",
        "Agent Chat",
      ],
      linkurl: "/",
    },
    {
      icon: <Hospital size={22} className="text-white" />,
      title: "Healthcare Apps",
      description:
        "Enhancing patient care through technology and digital health solutions.",
      features: [
        "Telemedicine",
        "Appointment Booking",
        "Health Records",
        "Medication Reminders",
      ],
      linkurl: "/",
    },
    {
      icon: <Dumbbell size={22} className="text-white" />,
      title: "Fitness Apps",
      description:
        "Tracking health and fitness goals with personalized workout plans.",
      features: [
        "Workout Tracking",
        "Nutrition Planning",
        "Progress Analytics",
        "Social Features",
      ],
      linkurl: "/",
    },
    {
      icon: <Plane size={22} className="text-white" />,
      title: "Travel Apps",
      description:
        "Planning and booking travel experiences with comprehensive tools.",
      features: ["Trip Planning", "Booking Managemen", "Expense Tracking"],
      linkurl: "/",
    },
  ];

  export const WhyHireDevelopers = [
    {
      icon: <Award size={22} className="text-white" />,
      title: "Certified Expertise",
      description:
        "Our developers are experts in the latest technologies like React, Node.js, Swift, Kotlin, and more, ready to handle your toughest challenges.",
    },

    {
      icon: <Users size={22} className="text-white" />,
      title: "Flexible Hiring Models",
      description:
        "From hourly engagements to full-time developers, you decide the terms.",
    },
    {
      icon: <Globe size={22} className="text-white" />,
      title: "Global Talent, Local Results",
      description:
        "We match the best developers to your requirements, ensuring quality and efficiency across time zones.",
    },
  ];

  export const BenefitsLogzerotechnologies = [
    {
      icon: <Award size={22} className="textblue" />,
      title: "Expert Talent",
      description:
        "Access to a pool of highly skilled developers with expertise in a wide range of technologies including React, Node.js, Python, and more.",
    },

    {
      icon: <IndianRupee size={22} className="text-[#28AB58]" />,
      title: "Cost-Effective Solutions",
      description:
        "Save on recruitment costs, overhead, and training by hiring top-tier developers at competitive rates.",
    },
    {
      icon: <Settings size={22} className="text-[#32A89C]" />,
      title: "Scalability and Flexibility",
      description:
        "Scale your team up or down based on project needs without long-term commitments. Choose from full-time, part-time, or project-based engagements.",
    },
    {
      icon: <Zap size={22} className="text-[#EA590D]" />,
      title: "Faster Time to Market",
      description:
        "Get your products and solutions to market faster by hiring developers who can integrate seamlessly into your existing team or handle projects independently.",
    },
    {
      icon: <Shield size={22} className="text-[#E24747]" />,
      title: "Reduced Risk",
      description:
        "Our developers are highly vetted, ensuring high-quality work that meets industry standards. Plus, with dedicated project management, your projects are in safe hands.",
    },
    {
      icon: <TrendingUp size={22} className="text-[#9A41EB]" />,
      title: "Full Control",
      description:
        "Whether you want to manage your developers directly or rely on our project managers, we offer you flexibility and transparency every step of the way.",
    },
  ];
  export const IndustriesWeServe = [
    {
      icon: <Box size={44} className="text-white" />,
      title: "E-commerce",
      description:
        "Building intuitive shopping experiences that increase conversions.",
      linkurl: "/",
    },

    {
      icon: <HeartPlus size={44} className="text-white" />,
      title: "Healthcare",
      description:
        "Creating user-friendly interfaces that ensure accessibility and trust.",
      linkurl: "/",
    },

    {
      icon: <GraduationCap size={44} className="text-white" />,
      title: "Education",
      description:
        "Optimizing learning platforms with simple, interactive interfaces.",
      linkurl: "/",
    },

    {
      icon: <Cpu size={44} className="text-white" />,
      title: "Technology",
      description:
        "Crafting cutting-edge interfaces for tech products and SaaS platforms.",
      linkurl: "/",
    },

    {
      icon: <HandCoins size={44} className="text-white" />,
      title: "Finance",
      description:
        "Designing reliable and secure interfaces for banking and financial apps.",
      linkurl: "/",
    },

    {
      icon: <Building2 size={44} className="text-white" />,
      title: "Enterprise",
      description:
        "Developing scalable solutions for large organizations and workflows.",
      linkurl: "/",
    },
  ];

  export const UxServices = [
    {
      icon: <Search size={24} className="text-white" />,
      title: "User Research",
      description:
        "In-depth research to understand user needs and pain points.",
      features: [
        "User Interviews",
        "Surveys & Analytics",
        "Persona Development",
        "Journey Mapping",
      ],
      linkurl: "/",
    },

    {
      icon: <LayoutGrid size={24} className="text-white" />,
      title: "Wireframing & Prototyping",
      description:
        "Creating wireframes and prototypes to visualize user flows.",
      features: [
        "Low-fi Wireframes",
        "Interactive Prototypes",
        "Design Systems",
        "Component Libraries",
      ],
      linkurl: "/",
    },

    {
      icon: <MousePointer size={24} className="text-white" />,
      title: "Interaction Design",
      description: "Designing smooth interactions to improve usability.",
      features: [
        "Micro-interactions",
        "Animation Design",
        "Touch Gestures",
        "Voice Interfaces",
      ],
      linkurl: "/",
    },

    {
      icon: <TestTube size={24} className="text-white" />,
      title: "Usability Testing",
      description: "Conducting tests to ensure optimal user experiences.",
      features: [
        "A/B Testing",
        "User Testing Sessions",
        "Heat Map Analysis",
        "Conversion Optimization",
      ],
      linkurl: "/",
    },

    {
      icon: <Star size={24} className="text-white" />,
      title: "UX Audits",
      description:
        "Evaluating and optimizing existing digital products for better UX.",
      features: [
        "Heuristic Evaluation",
        "Accessibility Audit",
        "Feature Redesign",
        "Competitive Analysis",
      ],
      linkurl: "/",
    },

    {
      icon: <Users size={24} className="text-white" />,
      title: "Strategy & Consulting",
      description: "Providing strategic UX guidance for your product roadmap.",
      features: [
        "UX Strategy",
        "Design Workshops",
        "Team Training",
        "Process Optimization",
      ],
      linkurl: "/",
    },
  ];

  export const Banner = [
    {
      id: 1,
      phase: "Phase 1",
      title: "Discovery & Research",
      desc: "Understanding the target audience and business goals.",
      Icon: Search,
      colorClass: "bgblue9",
    },
    {
      id: 2,
      phase: "Phase 2",
      title: "Wireframing & Prototyping",
      desc: "Visualizing ideas with wireframes and prototypes.",
      Icon: PenTool,
      colorClass: "gradient12",
    },
    {
      id: 3,
      phase: "Phase 3",
      title: "Interaction Design",
      desc: "Designing intuitive interactions and user flows.",
      Icon: Repeat,
      colorClass: "gradient13",
    },
    {
      id: 4,
      phase: "Phase 4",
      title: "User Testing & Iteration",
      desc: "Testing with real users and iterating based on feedback.",
      Icon: TestTube,
      colorClass: "gradient14",
    },
    {
      id: 5,
      phase: "Phase 5",
      title: "Launch & Optimization",
      desc: "Final adjustments and ongoing optimization.",
      Icon: Rocket,
      colorClass: "gradient15",
    },
  ];

  export const PowerfulWebDevelopment = [
    {
      icon: <PenTool size={22} className="text-white" />,
      title: "Powerful Web Development",
      description:
        "Forget cookie-cutter. Get tailored websites thatsolve real business challenges.",
    },

    {
      icon: <Smartphone size={22} className="text-white" />,
      title: "Mobile-First & Responsive Design",
      description:
        "Design that adapt fluidly across every device-because 70% of traffic is mobile.",
    },
    {
      icon: <ShoppingBag size={22} className="text-white" />,
      title: "E-Commerce Development",
      description:
        "From Shopify to Magento and custom builds we design storefronts that sell and scale.",
    },
    {
      icon: <Settings size={22} className="text-white" />,
      title: "Web Applications",
      description:
        "Fast, secure, enterprise-grade apps that empower users and boost efficiency.",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      title: "SEO-Ready & Speed-Optimized",
      description:
        "Technical SEO + blazing speed = website that rank and retain.",
    },
    {
      icon: <Database size={22} className="text-white" />,
      title: "CRM, ERP & SaaS Integration",
      description:
        "Custom enterprise -grade systems that fuel your operations and growth.",
    },
    {
      icon: <Globe size={22} className="text-white" />,
      title: "Marketplace Development",
      description:
        "Build multi-vendors platforms, B2B portals, and digital marketplaces from scratch.",
    },
  ];

  export const Industriesweserveimagedata = [
    {
      cartimage: Healthcare,
      title: "Healthcare",
      description:
        "Creating secure, user-friendly websites for healthcare providers, ensuring compliance and easy patient interaction.",
      linkurl: "/",
    },
    {
      cartimage: Automobile,
      title: "Automobile",
      description:
        "Building responsive websites for dealerships to boost customer experience and manage inventory efficiently.",
      linkurl: "/",
    },
    {
      cartimage: RealEstate,
      title: "Real Estate",
      description:
        "Creating intuitive real estate websites with listings, virtual tours, and lead generation tools.",
      linkurl: "/",
    },
    {
      cartimage: ECommerce,
      title: "E-Commerce",
      description:
        "Designing secure, high-converting e-commerce sites for seamless shopping and increased sales.",
      linkurl: "/",
    },
    {
      cartimage: Travel,
      title: "Travel",
      description:
        "Creating travel websites with bookings, itineraries, and guides for a better user experience.",
      linkurl: "/",
    },
    {
      cartimage: MediaEntertainment,
      title: "Media & Entertainment",
      description:
        "Creating visually rich websites for streaming, events, and digital content in entertainment.",
      linkurl: "/",
    },
    {
      cartimage: EducationLearning,
      title: "Education & Learning",
      description:
        "Building user-friendly websites for schools, courses, and e-learning to boost student engagement.",
      linkurl: "/",
    },
    {
      cartimage: DontAskus,
      title: "Don’t see yours? Ask us",
      description:
        "Build multi-vendors platforms, B2B portals, and digital marketplaces from scratch.",
      linkurl: "/",
    },
  ];

  export const testimonialsOne = [
    {
      id: 1,
      name: "Sophia White",
      role: "Assistant Backend Developer",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cursus nibh mauris, nec turpis orci lectus maecenas.
          Suspendisse sed magna eget nibh in turpis.`,
      img: "/assets/img/Ellipse 69.png",
      side: "left",
      icon: "/assets/icons/icon-left.svg",
      quoteIcon: "/assets/icons/quotes.svg",
    },
    {
      id: 2,
      name: "Sophia White",
      role: "Assistant Backend Developer",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cursus nibh mauris, nec turpis orci lectus maecenas.
          Suspendisse sed magna eget nibh in turpis.`,
      img: "/assets/img/Ellipse 69.png",
      side: "right",
      icon: "/assets/icons/icon-left-c.svg",
      quoteIcon: "/assets/icons/quotes.svg",
    },
    {
      id: 3,
      name: "Sophia White",
      role: "Assistant Backend Developer",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Cursus nibh mauris, nec turpis orci lectus maecenas.
          Suspendisse sed magna eget nibh in turpis.`,
      img: "/assets/img/Ellipse 69.png",
      side: "left",
      icon: "/assets/icons/icon-left.svg",
      quoteIcon: "/assets/icons/quotes.svg",
    },
    {
      id: 4,
      name: "Sophia White",
      role: "Assistant Backend Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.Suspendisse sed magna eget nibh in turpis.",
      img: "/assets/img/Ellipse 69.png",
      side: "right",
      icon: "/assets/icons/icon-left-c.svg",
      quoteIcon: "/assets/icons/quotes.svg",
    },
  ];

  export const SucessStoryData = [
    {
      title: "Always On: The IT Overhaul That Made Emax India Unbreakable",
      subtitle: "IT Consulting & Infrastructure Management",
      challenge:
        "Emax India’s fragmented and unstable IT systems led to frequent downtime, no real-time tracking, and missing backup protocols—putting operations and data at risk.",
      solution:
        "A centralized IT infrastructure was built with 24/7 monitoring, automated backups, advanced firewalls, and full server automation for reliability and scalability.",
      Resultstext:
        "Achieved 99.9% uptime, 50% faster system response, reduced manual workload, and a secure, future-ready IT foundation.",
      technologies: [
        "Linux",
        "MySQL",
        ", PHP",
        "JavaScript",
        "cPanel",
        " Cron Jobs",
        "SSL",
        " Cloud Monitoring",
      ],
      image:
        "/assets/img/ADPKD Urination-Tracking App for Tolvaptan Patients- Case Study.webp",
      width: 564,
      height: 383,
      link: "https://www.logzerotechnologies.com/blog/it-consultancy-and-web-management-for-emax-india/",
    },
    {
      title:
        "Enhancing Home Interior Projects with InteriorChowk’s Comprehensive Marketplace",
      subtitle: "Home Interior Solutions & Services Marketplace",
      challenge:
        "Homeowners struggled with fragmented service providers, lack of trust, limited access to quality materials, and complex coordination during home interior projects.",
      solution:
        "InteriorChowk developed a single mobile app connecting homeowners with verified designers, skilled workers, and premium suppliers—offering a seamless platform for design, sourcing, and project management.",
      Resultstext:
        "Streamlined project workflows, improved customer satisfaction, higher trust through verified professionals, faster execution, and easy access to top-quality materials.",
      technologies: ["PHP", "Laravel", "Flutter"],
      image: "/assets/img/health-tracker.png",
      width: 564,
      height: 323,
      link: "https://www.logzerotechnologies.com/case-studies/enhancing-home-interior-projects-with-interiorchowks-comprehensive-marketplace/",
    },
  ];

  export const features = [
    {
      icon: <Globe size={22} className="text-white" />,
      title: "Global Reach, Local Expertise",
      description:
        "Whether you're in the USA or Australia, we bring a deep understanding of regional markets with the power of global technology.",
      linkurl: "/",
    },
    {
      icon: <Lightbulb size={22} className="text-white" />,
      title: "End-to-End Solutions",
      description:
        "From consultation to implementation, we provide full-service tech solutions that help your business grow and thrive.",
      linkurl: "/",
    },
    {
      icon: <FileText size={22} className="text-white" />,
      title: "Proven Track Record",
      description:
        "We’ve successfully served clients across multiple industries in various regions, helping them scale their businesses.",
      linkurl: "/",
    },
    {
      icon: <Sparkles size={22} className="text-white" />,
      title: "Client-Centric Approach",
      description:
        "At LogZero, our clients are our partners. We focus on understanding your challenges to develop customized solutions.",
      linkurl: "/",
    },
  ];

  export const services = [
    {
      icon: <Code size={22} className="text-white" />,
      title: " Web Development",
      description:
        "Build powerful, responsive, and user-friendly websites that drive results. Our web development solutions combine cutting-edge technology with creative design to deliver seamless digital experiences for your business.",
      features: [
        " Custom Website Development",
        "E-commerce Solutions",
        " CMS Development (WordPress, Wix, etc.)",
        "Front-end & Back-end Development",
        "Website Maintenance & Support ",
      ],
      linkurl: "/services/web-development",
    },

    {
      icon: <Smartphone size={22} className="text-white" />,
      title: "Mobile Development",
      description:
        "Build high-performance, user-friendly apps for iOS and Android markets in any country. From native apps to hybrid solutions, we’ve got you covered.",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "App Store Optimization",
      ],
      linkurl: "/services/mobile-app-development",
    },

    {
      icon: <LayoutGrid size={22} className="text-white" />,
      title: "UI/UX Design",
      description:
        "Crafting seamless user experiences that resonate with local markets and global customers. Our UI/UX design ensures that your platform is intuitive and engaging.",
      features: [
        "User Research",
        "Wireframing",
        "Visual Design",
        "Usability Testing",
      ],
      linkurl: "/services/ui-design",
    },

    {
      icon: <Cloud size={22} className="text-white" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services that ensure your business operates smoothly, no matter where you are. We deliver custom cloud solutions for seamless integration.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "DevOps",
        "Security Management",
      ],
      linkurl: "/services/cloud-services",
    },

    {
      icon: <Database size={22} className="text-white" />,
      title: "Data Management",
      description:
        "Secure and efficient management of your business data with industry-leading solutions tailored to your specific needs. From data storage to analytics, we ensure your data works for you.",
      features: [
        "Database Design",
        "Data Analytics",
        "Business Intelligence",
        "Data Security",
      ],
      linkurl: "/solutions/data-management",
    },

    {
      icon: <Building2 size={22} className="text-white" />,
      title: "Enterprise Solutions",
      description:
        "From CRM to ERP, we create enterprise-grade solutions to streamline your processes and boost productivity across regions.",
      features: [
        "CRM Systems",
        "ERP Solutions",
        "Workflow Automation",
        "Integration Services",
      ],
      linkurl: "/solutions",
    },
  ];

  export const industries = [
    {
      icon: <HeartPlus size={22} className="text-white" />,
      title: "Healthcare",
      description:
        "Secure and scalable solutions for managing patient data, appointments, and compliance. Our healthcare solutions meet global standards, ensuring compliance and efficiency.",
    },
    {
      icon: <HandCoins size={22} className="text-white" />,
      title: "Finance",
      description:
        "We help financial institutions stay ahead with secure, compliant, and efficient tech solutions that scale as your business grows.",
    },
    {
      icon: <ShoppingBag size={22} className="text-white" />,
      title: "Retail",
      description:
        "Transform your e-commerce and retail experience with world-class mobile, web, and cloud solutions. We empower retailers to offer seamless customer experiences.",
    },
    {
      icon: <GraduationCap size={22} className="text-white" />,
      title: "Education",
      description:
        "Helping educational institutions with online learning platforms, cloud-based management systems, and mobile apps that connect teachers, students, and parents seamlessly.",
    },
    {
      icon: <Cpu size={22} className="text-white" />,
      title: "Technology",
      description:
        "Empowering tech companies with custom software and cloud solutions that scale with their needs. From startups to large enterprises, we support your tech infrastructure.",
    },
    {
      icon: <Factory size={22} className="text-white" />,
      title: "Manufacturing",
      description:
        "Revolutionizing operations with IoT, automation, and data analytics solutions to help manufacturers streamline operations and improve efficiency.",
    },
  ];

  export const TrustedPartnerinCloud = [
    {
      icon: <Award size={22} className="textblue" />,
      title: "Expert Team",
      description: "Experienced cloud professionals dedicated to your success",
    },

    {
      icon: <Users size={22} className="linkcolor" />,
      title: "Proven Results",
      description: "Track record of successful cloud transformations",
    },
    {
      icon: <Globe size={22} className="text-[#A265EE]" />,
      title: "Global Reach",
      description: "Serving businesses worldwide with cloud excellence",
    },
  ];

  export const CloudServicesTailored = [
    {
      cartimage: cloudmigration,
      title: "Cloud Migration Services",
      description:
        "Seamlessly transition your business to the cloud with minimal downtime.",
      linkurl: "#",
    },
    {
      cartimage: cloudinfrastructure,
      title: "Cloud Infrastructure Management",
      description:
        "Optimize your cloud infrastructure for better performance and cost-efficiency.",
      linkurl: "#",
    },
    {
      cartimage: cloudsecurity,
      title: "Cloud Security Solutions",
      description:
        "Protect your business data with cutting-edge security tools and strategies.",
      linkurl: "#",
    },
    {
      cartimage: hybridcloud,
      title: "Hybrid Cloud Solutions",
      description:
        "Combining the best of private and public clouds for flexible, scalable solutions.",
      linkurl: "#",
    },
    {
      cartimage: devops,
      title: "DevOps",
      description:
        "Protect your business data with cutting-edge security tools and strategies.",
      linkurl: "#",
    },
    {
      cartimage: backupcloud,
      title: "Backup & 24/7 Cloud Support",
      description:
        "Ensure your data is secure and your cloud operations run smoothly with reliable backup, recovery, and 24/7 support.",
      linkurl: "#",
    },
  ];

  export const CloudMigrationSteps = [
    {
      icon: "1",
      title: "Assessment & Planning",
      description:
        "We analyze your current infrastructure and plan the migration process.",
    },

    {
      icon: "2",
      title: "Migration & Integration",
      description:
        "We ensure a smooth transition to the cloud with minimal downtime.",
    },
    {
      icon: "3",
      title: "Post-Migration Support",
      description:
        "After migration, we provide ongoing support to ensure your cloud environment is running efficiently.",
    },
  ];

  export const Credential = [
    {
      icon: <Award size={40} />,
      title: "Certified",
      desc: "We are ISO 9001 and 27001 certified, ensuring quality and reliability in our services.",
      color: "bg-[#E84D2E]",
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovative",
      desc: "At LogZero Technologies, we utilize multiple cutting-edge technologies tailored to various industries.",
      color: "bg-[#F6A623]",
    },
    {
      icon: <CircleCheckBig size={40} />,
      title: "Satisfaction",
      desc: "Client satisfaction is our priority and driving force.",
      color: "bg-[#1CC5A3]",
    },
    {
      icon: <Users size={40} />,
      title: "Expertise",
      desc: "With LogZero, you’re guided by a dedicated team of industry experts.",
      color: "bg-[#4A4A8C]",
    },
    {
      icon: <HandHeart size={40} />,
      title: "Diverse",
      desc: "We offer a wide range of services across diverse industries.",
      color: "bg-[#0D9BFF]",
    },
    {
      icon: <Eye size={40} />,
      title: "Recognized",
      desc: "LogZero is internationally recognized for its expertise in AI and innovative technologies.",
      color: "bg-[#9B3DCC]",
    },
  ];

  export const values = [
    {
      icon: <Lightbulb size={24} className="text-white" />,
      title: "Innovation",
      description:
        "Continuously pushing boundaries to pioneer new tech solutions that transform industries.",
    },
    {
      icon: <Shield size={24} className="text-white" />,
      title: "Integrity",
      description:
        "Building lasting relationships through transparency, honesty, and ethical practices.",
    },
    {
      icon: <Heart size={24} className="text-white" />,
      title: "Customer Centricity",
      description:
        "Your success drives everything we do. We're committed to exceeding your expectations.",
    },
    {
      icon: <HandHeart size={24} className="text-white" />,
      title: "Collaboration",
      description:
        "Harnessing collective brilliance from diverse perspectives to deliver exceptional results.",
    },
  ];

  export const CoreServices = [
    {
      icon: <Globe size={24} className="text-white" />,
      title: "Web Development Services",
      description:
        "Custom websites designed to enhance your business presence online. From e-commerce platforms to corporate websites, we provide high-performance, user-friendly solutions..",
      linkurl: "/services/web-development",
    },

    {
      icon: <Smartphone size={24} className="text-white" />,
      title: "Mobile App Development",
      description:
        "Mobile apps that drive engagement. We offer both iOS and Android development with the latest technology to ensure seamless user experiences.",
      linkurl: "/services/mobile-app-development",
    },

    {
      icon: <Database size={24} className="text-white" />,
      title: "Data Management",
      description:
        "Secure, scalable, and reliable data management solutions that help businesses organize and analyze data effectively.",
      linkurl: "/solutions/data-management",
    },

    {
      icon: <Cloud size={24} className="text-white" />,
      title: "Cloud Services",
      description:
        "Cloud solutions for seamless data access, storage, and management. Enhance collaboration and improve efficiency with our scalable cloud offerings.",
      linkurl: "/services/cloud-services",
    },

    {
      icon: <LayoutGrid size={24} className="text-white" />,
      title: "UI/UX Design",
      description:
        "Transform user experience with innovative UI/UX designs. Our team focuses on creating visually appealing, functional designs that delight users.",
      linkurl: "/services/ui-design",
    },

    {
      icon: <PenTool size={24} className="text-white" />,
      title: "Testing & QA",
      description:
        "Ensuring software quality through thorough testing and quality assurance.",
     linkurl: "/services/testing-service",
    },
  ];

  export const Industriesweservepage = [
    {
      cartimage: Healthcare,
      title: "Healthcare",
      description:
        "Empowering healthcare providers with seamless websites, secure mobile apps, data management solutions, and cloud-based systems for better patient care and operational efficiency..",
      linkurl: "http://yahoo.com",
    },
    {
      cartimage: Manufacturing,
      title: "Manufacturing",
      description:
        "Optimize production with integrated cloud solutions, custom web platforms, and data management services that streamline operations and enhance performance.",
      linkurl: "http://yahoo.com",
    },

    {
      cartimage: Transportation,
      title: "Transportation & Logistics",
      description:
        "Track logistics, optimize routes, and enhance efficiency with our custom web and app development services, coupled with cloud-based data management.",
      linkurl: "http://yahoo.com",
    },
    {
      cartimage: RealEstatee,
      title: "Real Estate",
      description:
        "Manage listings, customer relationships, and transactions securely with our web and mobile app development, along with data management and cloud services.",
      linkurl: "http://yahoo.com",
    },
    {
      cartimage: Travell,
      title: "Travel & Hospitality",
      description:
        "Enhance booking systems, customer experiences, and operational efficiency with our tailored solutions for the travel and hospitality industry.",
      linkurl: "http://yahoo.com",
    },
    {
      cartimage: Fintech,
      title: "Fintech",
      description:
        "Ensure secure and seamless financial transactions with our fintech-focused mobile apps, web development, data management, and cloud services.",
      linkurl: "http://yahoo.com",
    },
  ];

  export const MoreIndustriesData = [
    {
      cartimage: Finance,
      title: "Finance & Banking",
      description:
        "From secure mobile apps to efficient data management and cloud services, we provide tailored solutions that ensure compliance, enhance security, and streamline financial operations.",
      linkurl: "http://yahoo.com",
    },
    {
      cartimage: Insurance,
      title: "Insurance",
      description:
        "Automate claims processing, enhance customer service, and improve data security with our industry-specific web, app, and cloud solutions.",
      linkurl: "http://yahoo.com",
    },

    {
      cartimage: Investment,
      title: "Investment",
      description:
        "Optimize investment portfolios and ensure secure data management with custom applications, cloud solutions, and robust server management.",
      linkurl: "http://yahoo.com",
    },
    {
      cartimage: oil,
      title: "Oil & Gas",
      description:
        "Real-time data management, secure mobile apps, and cloud-based solutions tailored for the oil and gas sector to improve operational efficiency and resource management.",
      linkurl: "http://yahoo.com",
    },
    {
      cartimage: Professional,
      title: "Professional Services",
      description:
        "Enhance client interactions and streamline business processes with bespoke websites, mobile apps, and secure server solutions.",
      linkurl: "http://yahoo.com",
    },
    {
      cartimage: Retail,
      title: "Retail",
      description:
        "Drive sales with responsive e-commerce websites, mobile apps, and secure cloud services, optimized for retail businesses.",
      linkurl: "http://yahoo.com",
    },
  ];

  export const Banner2 = [
    {
      id: 1,
      title: "Stuck with slow systems?",
      desc: "We’ll revamp your IT infrastructure, making it faster, more secure, and ready to grow with your business. No more slowdowns",
      Icon: Award,
      colorClass: "bgblue9",
    },
    {
      id: 2,
      title: "Worried about hackers?",
      desc: "Our cutting-edge cybersecurity keeps your business locked down tight, with real-time threat detection so you don’t have to sweat it.",
      Icon: Clock,
      colorClass: "gradient12",
    },
    {
      id: 3,
      title: "Dealing with disconnected tools?",
      desc: "LogZero’s all about getting your systems to work together. We’ll sync things up so your business runs smoother, faster, and way more efficient.",
      Icon: Users,
      colorClass: "gradient13",
    },
    {
      id: 4,
      title: "Struggling with data management?",
      desc: "We’ll clean up your data mess, making it easy to access and analyze. Get the insights you need, when you need them, and make smarter moves in no time.",
      Icon: Globe,
      colorClass: "gradient14",
    },
  ];

  export const Purpose = [
    {
      icon: <Lightbulb size={22} className="text-[#ffffff] rounded-full" />,
      title: "Innovation First",
      description:
        "We embrace new technologies and bold ideas, ensuring every solution pushes boundaries and opens fresh opportunities.",
    },

    {
      icon: <Users size={22} className="text-[#ffffff]" />,
      title: "Customer-Centric Approach",
      description:
        "Your success defines our success. We design with empathy, precision, and a deep understanding of your goals.",
    },
    {
      icon: <Globe size={22} className="text-[#ffffff]" />,
      title: "Sustainability & Responsibility",
      description:
        "We believe in building solutions that are scalable, ethical, and sustainable for the long run.",
    },
    {
      icon: <Rocket size={22} className="text-[#ffffff]" />,
      title: "Excellence in Execution",
      description:
        "We don’t just dream big, we deliver big — with precision, speed, and consistent quality.",
    },
  ];

  export const Banner3 = [
    {
      id: 1,
      Novalue: 1000,
      indicator: "+",
      label: "Successful projects delivered across industries",
      icon: <Award size={24} className="text-white" />,
      Icon: Award,
      IconbgColor: "bgblue9",
      roundcorner: "rounded-full",
      colorClass: "bgblue9",
    },
    {
      id: 2,
      Novalue: 100,
      indicator: "+",
      label: "Expert Developers",
      icon: <Clock size={24} className="text-white" />,
      Icon: Clock,
      IconbgColor: "gradient12",
      roundcorner: "rounded-full",
      colorClass: "gradient12",
    },
    {
      id: 3,
      Novalue: 95,
      indicator: "%",
      label: "Client retention rate through trust and excellence",
      icon: <Users size={24} className="text-white" />,
      Icon: Users,
      IconbgColor: "gradient13",
      roundcorner: "rounded-full",
      colorClass: "gradient13",
    },
    {
      id: 4,
      Novalue: 15,
      indicator: "+",
      label: "Industries Served",
      icon: <Globe size={24} className="text-white" />,
      Icon: Globe,
      IconbgColor: "gradient14",
      roundcorner: "rounded-full",
      colorClass: "gradient14",
    },
  ];

  export const Commitment = [
    {
      cartimage: project,
      title: "End-to-End Project Excellence",
      description:
        "We deliver projects with precision, agility, and reliability, ensuring on-time and on-budget results.",
      linkurl: "http://yahoo.com",
    },
    {
      cartimage: innovation,
      title: "Innovative Technology Solutions",
      description:
        "Our expertise in digital transformation and smart tech empowers businesses to achieve measurable growth.",
      linkurl: "http://yahoo.com",
    },

    {
      cartimage: goals2,
      title: "Your Goals, Our Mission",
      description:
        "We align our strategies with your objectives so your success becomes the outcome we relentlessly deliver.",
      linkurl: "http://yahoo.com",
    },
  ];

  export const Comprehensive = [
    {
      cartimage: custom,
      title: "Custom Software Development",
      description:
        "Build bespoke software that aligns perfectly with your business objectives and unique requirements.",
      linkurl: "/",
    },
    {
      cartimage: web,
      title: "Web Application Development",
      description:
        "Create dynamic, responsive, and feature-rich web apps for seamless user experiences across all devices.",
      linkurl: "/services/web-development",
    },

    {
      cartimage: enterprise,
      title: "Mobile App Development",
      description:
        "Develop intuitive mobile applications for iOS and Android to engage your customers anywhere, anytime.",
      linkurl: "/services/mobile-app-development",
    },
    {
      cartimage: cloud,
      title: "Enterprise Solutions",
      description:
        "Deliver scalable enterprise applications that streamline operations and foster team collaboration.",
      linkurl: "/solutions",
    },
    {
      cartimage: software,
      title: "Cloud-based Software Solutions",
      description:
        "Leverage the cloud for flexibility, scalability, and security in your modern business applications.",
      linkurl: "/services/cloud-services",
    },
    {
      cartimage: mobile,
      title: "Software Maintenance & Support",
      description:
        "Ensure your software remains updated, secure, and optimized with our comprehensive maintenance services.",
      linkurl: "/services/custom-software-development",
    },
  ];

  export const logServices = [
    {
      icon: <Users size={24} className="text-[#0A77FF]" />,
      title: "Experienced Development Team",
      description:
        "With years of industry experience, we bring proven expertise in delivering robust software solutions across various domains.",
      linkurl: "/",
    },

    {
      icon: <Target size={24} className="text-[#13978B]" />,
      title: "Tailored Solutions",
      description:
        "We create custom solutions that meet your unique business requirements, ensuring long-term success and competitive advantage.",
      linkurl: "/",
    },

    {
      icon: <Zap size={24} className="text-[#A265EE]" />,
      title: "Agile Methodology",
      description:
        "Our agile approach ensures timely delivery and constant feedback during the development process, keeping you in control.",
      linkurl: "/",
    },

    {
      icon: <Code size={24} className="text-[#DC282A]" />,
      title: "High-Quality Code",
      description:
        "We follow industry best practices to deliver scalable, secure, and high-quality software that stands the test of time.",
      linkurl: "/",
    },

    {
      icon: <Settings size={24} className="text-[#EB5E14]" />,
      title: "End-to-End Services",
      description:
        "From ideation to deployment and beyond, we provide a full suite of software development services under one roof.",
      linkurl: "/",
    },

    {
      icon: <DollarSign size={24} className="text-[#16A35E]" />,
      title: "Cost-Effective Solutions",
      description:
        "Get the best value with affordable pricing models tailored to your budget without compromising on quality.",
      linkurl: "/",
    },
  ];

  export const Banner4 = [
    {
      id: 1,
      title: "1000+",
      desc: "Happy Clients",
      Icon: Users,
      colorClass: "bgblue9",
    },
    {
      id: 2,
      title: "40%",
      desc: "Avg. Efficiency Gain",
      Icon: TrendingUp,
      colorClass: "gradient12",
    },
    {
      id: 3,
      title: "$50M+",
      desc: "Client Revenue Generated",
      Icon: DollarSign,
      colorClass: "gradient13",
    },
    {
      id: 4,
      title: "98%",
      desc: "Client Retention Rate",
      Icon: Heart,
      colorClass: "gradient14",
    },
  ];

  export const techStack = [
    {
      src: Node,
      name: "node.js",
    },

    {
      src: ReactImg,
      name: "react.js",
    },
    {
      src: Python,
      name: "python",
    },
    {
      src: Js,
      name: "javascript",
    },
    {
      src: Ts,
      name: "typescript",
    },
    {
      src: Docker,
      name: "Docker",
    },
    {
      src: MongoDB,
      name: "MongoDB",
    },
    {
      src: AWS,
      name: "AWS",
    },
    {
      src: Node,
      name: "node.js",
    },
    {
      src: ReactImg,
      name: "react.js",
    },
    {
      src: Python,
      name: "python",
    },
    {
      src: Js,
      name: "javascript",
    },
    {
      src: Ts,
      name: "typescript",
    },
    {
      src: Docker,
      name: "Docker",
    },
    {
      src: MongoDB,
      name: "MongoDB",
    },
    {
      src: AWS,
      name: "AWS",
    },
  ];

  export const tech = [
    {
      icon: <Code size={24} className="text-[#13978B]" />,
      technologies: [
        "Java",
        "Python",
        "JavaScript",
        "C++",
        "Ruby on Rails",
        "PHP",
        "TypeScript",
        "Go",
      ],
      linkurl: "/",
    },
    {
      icon: <Settings size={24} className="text-[#13978B]" />,
      technologies: [
        "React",
        "Angular",
        "Node.js",
        "Django",
        ".NET",
        "Vue.js",
        "Spring Boot",
        "Express.js",
      ],
      linkurl: "/",
    },
    {
      icon: <Database size={24} className="text-[#13978B]" />,
      technologies: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Oracle",
        "SQLite",
        "Cassandra",
        "DynamoDB",
      ],
      linkurl: "/",
    },

    {
      icon: <Smartphone size={24} className="text-[#13978B]" />,
      technologies: [
        "AWS",
        "Google Cloud",
        "Microsoft Azure",
        "Docker",
        "Kubernetes",
        "Heroku",
        "DigitalOcean",
        "Vercel",
      ],
      linkurl: "/",
    },
    {
      icon: <Shield size={24} className="text-[#13978B]" />,
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Ionic",
        "Xamarin",
        "PhoneGap",
        "Cordova",
      ],
      linkurl: "/",
    },
    {
      icon: <Cloud size={24} className="text-[#13978B]" />,
      technologies: [
        "OAuth",
        "SSL/TLS",
        "OWASP",
        "Two-factor Authentication",
        "JWT",
        "HTTPS",
        "AES Encryption",
        "RBAC",
      ],
      linkurl: "/",
    },
  ];

  export const faq2 = [
    {
      question: "What is custom software development?",
      answer:
        "Custom software development means creating tailor-made applications designed specifically for your business goals and workflow.",
    },
    {
      question: " What types of software do you develop?",
      answer:
        "We build web apps, mobile apps, enterprise software, cloud applications, SaaS platforms, CRM, ERP, and automation solutions.",
    },
    {
      question: "How do you determine software development timelines?",
      answer:
        "Timelines depend on project features, design complexity, integrations, and development stages.",
    },
    {
      question: "Do you offer end-to-end software development?",
      answer:
        "Yes. From requirement analysis to design, development, testing, deployment, and support, we handle everything.",
    },
    {
      question: " Can you integrate the software with existing systems?",
      answer:
        "Yes. Our custom software supports third-party integrations, APIs, and legacy systems.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer post-launch support, updates, monitoring, and feature enhancements based on your needs.",
    },
  ];

  export const dataManagment = [
    {
      icon: <Database size={24} className="text-[#0A77FF] rounded-full" />,
      title: "Data Collection",
      description:
        "Streamlined processes for gathering data from multiple sources with automated validation and quality checks.",
    },

    {
      icon: <Server size={24} className="text-[#13978B]" />,
      title: "Storage & Governance",
      description:
        "Secure, scalable storage solutions with comprehensive governance frameworks and compliance controls.",
    },
    {
      icon: <ChartColumnIncreasing size={24} className="text-[#A265EE]" />,
      title: "Analytics & Insights",
      description:
        "Advanced analytics capabilities that transform raw data into actionable business intelligence.",
    },
  ];

  export const ComprehensiveDataSolutions = [
    {
      cartimage: ETL,
      title: "Data Integration & ETL Services",
      description:
        "Clean, transform, and move data seamlessly across your entire infrastructure.",
      linkurl: "#",
    },
    {
      cartimage: MDM,
      title: "Master Data Management (MDM)",
      description:
        "Create a single source of truth for your business with unified data governance.",
      linkurl: "#",
    },
    {
      cartimage: Management,
      title: "Data Quality Management",
      description:
        "Eliminate duplicates and improve data accuracy with advanced quality controls.",
      linkurl: "#",
    },
    {
      cartimage: Migration,
      title: "Cloud Data Migration Services",
      description:
        "Shift from legacy to cloud with minimal downtime and maximum security.",
      linkurl: "#",
    },
    {
      cartimage: Governance,
      title: "Data Governance & Compliance",
      description:
        "Stay audit-ready with GDPR and HIPAA frameworks built into your processes.",
      linkurl: "#",
    },
    {
      cartimage: Analytics,
      title: "Big Data & Analytics Support",
      description:
        "Leverage advanced analytics and AI for actionable business insights.",
      linkurl: "#",
    },
  ];

  export const Dataindatamanagment = [
    {
      Icon: Zap,
      title: "Faster Decision-Making",
      desc: "Access accurate, integrated data for real-time business insights",
    },

    {
      Icon: DollarSign,
      title: "Cost Reduction",
      desc: "Optimized cloud storage solutions that scale with your needs",
    },
    {
      Icon: Shield,
      title: "Enhanced Compliance",
      desc: "Built-in data governance frameworks for regulatory requirements.",
    },
    {
      Icon: ChartColumnIncreasing,
      title: "AI-Ready Infrastructure",
      desc: "Advanced preparation for business intelligence and machine learning",
    },
  ];

  export const faq3 = [
    {
      question: "What is the cost of enterprise data management services?",
      answer:
        "Custom software development is the creation of tailor-made software applications to meet the specific needs of a particular business or organization, rather than using off-the-shelf solutions.",
    },
    {
      question: "How does Logzero ensure secure data management?",
      answer:
        "Yes, we provide continuous support to help with updates, bug fixes, and improvements.",
    },
    {
      question: "Do you provide cloud data migration support?",
      answer:
        "Absolutely, we assist with preparing your app and submitting it to both iOS and Android stores.",
    },
    {
      question: "Can you help with GDPR and HIPAA compliance?",
      answer:
        "Our consultation includes project scope discussion, technical feasibility analysis, and cost estimation.",
    },
  ];

  export const solutionData = [
    {
      icon: <Cog className="text-white" />,
      iconBgClass: "bgblue",
      gradientClass: "gradient17",
      title: "Operations Management",
      description:
        "Streamline processes, reduce costs, and ensure delivery excellence. From workflow automation to supply chain visibility, we align systems to your SLAs.",
      outcomes:
        "Outcomes: faster cycle times, fewer errors, predictable throughput.",
      outcomesColor: "text-[#0A77FF]",
      linkText: "Learn More",
      linkColor: "text-[#0A77FF]",
    },
    {
      icon: <ChartColumnIncreasing className="text-white" />,
      iconBgClass: "peachgreen",
      gradientClass: "gradient3",
      title: "Analytics",
      description:
        "Build trusted dashboards, self-serve BI, and advanced analytics for forecasting, churn, and LTV. We create a semantic layer so every metric means the same thing everywhere.",
      outcomes: "Outcomes: faster decisions, shared truth, higher confidence.",
      outcomesColor: "text-[#179A8E]",
      linkText: "Learn More",
      linkColor: "text-[#179A8E]",
    },
    {
      icon: <Users className="text-white" />,
      iconBgClass: "bg-[#9A3FEE]",
      gradientClass: "gradient18",
      title: "Customer Experience",
      description:
        "Create frictionless journeys with personalization, unified profiles, and journey analytics—while respecting privacy.",
      outcomes: "Outcomes: higher NPS, better conversions, reduced churn.",
      outcomesColor: "text-[#9A3FEE]",
      linkText: "Learn More",
      linkColor: "text-[#9A3FEE]",
    },
  ];

  export const faq4 = [
    {
      question: "What are data-driven business solutions?",
      answer:
        "Data-driven solutions use analytics, dashboards, ERP, and CRM tools to help businesses make smarter decisions and optimize performance.",
    },
    {
      question: "How do ERP solutions help businesses grow?",
      answer:
        "ERP systems streamline processes, centralize data, and improve workflow efficiency across departments.",
    },
    {
      question: "Which businesses need analytics and dashboard solutions?",
      answer:
        "Any business that relies on insights, reporting, forecasting, and performance tracking benefits from analytics and dashboards.",
    },
    {
      question: "Which businesses need analytics and dashboard solutions?",
      answer:
        "Yes. We build fully customized systems tailored to your operations, goals, and workflow structure.",
    },
    {
      question: "Do your solutions integrate with existing software?",
      answer:
        "Yes, our ERP, CRM, and analytics platforms integrate with existing tools, APIs, and software environments.",
    },
    {
      question: " What industries do you provide business solutions for?",
      answer:
        "We serve retail, healthcare, finance, logistics, manufacturing, startups, and all industries that require digital transformation.",
    },
  ];

  export const UiServices = [
    {
      icon: <Globe size={24} className="text-white" />,
      title: "Web UI Design",
      description:
        "Responsive, aesthetic, and functional websites built with the latest design trends and best practices.",
      features: [
        "Responsive Design ",
        "Modern Aesthetics",
        "Performance Optimized",
        "SEO Friendly",
      ],
      linkurl: "/",
    },

    {
      icon: <Smartphone size={24} className="text-white" />,
      title: "Mobile UI Design",
      description:
        "Interactive dashboards designed for clarity, ease of use, and data visualization excellence.",
      features: [
        "Data Visualization",
        "Interactive Charts",
        "User-Friendly",
        "Real-time Updates",
      ],
      linkurl: "/",
    },

    {
      icon: <LayoutDashboard size={24} className="text-white" />,
      title: "Dashboard UI Design",
      description:
        "Interactive dashboards designed for clarity, ease of use, and data visualization excellence.",
      features: [
        "Data Visualization",
        "Interactive Charts",
        "User-Friendly",
        "Real-time Updates",
      ],
      linkurl: "/",
    },

    {
      icon: <Layers size={24} className="text-white" />,
      title: "UI Prototyping & Wireframing",
      description:
        "Rapid prototyping to visualize ideas and gather early user feedback before development.",
      features: [
        "Rapid Prototyping",
        "User Testing",
        "Iterative Design",
        "Stakeholder Buy-in",
      ],
      linkurl: "/",
    },

    {
      icon: <Search size={24} className="text-white" />,
      title: "UI/UX Research",
      description:
        "Comprehensive research to create user-centered designs based on real data and insights.",
      features: [
        "User Interviews",
        "Usability Testing",
        "Analytics Review",
        "Persona Development",
      ],
      linkurl: "/",
    },

    {
      icon: <Palette size={24} className="text-white" />,
      title: "Brand & Visual Identity",
      description:
        "Complete visual identity systems that align with your brand and create lasting impressions.",
      features: [
        "Logo Design",
        "Color Systems",
        "Typography",
        "Brand Guidelines",
      ],
      linkurl: "/",
    },
  ];

  export const Banner5 = [
    {
      id: 1,
      title: "150+",
      desc: "Projects Completed",
      Icon: CircleCheckBig,
      colorClass: "bgblue9",
    },
    {
      id: 2,
      title: "25+",
      desc: "UI Designers",
      Icon: Users,
      colorClass: "gradient12",
    },
    {
      id: 3,
      title: "15+",
      desc: "Ongoing Projects",
      Icon: Clock,
      colorClass: "gradient13",
    },
    {
      id: 4,
      title: "8+",
      desc: "Design Awards",
      Icon: Trophy,
      colorClass: "gradient14",
    },
  ];

  export const ComprehensiveUi = [
    {
      cartimage: Design,
      title: "DataDesigns Tailored to Your Brand's Personality",
      description:
        "Every pixel reflects your brand's unique character and values, creating authentic connections with your audience.",
      linkurl: "#",
    },
    {
      cartimage: Collaborative,
      title: "Collaborative Approach with Clients",
      description:
        "We work closely with you throughout the process, ensuring your vision is perfectly realized at every stage.",
      linkurl: "#",
    },
    {
      cartimage: End,
      title: "End-to-End Solutions: From Concept to Launch",
      description:
        "Complete UI/UX services including strategy, design, development handoff, and post-launch optimization.",
      linkurl: "#",
    },
  ];

  export const Servicesmain = [
    {
      icon: <Globe size={24} className="text-white" />,
      title: " Web Development Services",
      description:
        "We design and develop websites that are both functional and visually stunning.",
      features: [
        "E-commerce Platforms",
        "Content Management Systems",
        "SEO-Optimized Websites",
        "Scalable Web Applications",
      ],
      linkurl: "/services/web-development",
    },

    {
      icon: <Smartphone size={24} className="text-white" />,
      title: "Mobile App Development",
      description:
        "Whether you need a native or hybrid mobile app, we provide full-stack mobile development services.",
      features: [
        "iOS & Android App Development",
        "Mobile E-Commerce Integration",
        "Custom User Interfaces (UI)",
        "App Analytics and Optimization",
      ],
      linkurl: "/services/mobile-app-development",
    },

    {
      icon: <Cloud size={24} className="text-white" />,
      title: "Cloud & DevOps Solutions",
      description:
        "From cloud migration to DevOps automation, we help streamline your business operations.",
      features: [
        "AWS, Azure, and Google Cloud Setup & Management",
        "Continuous Integration and Deployment (CI/CD)",
        "Scalable Infrastructure for Startups & Enterprises",
        "Kubernetes and Docker Implementation",
      ],
      linkurl: "/services/cloud-services",
    },

    {
      icon: <Database size={24} className="text-white" />,
      title: "UI Design",
      description:
        "Designing visually appealing and intuitive interfaces that elevate user experience.",
      features: [
        " Visual Design",
        "Color & Typography System",
        "Component Library Creation",
        "High-Fidelity Mockups",
        "Responsive Design",
      ],
      linkurl: "/services/ui-design",
    },

    {
      icon: <Users size={24} className="text-white" />,
      title: "UX Design",
      description:
        "Crafting seamless user journeys backed by research and interaction-driven logic.",
      features: [
        "User Research",
        " UX Audits",
        "Journey Mapping",
        " Wireframing",
        "Prototyping",
      ],
      linkurl: "/services/ux-design",
    },
    {
      icon: <PenTool size={24} className="text-white" />,
      title: "Testing & QA",
      description:
        "Ensuring software quality through thorough testing and quality assurance.",
      features: [
        "Automated Testing",
        " Manual Testing",
        "Bug Tracking",
        "Performance Testing",
      ],
      linkurl: "/services/testing-service",
    },
  ];

  export const Banner6 = [
    {
      id: 1,
      step: "step 1",
      title: "Expertise Across Multiple Domains",
      desc: "Web, mobile, cloud, and data solutions under one roof.",
      Icon: Users,
      colorClass: "bgblue9",
    },
    {
      id: 2,
      step: "step 2",
      title: "Custom Solutions",
      desc: "Tailored to fit your unique business needs.",
      Icon: Award,
      colorClass: "gradient12",
    },
    {
      id: 3,
      step: "step 3",
      title: "Scalability",
      desc: "Solutions that grow with you.",
      Icon: Zap,
      colorClass: "gradient13",
    },
    {
      id: 4,
      step: "step 4",
      title: "Fast Delivery",
      desc: "Get your product to market faster with our streamlined development process.",
      Icon: Clock,
      colorClass: "gradient14",
    },
  ];

  export const IndustriesWeServe2 = [
    {
      icon: <HeartPulse size={44} className="text-white" />,
      title: "Healthcare",
      description:
        "HIPAA-compliant solutions for hospitals, clinics, and healthcare providers",
      linkurl: "/",
    },

    {
      icon: <HandCoins size={44} className="text-white" />,
      title: "Finance & Banking",
      description:
        "Secure fintech solutions with advanced encryption and compliance",
      linkurl: "/",
    },

    {
      icon: <ShoppingCart size={44} className="text-white" />,
      title: "E-commerce & Retail",
      description: "Scalable online stores and inventory management systems",
      linkurl: "/",
    },

    {
      icon: <GraduationCap size={44} className="text-white" />,
      title: "Education & E-learning",
      description:
        "Interactive learning platforms and educational management systems",
      linkurl: "/",
    },

    {
      icon: <Plane size={44} className="text-white" />,
      title: "Travel & Hospitality",
      description:
        "Booking systems, property management, and customer experience platforms",
      linkurl: "/",
    },

    {
      icon: <Factory size={44} className="text-white" />,
      title: "Manufacturing & Supply Chain",
      description:
        "ERP systems, IoT integration, and supply chain optimization",
      linkurl: "/",
    },
    {
      icon: <Building size={44} className="text-white" />,
      title: "Real Estate & Property",
      description: "Property management systems and real estate marketplaces",
      linkurl: "/",
    },
    {
      icon: <Car size={44} className="text-white" />,
      title: "Automotive",
      description: "Connected car solutions and automotive management systems",
      linkurl: "/",
    },
    {
      icon: <Film size={44} className="text-white" />,
      title: "Media & Entertainment",
      description: "Content management systems and streaming platforms",
      linkurl: "/",
    },
    {
      icon: <Landmark size={44} className="text-white" />,
      title: "Non-Profit & Government",
      description: "Citizen service portals and non-profit management systems",
      linkurl: "/",
    },
  ];

  export const challenges = [
    {
      icon: <Clock className="text-[#FF6B6B]" size={22} />,
      title: "Time-Consuming and Manual QA Processes",
      desc: "Inefficiency of outdated testing methods slowing down development cycles",
    },
    {
      icon: <AlertTriangle className="text-[#FF6B6B]" size={22} />,
      title: "Lack of Comprehensive Testing",
      desc: "Incomplete or inconsistent testing leading to undetected bugs in production",
    },
    {
      icon: <Zap className="text-[#FF6B6B]" size={22} />,
      title: "Pressure to Deliver High-Quality Products Quickly",
      desc: "Need for fast yet reliable QA to keep up with tight project deadlines",
    },
    {
      icon: <Shield className="text-[#FF6B6B]" size={22} />,
      title: "Security Concerns in a Digital Age",
      desc: "Importance of robust testing for security vulnerabilities and data protection",
    },
  ];

  export const solutions = [
    {
      icon: <CheckCircle className="text-[#22C55E]" size={22} />,
      title: "End-to-End Testing Solutions",
      desc: "Covering every phase from functional to performance, security, and load testing",
    },
    {
      icon: <Gauge className="text-[#22C55E]" size={22} />,
      title: "Fast & Efficient",
      desc: "Automated solutions to speed up the process while maintaining accuracy",
    },
    {
      icon: <Users className="text-[#22C55E]" size={22} />,
      title: "Dedicated Expert Teams",
      desc: "Specialized teams focusing on your specific requirements and project timelines",
    },
    {
      icon: <Lock className="text-[#22C55E]" size={22} />,
      title: "Scalability",
      desc: "Adaptable services that grow with your business needs and requirements",
    },
  ];

  export const features2 = [
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Tailored Testing Solutions",
      tag: "Custom Strategies",
      desc: "Custom-built testing strategies for your unique product and business goals",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Dedicated Experts",
      tag: "Certified Team",
      desc: "A team of certified testers with hands-on experience in various industries",
    },
    {
      icon: <Wrench className="w-6 h-6 text-white" />,
      title: "Cutting-Edge Tools",
      tag: "Latest Tech",
      desc: "Utilizing the latest automation frameworks, tools, and technologies",
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-white" />,
      title: "Agile Testing Process",
      tag: "Agile Ready",
      desc: "Adaptability to work with your existing Agile development cycle",
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Comprehensive Test Coverage",
      tag: "360° Coverage",
      desc: "From functional to performance, security, and usability testing",
    },
  ];

  export const data = [
    {
      icon: <Zap className="text-blue-500" />,
      title: "Slow, clunky user experience & high bounce rates",
      cost: "Lost leads, bad brand perception, low conversion",
      solve: "Responsive. Fast. SEO-friendly.",
    },
    {
      icon: <TrendingUp className="text-blue-500" />,
      title: "Trouble scaling with growing users and traffic",
      cost: "Your site crashes, features lag, costs go up",
      solve:
        "Scalable back-end frameworks, cloud infrastructure, microservices",
    },
    {
      icon: <Database className="text-blue-500" />,
      title: "Data silos, low visibility, scattered insights",
      cost: "Poor decisions, missed opportunities",
      solve: "Data management, insights, and pipelines",
    },
    {
      icon: <Clock className="text-blue-500" />,
      title: "Long launch cycles, poor team sync",
      cost: "You lose momentum, competitor takes lead",
      solve: "Agile development, CI/CD, DevOps, tight collaboration",
    },
    {
      icon: <Shield className="text-blue-500" />,
      title: "Keeping up with evolving platform demands",
      cost: "Risk of breach, tech debt, loss of trust",
      solve: "Up-to-date, secure, best practices with ongoing support",
    },
  ];

  export const features3 = [
    {
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      title: "E-Commerce & SaaS",
      desc: "Custom builds, marketplace development, multi-tenant architecture, subscription billing, vendor panels",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Custom Web Portals",
      desc: "Visually striking, fast, and reliable portals built for production with SEO and digital marketing integration",
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "On-Demand Apps",
      desc: "Food delivery, logistics, health, fitness apps combining cross-platform tech with real-time features",
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Digital Transformation",
      desc: "Migrating legacy systems, automating workflows, building dashboards for decision makers",
    },
  ];

  export const Banner7 = [
    {
      id: 1,
      title: "Neat, Maintainable Code",
      desc: "Clean architecture, modular design, documentation — so that features can grow without causing chaos",
      Icon: FileJson,
      colorClass: "bgblue9",
    },
    {
      id: 2,
      title: "Speed Without Sacrificing Quality",
      desc: "Fast delivery cycles, while ensuring reliability, scalability, and robust performance",
      Icon: Zap,
      colorClass: "gradient12",
    },
    {
      id: 3,
      title: "Security & Support Post-Delivery",
      desc: "We don't just launch and leave; we maintain, monitor, and ensure your system stays secure and up-to-date",
      Icon: Users,
      colorClass: "gradient13",
    },
  ];

  export const SucessStoryDataSolution = [
    {
      title: "Always On: The IT Overhaul That Made Emax India Unbreakable",
      subtitle: "IT Consulting & Infrastructure Management",
      challenge:
        "Emax India’s fragmented and unstable IT systems led to frequent downtime, no real-time tracking, and missing backup protocols—putting operations and data at risk",
      solution:
        "A centralized IT infrastructure was built with 24/7 monitoring, automated backups, advanced firewalls, and full server automation for reliability and scalability.",
      Resultstext:
        "Achieved 99.9% uptime, 50% faster system response, reduced manual workload, and a secure, future-ready IT foundation.",
      technologies: [
        "Linux",
        "MySQL",
        "PHP",
        " JavaScript",
        "cPanel",
        "Cron Jobs",
        " SSL",
        "Cloud Monitoring",
      ],
      image: "/assets/img/health-tracker.png",
      width: 564,
      height: 323,
      link: "https://www.logzerotechnologies.com/blog/it-consultancy-and-web-management-for-emax-india/",
    },
    {
      title: "ADPKD Urination-Tracking App for Tolvaptan Patients",
      subtitle: "Healthcare, Pharmaceuticals",
      challenge:
        "The challenge was to create a solution that enables patients to easily and consistently track their urination patterns.",
      solution:
        "A Flutter app was developed for real-time urination tracking with set reporting times, followed by user feedback to refine the app for future trials.",
      Resultstext:
        "Higher data completeness and accuracy than self-reports, strong usability feedback, and clearer side-effect patterns to guide care.",
      technologies: ["Flutter", "PHP (Laravel)", "React.js", "MySQL"],
      image:
        "/assets/img/ADPKD Urination-Tracking App for Tolvaptan Patients- Case Study.webp",
      width: 564,
      height: 383,
      link: "https://www.logzerotechnologies.com/case-studies/improving-patient-experience-adpkd-treatment-urination-tracking-app/",
    },
  ];

  export const SucessStoryDataWeb = [
    {
      title: "From Slow to Slick: Emax India’s Game-Changing Web Revamp",
      subtitle: "Information Technology & Digital Services",
      challenge:
        "Emax India’s old website was slow, outdated, and not mobile-friendly, limiting user engagement and online visibility.",
      solution:
        "We redesigned the site with a modern UI, faster load speed, SEO optimization, and a custom WordPress CMS for easy updates.",
      Resultstext:
        "60% faster performance, higher organic reach, improved mobile experience, and stronger user engagement.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "MySQL",
        "WordPress",
        "Cloudflare CDN",
        "Google Analytics",
      ],
      image: "/assets/img/health-tracker.png",
      width: 564,
      height: 323,
      link: "https://www.logzerotechnologies.com/blog/it-consultancy-and-web-management-for-emax-india/",
    },
    {
      title: "ADPKD Urination-Tracking App for Tolvaptan Patients",
      subtitle: "Healthcare, Pharmaceuticals",
      challenge:
        "The challenge was to create a solution that enables patients to easily and consistently track their urination patterns.",
      solution:
        "A Flutter app was developed for real-time urination tracking with set reporting times, followed by user feedback to refine the app for future trials.",
      Resultstext:
        "Higher data completeness and accuracy than self-reports, strong usability feedback, and clearer side-effect patterns to guide care.",
      technologies: ["Flutter", "PHP (Laravel)", "React.js", "MySQL"],
      image:
        "/assets/img/ADPKD Urination-Tracking App for Tolvaptan Patients- Case Study.webp",
      width: 564,
      height: 383,
      link: "https://www.logzerotechnologies.com/case-studies/improving-patient-experience-adpkd-treatment-urination-tracking-app/",
    },
  ];
