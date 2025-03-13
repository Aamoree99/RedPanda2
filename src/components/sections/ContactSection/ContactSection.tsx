import styles from './ContactSection.module.css';
import { useTranslation } from '../../../i18n/useTranslation';
import {
    FaInstagram,
    FaTelegramPlane,
    FaWhatsapp,
    FaVk,
    FaFacebookMessenger,
    FaPhone
} from 'react-icons/fa';

const ContactSection = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.inner}>
                <h2 className={styles.title}>{t('contact.title')}</h2>
                <p className={styles.subtitle}>{t('contact.subtitle')}</p>
                <div className={styles.statusLine}>
                    <span className={styles.statusGlow}></span>
                    <span>{t('contact.statusLine')}</span>
                </div>

                <div className={styles.icons}>
                    <a href="https://www.instagram.com/redpandacz" target="_blank" rel="noopener noreferrer"
                       className={styles.icon}>
                        <FaInstagram/>
                    </a>
                    <a href="tg://resolve?domain=redpandacz" target="_blank" rel="noopener noreferrer"
                       className={styles.icon}>
                        <FaTelegramPlane/>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=420773896238" target="_blank" rel="noopener noreferrer"
                       className={styles.icon}>
                        <FaWhatsapp/>
                    </a>
                    <a href="https://vk.me/redpandacz" target="_blank" rel="noopener noreferrer"
                       className={styles.icon}>
                        <FaVk/>
                    </a>
                    <a href="https://m.me/redpandacz" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaFacebookMessenger/>
                    </a>
                </div>

                <a href="tel:+420220770001" className={styles.phone}>
                    <FaPhone className={styles.phoneIcon}/>
                    <span className={styles.phoneText}>
        {t('contact.callNow')} <strong>(+420) 220 770 001</strong>
      </span>
                </a>

                <form className={styles.form}>
                    <label className={styles.formLabel}>{t('contact.leaveNumber')}</label>
                    <div className={styles.formRow}>
                        <div className={styles.formInput}>🇨🇿 <input type="tel" placeholder="+420 (999) 999-999"/></div>
                        <button className={styles.callButton}>{t('contact.callMe')}</button>
                    </div>
                </form>
                <div className={styles.map}>
                    <iframe
                        title="Red Panda Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.1514883540194!2d14.427161676761927!3d50.07915491352179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948d784f92f7%3A0x59afa04731f6f65c!2sRedpanda.cz%20Insurance%20for%20foreigners!5e0!3m2!1sen!2scz!4v1710332080465!5m2!1sen!2scz"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
