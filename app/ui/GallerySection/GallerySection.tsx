'use client'

import c from './GallerySection.module.scss';
import { galleryData } from '@/app/data/galleryData';
import { RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";
import { gallerySliderParams } from '@/app/data/sliderParams';

export const GallerySection = () => {

  const gallerySlides = galleryData.map((image, index) => (
    <div className={c.gallery__imageWrapper} key={index}>
      <div className={c.gallery__image}>
        <Image src={image} width={200} height={200} alt='' />
      </div>
    </div>
  ))
  
  return (
    <section className={c.gallery} id='gallery_section'>
      <div className='container'>
        <h2 className={c.gallery__title}>
          Наши работы
          <Link className={c.gallery__showMoreLink} href='/gallery'>
            <RightOutlined />
          </Link>
        </h2>
        <div className={c.gallery__slider}>
          <Slider {...gallerySliderParams}>
            {gallerySlides}
          </Slider>
        </div>
        <Link className={c.gallery__link} href='/gallery'>Открыть галерею</Link>
      </div>
    </section>
  )
}
