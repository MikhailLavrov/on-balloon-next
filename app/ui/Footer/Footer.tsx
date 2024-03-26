import c from './Footer.module.scss';
import { CopyrightOutlined } from '@ant-design/icons';
import { personalData } from '@/app/data/personalData';

export const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={c.footer}>
      <div className={`${c.footer__container} container`}>
        <span><CopyrightOutlined /> {personalData.orgname} {currentYear}</span>
        <span>Все цены и условия, указанные на данном сайте, не являются публичной офертой.</span>
      </div>
    </footer>
  );
};
