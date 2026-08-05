import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://salc-chemistry-lab.openai.site"),
  title: "SALC Chemistry Lab — What's your chemistry?",
  description: "10개의 선택으로 발견하는 나의 취향, 텐션, 그리고 잘 맞는 사람.",
  openGraph: { title: "SALC Chemistry Lab", description: "What's your chemistry?", images: [{ url: "/og-v2.png", width: 1734, height: 907, alt: "SALC Chemistry Lab" }] },
  twitter: { card: "summary_large_image", title: "SALC Chemistry Lab", description: "What's your chemistry?", images: ["/og-v2.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
