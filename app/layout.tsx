import "./globals.css";

export const metadata = {
  title: "Financial Dashboard",
  description: "Next.js Financial Dashboard Assignment",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
