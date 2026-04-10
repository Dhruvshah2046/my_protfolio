import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Dhruv Shah | Creative Developer & Designer",
  description: "Portfolio of Dhruv Shah, focusing on building high-performance, beautiful, and interactive web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
