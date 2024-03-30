import c from './GalleryPage.module.scss';
import { Breadcrumbs } from '@/app/ui/Breadcrumbs/Breadcrumbs';
import { Skeleton } from 'antd';

export default async function GalleryPage() {
    return (
        <section className={c.gallery}>
            <div className='container'>
                <Breadcrumbs pageName={'Галерея'} />
                <div className={c.gallery__info}>
                    <h2 className={c.gallery__title}>Галерея наших работ</h2>
                    <p className={c.gallery__subtitle}>Делимся событиями, в которых принимали непосредственное участие, создавая ту самую торжественную атмосферу.</p>
                </div>
                <div className={c.gallery__content}>
                    <Skeleton active />;
                </div>
            </div>
        </section>
    );
}
