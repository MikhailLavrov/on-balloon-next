'use client'

import { ArrowUpOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import c from './FloatButton.module.scss';

const { BackTop } = FloatButton;

export const FloatButtonComponent = () => {
  return (
    <BackTop icon={<ArrowUpOutlined />} className={c.floatButton} />
  )
}
