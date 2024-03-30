import React from 'react';
import { Breadcrumbs } from '@/app/ui/Breadcrumbs/Breadcrumbs';
import { FloatButtonComponent } from '@/app/ui/FloatButton/FloatButton';
import { reviewsData } from '@/app/data/reviewsData';
import { Image } from 'antd';
import c from './ReviewsPage.module.scss';

const reviewItems = reviewsData.map((item, index) => (
  <div className={c.reviewItem} key={index}>
    <div className={c.reviewItem__userPhoto}>
      <img width={100} src={item.userPhoto} alt="Фото" />
    </div>
    <p className={c.reviewItem__name}>{item.name}</p>
    <div className={c.reviewItem__content}>
      <p className={c.reviewItem__text}> {item.text} </p>
      <div className={c.reviewItem__productPhoto}>
        <Image width={150} src={item.productPhoto} alt="Результат" />
      </div>
    </div>
  </div>
))

export default function ReviewsPage() {

  return (
    <section className={c.reviewsPage}>
      <div className={`container`}>
      <Breadcrumbs pageName={'Отзывы'} />
        <h2 className={c.reviewsPage__title}>Отзывы</h2>
        <div className={c.reviewsPage__innerContainer}>
          {reviewItems}
        </div>
      </div>
      <FloatButtonComponent />
    </section>
  );
};
