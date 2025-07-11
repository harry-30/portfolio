import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage_grotesque = Bricolage_Grotesque({
    variable: "--font-bri",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata = {
    title: "Harry Duong",
    description: "Portfolio"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${bricolage_grotesque.className} scroll-smooth`}>
                {children}
            </body>
        </html>
    );
}
