import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/components/ui/theme-provider';
import TheNavbar from '@/components/TheNavbar';
import TheFooter from '@/components/TheFooter';
import Provider from '@/components/ui/provider';

export const metadata: Metadata = {
  title: 'Kompyuter Savodxonligi kursi',
  description:
    "Kompyuterni professionallardan o'rganing! 4-yildan ortiq tajribaga ega ustozdan kompyuterni 0 dan o'rganing. Bizning video kursimizda amaliy ko'nikmalar beriladi. Ushbu ko'nikmalar bilan o'qish yoki ishda hech qanday qiyinchiliklarga duch kelmaysiz. Kursimizda Word, Excel, PowerPoint, Google Docs, Google Sheets, Google Slides, ChatGPT, internetda ishlash, hujjatlar tayyorlash, pdf hujjatlarni tahrirlash va boshqa bir qancha ko'nikmalarga ega bo'lasiz.",
  authors: [{ name: 'Valijon Maxmudov', url: 'https://kompyuter-savodxonligi.uz' }],
  keywords:
    "Word, Excel, PowerPoint, Google Docs, Google Sheets, Google Slides, ChatGPT, internetda ishlash, hujjatlar tayyorlash, pdf hujjatlar bilan ishlash, kompyuter, kompyuter kursi, kompyuterni o'rganish, windows, defender, kompyuter bo'yicha test, kompyuter bo'yicha topshiriqlar",
  verification: { google: '305361365', yandex: '98693790' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <TheNavbar />
            <Provider>
              <main className="flex-grow">{children}</main>
            </Provider>
            <TheFooter />
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
