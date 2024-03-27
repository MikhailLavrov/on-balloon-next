// 'use state'

import React, { useEffect, useState } from 'react';
// import { CatalogCardModal } from '../CatalogCardModal/CatalogCardModal';
import { Button, Image } from 'antd';
import { CheckCircleFilled, HeartFilled, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { addToFavourites, deleteFromFavourites } from '@/app/lib/store/slices/favouritesSlice';
import { addToShoppingCart, deleteFromShoppingCart } from '@/app/lib/store/slices/shoppingCartSlice';
import c from './CatalogCard.module.scss';
import { useAppDispatch } from '@/app/lib/store/hooks';

interface CatalogCardProps {
  article: string;
  title: string;
  price: number;
  oldPrice?: number;
  image: string;
}

export const CatalogCard = ({...item}) => {
  const { article, title, price, oldPrice, image } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  const dispatch = useAppDispatch();

// Корзина
useEffect(() => {
  const goodsString = localStorage.getItem('shoppingCart');
  if (goodsString !== null) {
    const goods: CatalogCardProps[] = JSON.parse(goodsString);
    setIsInCart(goods.some(product => product.article === article));
  }
}, [article]);

const togglePurchases = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.stopPropagation();
  let goods: CatalogCardProps[] = [];
  const goodsString = localStorage.getItem('shoppingCart');

  if (goodsString !== null) {
    goods = JSON.parse(goodsString);
  }

  const index = goods.findIndex(product => product.article === article);
  
  if (index !== -1) {
    goods = goods.filter((_, i) => i !== index);
    setIsInCart(false);
    dispatch(deleteFromShoppingCart(article));
  } else {
    goods.push({ article, title, price, oldPrice, image });
    setIsInCart(true);
    dispatch(addToShoppingCart(article));
  }

  localStorage.setItem('shoppingCart', JSON.stringify(goods));
};

  const shoppingCartButtonIcon = isInCart ? <CheckCircleFilled style={{color: '#fff'}} /> : <ShoppingCartOutlined />;

// Избранное
  useEffect(() => {
    const favoritesString = localStorage.getItem('favorites');
    if (favoritesString !== null) {
      const favorites: CatalogCardProps[] = JSON.parse(favoritesString);
      setIsFavorite(favorites.some(favorite => favorite.article === article));
    }
  }, [article]);

  const toggleFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    let favorites: CatalogCardProps[] = [];
    const favoritesString = localStorage.getItem('favorites');
    if (favoritesString !== null) {
      favorites = JSON.parse(favoritesString);
    }
    const index = favorites.findIndex(favorite => favorite.article === article);
    if (index !== -1) {
      favorites.splice(index, 1);
      setIsFavorite(false);
      dispatch(deleteFromFavourites({ ...item }));
    } else {
      favorites.push({ article, title, price, oldPrice, image });
      setIsFavorite(true);
      dispatch(addToFavourites({ ...item }));
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  const favoritesButtonIcon = isFavorite ? <HeartFilled style={{color: 'red'}} /> : <HeartOutlined />;
  
  // Модалка
  const showModal = () => {
    setIsModalOpen(true);
  };
    
  // Скидка
  const calculateDiscountPercentage = (price: number, oldPrice?: number): number => {
    if (oldPrice && oldPrice > price) {
      return ((oldPrice - price) / oldPrice) * 100;
    }
    return 0;
  };

  const discountPercentage = calculateDiscountPercentage(price, oldPrice);

  return (
    <>
      <div className={c.catalogCard} onClick={showModal}>
        <div className={c.catalogCard__imageWrapper}>
          <Image
            src={image}
            width={200}
            height={200}
            alt={title}
            preview={false}
          />
          <Button className={c.catalogCard__toFavouritesButton} onClick={toggleFavorites}>{favoritesButtonIcon}</Button>
        </div>
        <div className={c.catalogCard__content}>
          <div className={c.catalogCard__text}>
            <p className={c.catalogCard__title}>{title}</p>
          </div>
          <div className={c.catalogCard__priceBox}>
            <p className={c.catalogCard__price}>{price}<span>&#8381;</span></p>
            {oldPrice && 
              <div className={c.catalogCard__oldPriceBox}>
                <p className={c.catalogCard__oldPrice}>{oldPrice}<span>&#8381;</span></p>
                <span className={c.catalogCard__discountPercent}>-{discountPercentage}%</span>
              </div>
            }
            <Button onClick={togglePurchases} className={isInCart ? `${c.catalogCard__toCartButton} ${c.inCart}` : `${c.catalogCard__toCartButton} ${c.notInCart}`}>
              {shoppingCartButtonIcon}
            </Button>
          </div>
        </div>
      </div>
      {/* <CatalogCardModal 
        item={item} 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        toggleFavorites={toggleFavorites} 
        isFavorite={isFavorite}
        togglePurchases={togglePurchases}
        isInCart={isInCart}
      /> */}
    </>
)};
