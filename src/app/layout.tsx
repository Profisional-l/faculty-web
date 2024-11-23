import './_css/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='container bg-background'>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}