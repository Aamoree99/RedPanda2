import styles from './VisaInsuranceBlock.module.css';
import { useTranslation } from '../../../../i18n/useTranslation';

const VisaInsuranceBlock = () => {
    const { t } = useTranslation();
    const rawPoints = t('services.visaInsurance.points');
    const points = Array.isArray(rawPoints) ? rawPoints : [];

    return (
        <section className={styles.section} id="insurance">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{t('services.visaInsurance.title')}</h2>
                        <p className={styles.subtitle}>{t('services.visaInsurance.description')}</p>

                        <ul className={styles.list}>
                            {points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>


                        <button className={styles.button} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            {t('services.visaInsurance.button')}
                        </button>
                    </div>

                    <div className={styles.image}>
                        <img src="src/assets/mainins.jpg" alt="Insuranse"/>
                        <span className={styles.label}>{t('services.visaInsurance.img')}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaInsuranceBlock;
