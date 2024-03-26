'use client'

import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export const YMapComponent = () => {
  const defaultState = {
    center: [59.553954, 30.104746],
    zoom: 10,
  };

  return (
    <YMaps query={{
      apikey: process.env.NEXT_PUBLIC_YMAP_APIKEY || ''
    }}>
      <Map defaultState={defaultState}>
        <Placemark geometry={defaultState.center} />
      </Map>
    </YMaps>
  );
}
