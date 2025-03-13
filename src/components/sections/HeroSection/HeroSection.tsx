import styles from './HeroSection.module.css';
import { useTranslation } from '../../../i18n/useTranslation';

const HeroSection = () => {
    const { t } = useTranslation();

    const handleScroll = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.glow}></div>

            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.tagline}>{t('hero.trust')}</p>

                    <h1 className={styles.title}>{t('hero.title')}</h1>
                    <p className={styles.subtitle}>{t('hero.subtitle')}</p>

                    <button className={styles.cta} onClick={handleScroll}>
                        {t('hero.cta')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
