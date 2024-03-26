import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Отзывы',
  description: 'Отзывы клиентов компании "Тренд на праздник"',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
