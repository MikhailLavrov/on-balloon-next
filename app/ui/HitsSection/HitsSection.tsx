'use client'

import c from './HitsSection.module.scss';
import { RightOutlined } from '@ant-design/icons';
import { animationData } from '@/app/data/catalogData/animationData';
import { attractionsData } from '@/app/data/catalogData/attractionsData';
import { balloonsData } from '@/app/data/catalogData/balloonsData';
import { photozoneData } from '@/app/data/catalogData/photozoneData';
import { hitsSliderParams } from '@/app/data/sliderParams';
import Link from 'next/link';
import Slider from "react-slick";
import { CatalogCard } from "@/app/ui/CatalogCard/CatalogCard";

const allData = [...animationData, ...attractionsData, ...balloonsData, ...photozoneData];
const hitsData = allData.filter((item) => item.hit);

export const HitsSection = () => {

  const hitsSlide = hitsData.map((item, index) => (
    <div className='hits__slide' key={index}>
      <CatalogCard {...item} />
    </div>
  ))
  
  return (
    <section className={c.hits}>
      <div className='container'>
        <h2 className={c.hits__title}>
          Популярные товары
          <Link className={c.hits__showMoreLink} href={'/catalog'}>
            <RightOutlined />
          </Link>
        </h2>
        <div>
          <div className='hits__slider hits__slider--main'>
            <Slider {...hitsSliderParams}>
              {hitsSlide}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}
