import styles from './OtherBenefitsBlock.module.css';
import { useTranslation } from '../../../../i18n/useTranslation';

const OtherBenefitsBlock = () => {
    const { t } = useTranslation();
    const rawItems = t('services.other.items');
    const items = Array.isArray(rawItems) ? (rawItems as string[]) : [];


    return (
        <section className={styles.section} id="benefits">
            <div className="container">
                <div className={styles.inner}>
                    <h2 className={styles.title}>{t('services.other.title')}</h2>
                    <p className={styles.subtitle}>{t('services.other.subtitle')}</p>

                    <div className={styles.centered}>
                        <div className={styles.grid}>
                            {items.map((item, idx) => (
                                <div key={idx}
                                     className={`${styles.card} ${idx === items.length - 1 ? styles.special : ''}`}>
                                    <span className={styles.check}>✔️</span>
                                    <span className={styles.text}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default OtherBenefitsBlock;
