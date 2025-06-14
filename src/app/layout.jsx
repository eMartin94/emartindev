import { Oswald } from 'next/font/google';
import '@/styles/globals.css';
import Loader from '@/components/ui/Loader';

const fontOswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-oswald',
});

export const metadata = {
  title: 'eMartinDev | Portafolio',
  description:
    '"Desarrollador web enfocado en crear experiencias interactivas con React, Next.js y Tailwind CSS. Especialista en animaciones con GSAP y Framer Motion, y con experiencia en APIs, bases de datos y backend con Node.js.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`${fontOswald.className} antialiased selection:bg-accent selection:text-primary`}
      >
        <Loader>{children}</Loader>
      </body>
    </html>
  );
}
