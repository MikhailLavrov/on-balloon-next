import { Menu, ConfigProvider } from 'antd';
import { useEffect } from 'react';
import { topMenuData } from '@/data/topMenuData';
import { useAppSelector, useAppDispatch, useAppStore } from '@/store/hooks'
import { setCurrentMenu } from '@/store/slices/topMenuNavSlice';

export const TopMenu = () => {
  
  const store = useAppStore()
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.topMenuNav.currentSubMenu)

  const onClick = (e: { keyPath: string | any[]; key: any; }) => {
    dispatch(setCurrentMenu({ currentTopMenu: e.keyPath[e.keyPath.length - 1], currentSubMenu: e.key }));
  };

  useEffect(() => {
    console.log(state);
  }, [state]);
  
  const theme: object = {
    token: {
      colorPrimary: '#f83939',
      lineWidth: 0,
      fontSize: '10px',
      fontFamily: 'Tilda Sans, Arial, sans-serif'
    },
  }

  return (
    <ConfigProvider theme={theme}>
      <Menu
        onClick={onClick}
        mode="horizontal"
        items={topMenuData}
        style={{
          backgroundColor: "transparent",
        }}
      />
    </ConfigProvider>
  )
}
