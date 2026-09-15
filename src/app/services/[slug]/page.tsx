import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { ServicePageView } from "@/components/ServicePageView";
import { pageMetadata, stripBrandSuffix } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: stripBrandSuffix(service.metaTitle),
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ServicePageView service={service} />;
}
