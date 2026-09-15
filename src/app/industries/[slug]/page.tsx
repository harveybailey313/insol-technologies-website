import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/data/industries";
import { IndustryPageView } from "@/components/IndustryPageView";
import { pageMetadata, stripBrandSuffix } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: stripBrandSuffix(industry.metaTitle),
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryPageView industry={industry} />;
}
