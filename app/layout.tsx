import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Metadata } from 'next';
import '@/app/ui/styles/styles.scss';
import localFont from 'next/font/local'
import { HeaderComponent } from '@/app/ui/Header/Header';
import { FooterComponent } from '@/app/ui/Footer/Footer';
import StoreProvider from '@/app/lib/store/StoreProvider';
import React from "react";
 
const TildaSans = localFont({
  src: [
    {
      path: './lib/fonts/TildaSans-Light/TildaSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './lib/fonts/TildaSans-Regular/TildaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './lib/fonts/TildaSans-Medium/TildaSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './lib/fonts/TildaSans-Semibold/TildaSans-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './lib/fonts/TildaSans-Bold/TildaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})
 
export const metadata: Metadata = {
  title: {
    template: '%s | Тренд на праздник',
    default: 'Тренд на праздник',
  },
  description: 'Организация и украшение важных мероприятий',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body className={TildaSans.className}>
          <AntdRegistry>
            <HeaderComponent />
              {children}
            <FooterComponent />
          </AntdRegistry>
        </body>
      </html>
    </StoreProvider>
  );
}
