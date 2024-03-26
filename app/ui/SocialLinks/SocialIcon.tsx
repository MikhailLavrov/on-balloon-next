import WHATSAPP_IMG from '@/public/whatsapp.svg';
import TELEGRAM_IMG from '@/public/telegram.svg';
import VKONTAKTE_IMG from '@/public/vkontakte.svg';
import Image from 'next/image';

export const SocialIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'telegram':
      return <Image src={TELEGRAM_IMG} alt={icon} />;
    case 'whatsapp':
      return <Image src={WHATSAPP_IMG} alt={icon} />;
    case 'vkontakte':
      return <Image src={VKONTAKTE_IMG} alt={icon} />;
    default:
      return null;
  }
};
