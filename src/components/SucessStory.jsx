"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Award,
  ChevronRight,
  Eye,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";
import CaseStudyImage from "./CaseStudyImage";
import CounterNo from "./CounterNo";
import api from "@/lib/api";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://webapi.logzerotechnologies.com/api";

const CATEGORY_ID_BY_SLUG = {
  "software-development": 1,
  "mobile-development": 2,
  "web-development": 3,
  ui: 4,
  ux: 5,
  qa: 7,
  devops: 8,
  "server-management": 9,
  "global-partner": 10,
};

const normalizeCaseStudy = (study = {}, fallbackImage) => {
  // Prefer API technologies (objects or strings); fallback to an empty list for clean UI handling.
  const technologies = Array.isArray(study.technologies)
    ? study.technologies
        .map((t) => {
          if (typeof t === "string") return t.trim();
          if (t && typeof t === "object") return String(t.name || t.slug || "").trim();
          return "";
        })
        .filter(Boolean)
    : [];

  // Prefer id-based blog details route; fall back to slug as query if id missing.
  const linkFromSlugOrId = study.id
    ? `/blog/blogDetails?id=${encodeURIComponent(study.id)}`
    : study.slug
    ? `/blog/blogDetails?id=${encodeURIComponent(study.slug)}`
    : "#";

  return {
    id: study.id ?? study.slug ?? study.title,
    title: study.metaTitle || study.title || "Case Study",
    subtitle: study.metaDescription || study.subtitle || study.blogCategory || "",
    challenge: study.challenges || study.challenge || "",
    solution: study.solution || "",
    Resultstext: study.result || study.results || study.Resultstext || "",
    technologies,
    image: study.image || study.featuredImage || fallbackImage,
    featuredImageBase64: study.featuredImageBase64,
    width: study.width || 564,
    height: study.height || 383,
    link: study.link || linkFromSlugOrId,
  };
};

export default function SuccessStory({
  caseStudies,
  title,
  subtitle,
  Resultstext,
  link,
  portfolioCategoryId,
  portfolioCategorySlug,
  fallbackImage = "/assets/img/health-tracker.png",
}) {
  const [fetchedStudies, setFetchedStudies] = useState(caseStudies || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resolvedCategoryId = useMemo(() => {
    if (portfolioCategoryId) return portfolioCategoryId;
    if (!portfolioCategorySlug) return null;
    return CATEGORY_ID_BY_SLUG[portfolioCategorySlug] || null;
  }, [portfolioCategoryId, portfolioCategorySlug]);

  useEffect(() => {
    // If caseStudies are provided via props, use them and skip fetch
    if (caseStudies && caseStudies.length > 0) {
      setFetchedStudies(caseStudies);
      return;
    }

    const controller = new AbortController();
    const fetchCaseStudies = async () => {
      setLoading(true);
      setError("");
      try {
        const params = new URLSearchParams();
        if (resolvedCategoryId) {
          params.set("portfolioCategoryIds", String(resolvedCategoryId));
        }

        const url = params.toString()
          ? `/posts/case-study?${params.toString()}`
          : `/posts/case-study`;

        // Case studies API: backend already filters type/status; category is optional for general listings
        const { data: payload } = await api.get(url, {
          signal: controller.signal,
        });
      
        const rows = Array.isArray(payload?.data)
          ? payload.data
          : Array.isArray(payload?.data?.rows)
          ? payload.data.rows
          : Array.isArray(payload?.rows)
          ? payload.rows
          : [];

        const firstTwo = rows.slice(0, 2);

        if (!Array.isArray(firstTwo) || firstTwo.length === 0) {
          setFetchedStudies([]);
          return;
        }

        const normalized = firstTwo.map((item) => normalizeCaseStudy(item, fallbackImage));
        
        setFetchedStudies(normalized);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Case studies load error", err);
          setError(err.message || "Unable to load case studies");
          setFetchedStudies([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();

    return () => controller.abort();
  }, [resolvedCategoryId, fallbackImage, caseStudies]);

  const displayStudies = fetchedStudies;
  const isEmpty = !displayStudies || displayStudies.length === 0;

  return (
    <>
      {/* Title + Subtitle */}
      {!isEmpty && (
        <div className="text-center  mb-12">
          <h2 className="mb-5 !text-[32px] !font-bold">{title}</h2>
          <p className="max-w-full md:max-w-[65%] mx-auto">{subtitle}</p>
          {loading && (
            <span className="sr-only" aria-live="polite">
              Loading case studies...
            </span>
          )}
          {error && (
            <span className="sr-only" aria-live="polite">
              {error}
            </span>
          )}
        </div>
      )}

      {/* Empty state */}
      {isEmpty && (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-700 bg-gray-50">
          <p className="subheading-2 mb-1">Case studies are on the way</p>
          <p className="subtext">We’re preparing fresh success stories for this service. Check back soon.</p>
        </div>
      )}

      {/* Case Studies */}
      {!isEmpty && displayStudies.map((study, index) => (
        <div
          key={study.id || index}
          className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
            index === displayStudies.length - 1 ? "mb-0" : "mb-16"
          } ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Image */}
          <div className="w-full md:w-[50%] max-w-[564px]">
            <CaseStudyImage
              src={study.image}
              base64={study.featuredImageBase64}
              alt={study.title}
              width={study.width}
              height={study.height}
              className="rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:translate-y-[-5px]"
              fallback={fallbackImage}
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-[50%]">
            <div className="mb-3 text-[24px] leading-[30px] font-semibold text-gray-900 foutfit">
              {study.title}
            </div>
            <p className="md:text-base subheading-2 textbluenew">
              {study.subtitle}
            </p>

            {/* Challenge & Solution */}
            <div className="space-y-4 text-sm mt-9">
              <div className="subheading-2 text-gray-800">Challenge</div>
              <p className="subtext subtextcolor">{study.challenge}</p>

              <div className="subheading-2 mt-5 text-gray-800">Solution</div>
              <p className="subtext subtextcolor">{study.solution}</p>
            </div>

            {/* Results */}
            <div className="my-6">
              <p className="mb-3 subheading-2 text-gray-800">Results</p>
              <p className="subtext subtextcolor">{study.Resultstext}</p>

              {/* <div className="flex flex-wrap sm:flex-nowrap gap-y-6 gap-x-10 mt-5 justify-between sm:justify-start"> 

                   <CounterNo
                    nostats={[
                      { 
                        icon: <Users className="text-[#5BC2A7]" />,                        
                        Novalue: 50, 
                        indicator:"K+",
                        label: "Active Users" 
                      },

                      { 
                        icon: <TrendingUp className="text-[#5BC2A7]" />,                        
                        Novalue: 300,
                        indicator:"%", 
                        label: "Order Increase" 
                      },

                      { 
                        icon: <Star className="text-[#5BC2A7]" />,                        
                        Novalue: 4.5, 
                        label: "App Store Rating" 
                      },
                    ]}
                  />  */}

              {/* {study.results.map((res, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center gap-2 sm:w-auto"
                    >
                      <Image  
                        src={res.icon}
                        alt={res.label}
                        width={60}
                        height={60}
                        className="mb-2"
                      />                      
                      <h4 className="font-semibold textblue7 !text-[24px]">
                        {res.value}
                      </h4>
                      <p className="subtext subtextcolor">{res.label}</p>
                    </div>
                  ))}  */}

              {/* </div>  */}
            </div>

            {/* Technologies */}
            <div className="mt-8">
              <p className="subheading-2 text-gray-800">Technologies Used</p>
              {study.technologies.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-5">
                  {study.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="py-[6px] px-[14px] border rounded-full text-[13px] whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm text-gray-600">
                  <span aria-hidden>•</span>
                  <span>Technologies will be added soon</span>
                </div>
              )}
            </div>

            {/* Link */}
            <div className="mt-8">
              <Link
                href={study.id || study.slug ? `/blog/blogDetails?id=${encodeURIComponent(study.id || study.slug)}` : study.link || "#"}
                className="subheading-3 textbluenew inline-flex items-center gap-1 transition-transform duration-300 ease-in-out hover:translate-x-[5px] hover:!text-[#1F1F1F]"
              >
                Read Full Case Study <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
