import c from './Advantages.module.scss';
import { advantagesData } from '@/app/data/advantagesData';

const advantagesList = advantagesData.map((item, index) => {
  const {title, text, icon} = item;
  return (
    <li className={c.advantages__item} key={index}>
      <div className={c.advantages__image}>{icon}</div>
      <h3 className={c.advantages__itemName}>{title}</h3>
      <p className={c.advantages__itemText}>{text}</p>
    </li>
  )
})

export const Advantages: React.FC = () => {
  return (
    <section className={c.advantages}>
      <div className="container">
        <ul className={c.advantages__list}>
          {advantagesList}
        </ul>
      </div>
    </section>
  )
}
