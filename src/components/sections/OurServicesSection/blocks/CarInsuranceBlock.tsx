import styles from './CarInsuranceBlock.module.css';
import { useTranslation } from '../../../../i18n/useTranslation';

const CarInsuranceBlock = () => {
    const { t } = useTranslation();

    const rawPoints = t('services.carInsurance.points');
    const points = Array.isArray(rawPoints) ? rawPoints : [];

    return (
        <section className={styles.section} id="car-insurance">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.image}>
                        <span className={styles.label}>{t('services.carInsurance.img')}</span>
                    </div>

                    <div className={styles.content}>
                        <h2 className={styles.title}>{t('services.carInsurance.title')}</h2>
                        <p className={styles.subtitle}>{t('services.carInsurance.description')}</p>

                        <ul className={styles.list}>
                            {points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>

                        <button className={styles.button} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            {t('services.carInsurance.button')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarInsuranceBlock;
