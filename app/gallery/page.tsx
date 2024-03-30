'use client'

import { Image, ConfigProvider } from 'antd';
import c from './GalleryPage.module.scss';
import { galleryData } from '@/app/data/galleryData';
import { Breadcrumbs } from '@/app/ui/Breadcrumbs/Breadcrumbs';
import { FloatButtonComponent } from '@/app/ui/FloatButton/FloatButton';

const { PreviewGroup } = Image;

export default async function GalleryPage() {
  return (
    <section className={c.gallery}>
      <div className='container'>
        <Breadcrumbs pageName={'Галерея'} />
        <div className={c.gallery__info}>
          <h2 className={c.gallery__title}>Галерея наших работ</h2>
          <p className={c.gallery__subtitle}>Делимся событиями, в которых принимали непосредственное участие, создавая ту самую торжественную атмосферу.</p>
        </div>
        <div className={c.gallery__content}>
          <ConfigProvider
            theme={{
              token: {
                colorBgMask: 'rgba(0, 0, 0, 0.85)'
              },
            }}
          >
            <PreviewGroup >
              {galleryData.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={`Image ${index}`}
                  className='galleryImage'
                />
              ))}
            </PreviewGroup>
          </ConfigProvider>
        </div>
        <FloatButtonComponent />
      </div>
    </section>
  );
}
