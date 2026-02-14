import { Suspense } from "react";
import BlogDetailsClient from "./BlogDetailsClient";
import api from "@/lib/api";

export const revalidate = 0;

export async function generateMetadata({ searchParams }) {
  const { id: idRaw } = await searchParams;
  const id = idRaw || "1";
  const apiUrl = `${
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://webapi.logzerotechnologies.com/api"
  }/posts/${id}`;

  try {
    const res = await api.get(apiUrl);
    const data = res?.data?.data ?? {};
    const title = data.metaTitle || "Blog Details | LogZero Technologies";
    const description =
      data.metaDescription ||
      "Discover insights, updates, and stories from LogZero Technologies.";
    return { title, description };
  } catch (error) {
    const title = "Blog Details | LogZero Technologies";
    const description =
      "Discover insights, updates, and stories from LogZero Technologies.";
    return { title, description };
  }
}

const BlogDetailsFallback = () => (
  <div className="bg-white min-h-screen">
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="h-[320px] w-full rounded-2xl bg-gray-200 animate-pulse" />
        <div className="h-6 w-1/2 rounded bg-gray-200 animate-pulse" />
        <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
      </div>
    </div>
  </div>
);

export default function BlogDetailsPage() {
  return (
    <Suspense fallback={<BlogDetailsFallback />}>
      <BlogDetailsClient />
    </Suspense>
  );
}

