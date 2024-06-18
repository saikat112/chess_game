import './globals.css';

export const metadata = {
  title: 'Chess Game',
  description: 'A simple chess game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
