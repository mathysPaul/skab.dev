import { NextResponse } from "next/server";

import { isLocale } from "@/lib/data-access/locale-guard";
import { staticContentSource } from "@/lib/data-access/static-source";

interface RouteContext {
  params: Promise<{ locale: string }>;
}

export async function GET(_request: Request, { params }: RouteContext) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return NextResponse.json({ error: "Unsupported locale" }, { status: 404 });
  }

  const about = await staticContentSource.getAbout(locale);

  return NextResponse.json(about);
}
