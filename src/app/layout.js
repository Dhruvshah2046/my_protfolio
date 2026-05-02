import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Dhruv Shah | Portfolio",
  description: "Minimalist high-end portfolio of Dhruv Shah",
};

// This is CRITICAL for mobile — without this, phones render at ~980px desktop width
// and all CSS breakpoints are ignored
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0a0a0a" }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
