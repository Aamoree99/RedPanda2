import styles from './AboutSection.module.css';
import { useTranslation } from '../../../i18n/useTranslation';

interface Feature {
    title: string;
    desc: string;
}

const AboutSection = () => {
    const { t } = useTranslation();
    const features = (t('about.features') as unknown as Feature[]) || [];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t('about.title')}</h2>
                <p className={styles.subtitle}>{t('about.subtitle')}</p>

                <div className={styles.features}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.feature}>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
