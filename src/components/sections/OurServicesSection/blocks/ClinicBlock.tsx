import styles from './ClinicBlock.module.css';
import { useTranslation } from '../../../../i18n/useTranslation';

const ClinicBlock = () => {
    const { t } = useTranslation();
    const rawPoints = t('services.clinic.points');
    const points = Array.isArray(rawPoints) ? rawPoints : [];

    return (
        <section className={styles.section} id="clinic">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{t('services.clinic.title')}</h2>
                        <p className={styles.subtitle}>{t('services.clinic.description')}</p>

                        <ul className={styles.list}>
                            {points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>

                        <button className={styles.button} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            {t('services.clinic.button')}
                        </button>
                    </div>

                    <div className={styles.image}>
                        <span className={styles.label}>{t('services.clinic.img')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClinicBlock;
