import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import { getAvailableLanguages, detectLanguage } from '../../../i18n';
import { useTranslation } from '../../../i18n/useTranslation';

const Header = () => {
    const { lang, setLang, t } = useTranslation();
    const [availableLangs, setAvailableLangs] = useState<string[]>([]);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const langs = getAvailableLanguages();
        setAvailableLangs(langs);
        setLang(detectLanguage(langs));

        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [setLang]);

    const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        setLang(newLang);
        console.log(`Language changed to: ${newLang}`);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.logo}>
                        <img src="/logo.svg" alt="Red Panda logo" />
                    </div>

                    <div className={styles.controls}>
                        <a href="tel:+420220770001" className={styles.phone}>
                            +420&nbsp;220&nbsp;770&nbsp;001
                        </a>

                        <select
                            className={styles.lang}
                            value={lang}
                            onChange={handleChangeLang}
                        >
                            {availableLangs.map((code) => (
                                <option key={code} value={code}>
                                    {code.toUpperCase()}
                                </option>
                            ))}
                        </select>

                        <button className={styles.cta} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            {t('header.contactUs')}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
