import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import c from './Breadcrumbs.module.scss';

export const Breadcrumbs = ({pageName}: {pageName: string}) => {
  return (
    <Breadcrumb
      items={[
        {
          href: '/',
          title: <HomeOutlined />,
        },
        {
          title: pageName,
        },
      ]}
      style={{fontFamily: 'Tilda Sans, Arial, sans-serif', marginBottom: '15px'}}
      className={c.breadcrumbs}
    />
  )
};
