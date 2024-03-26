import { personalData } from '@/app/data/personalData';
import c from './SocialLinks.module.scss';
import Link from 'next/link';
import { SocialIcon } from './SocialIcon';

export const SocialLinks = () => {
  return (
    <>
      <Link className={c.socialLink} target = "_blank" href={personalData.telegram}>
        <SocialIcon icon='telegram' />
        <span>Telegram</span>
      </Link>
      <Link className={c.socialLink} target = "_blank" href={personalData.whatsapp}>
        <SocialIcon icon='whatsapp' />
        <span>Whatsapp</span>
      </Link>
      <Link className={c.socialLink} target = "_blank" href={personalData.vkontakte}>
        <SocialIcon icon='vkontakte' />
        <span>ВКонтакте</span>
      </Link>
    </>
  )
}
