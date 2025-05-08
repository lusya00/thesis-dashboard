import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Providers from './providers';

export const metadata = {
  title: 'Panel de Administración Untung Jawa',
  description:
    'Panel de administración para gestionar alojamientos, actividades y usuarios de Untung Jawa.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen w-full flex-col">
        <Providers>{children}</Providers>
      </body>
      <Analytics />
    </html>
  );
}
