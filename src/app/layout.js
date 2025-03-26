import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Профессиональные транспортно-экспедиционные услуги | ООО «Межрегионтранс»",
    description:
        "Компания ООО «Межрегионтранс» предоставляет транспортно-экспедиционные услуги с 2016 года. Надежная доставка грузов, включая товары с температурным режимом.",
    keywords:
        "транспортные услуги, экспедирование грузов, перевозка товаров, логистика, Межрегионтранс",
    author: "ООО «Межрегионтранс»",
    robots: "index, follow",
    openGraph: {
        title: "Профессиональные транспортно-экспедиционные услуги | ООО «Межрегионтранс»",
        description:
            "ООО «Межрегионтранс» — надежный партнер в сфере транспортных услуг с 2016 года. Доставка грузов с соблюдением всех требований.",
        url: "https://yourwebsite.com",
        type: "website",
        images: [
            {
                url: "/mainBus.jpg",
                width: 1200,
                height: 630,
                alt: "Your website image",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Your Website Title",
        description: "Your website description with relevant keywords.",
        images: ["https://yourwebsite.com/twitter-image.jpg"],
    },
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
