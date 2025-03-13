import { useEffect, useState } from 'react';
import styles from './SidebarNav.module.css';
import { useTranslation } from '../../../i18n/useTranslation.ts';

const SidebarNav = () => {
    const { t } = useTranslation();

    const sections = [
        { id: 'hero', label: t('header.hero') },
        { id: 'about', label: t('header.about') },
        { id: 'insurance', label: t('header.insurance') },
        { id: 'courses', label: t('header.courses') },
        { id: 'clinic', label: t('header.clinic') },
        { id: 'car-insurance', label: t('header.carInsurance') },
        { id: 'benefits', label: t('header.benefits') },
        { id: 'reviews', label: t('header.reviews') },
        { id: 'contact', label: t('header.contact') }
    ];

    const [activeId, setActiveId] = useState('hero');
    const [isMobile, setIsMobile] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const updateViewport = () => {
            setIsMobile(window.innerWidth < 768);
        };

        updateViewport();
        window.addEventListener('resize', updateViewport);
        return () => window.removeEventListener('resize', updateViewport);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        if (isMobile) setOpen(false);
    };

    if (isMobile) {
        return (
            <>
                <button className={styles.burger} onClick={() => setOpen(!open)}>
                    ☰
                </button>
                {open && (
                    <div className={styles.mobileMenu}>
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollTo(section.id)}
                                className={`${styles.link} ${activeId === section.id ? styles.active : ''}`}
                            >
                                {section.label}
                            </button>
                        ))}
                    </div>
                )}
            </>
        );
    }

    return (
        <nav className={styles.sidebar}>
            <ul>
                {sections.map((section) => (
                    <li key={section.id}>
                        <button
                            onClick={() => scrollTo(section.id)}
                            className={`${styles.link} ${activeId === section.id ? styles.active : ''}`}
                        >
                            {section.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SidebarNav;
