import HomePageClient from "@/components/HomePageClient";
import api from "@/lib/api";

// Enable caching (e.g., 1 hour)
export const revalidate = 3600;

const normalizeCaseStudyServer = (study) => {
  const fallbackImage = "/assets/img/health-tracker.png";
  const technologies = Array.isArray(study.technologies)
    ? study.technologies.map(t => {
        if (typeof t === 'string') return t.trim();
        if (t && typeof t === 'object') return String(t.name || t.slug || "").trim();
        return "";
      }).filter(Boolean)
    : [];

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
    link: study.link || (study.slug ? `/blog/blogDetails?id=${encodeURIComponent(study.slug)}` : "#"),
  };
};

async function fetchCaseStudies() {
  try {
    // Fetch case studies for "mobile-development" (Category ID 2)
    // Using fetch with next: { revalidate } is standard, but api instance uses axios.
    // Axios doesn't support next.js fetch caching extensions natively unless we configure it or use native fetch.
    // Since we exported 'revalidate' constant for the page, this data might be static at build/revalidate time IF we rendered it.
    // But api.get is client-side axios usually? No, it's axios instance.
    // Axios on server runs every request in dynamic rendering, or once in static generation.

    // We'll use the 'api' instance but we should ensure the Base URL is correct for server.
    // api.js uses NEXT_PUBLIC_API_BASE_URL.

    const { data: payload } = await api.get("/posts/case-study?portfolioCategoryIds=2");

    const rows = Array.isArray(payload?.data)
      ? payload.data
      : Array.isArray(payload?.data?.rows)
      ? payload.data.rows
      : Array.isArray(payload?.rows)
      ? payload.rows
      : [];

    const firstTwo = rows.slice(0, 2);
    return firstTwo.map(normalizeCaseStudyServer);
  } catch (error) {
    console.error("Error fetching case studies on server:", error);
    return [];
  }
}

export async function generateMetadata() {
  const apiUrl = `${
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://webapi.logzerotechnologies.com/api"
  }/categories/categoriesDetail`;

  try {
    // We use native fetch here to benefit from Next.js caching defaults if applicable,
    // though axios is used elsewhere.
    const res = await fetch(apiUrl, { next: { revalidate: 3600 } });
    const data = await res.json();
    const homeMeta =
      data?.data?.find((item) => item?.customSlug === "home") ?? {};

    const title = homeMeta.metaTitle || "Home | LogZero Technologies";
    const description =
      homeMeta.metaDescription ||
      "Welcome to LogZero – delivering scalable digital solutions.";

    return { title, description };
  } catch (error) {
    const title = "Home | LogZero Technologies";
    const description =
      "Welcome to LogZero – delivering scalable digital solutions.";
    return { title, description };
  }
}

export default async function Page() {
  const caseStudies = await fetchCaseStudies();
  return <HomePageClient caseStudies={caseStudies} />;
}
