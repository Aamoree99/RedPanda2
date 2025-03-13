import styles from './FooterSection.module.css'; // Путь к стилям

const Footer = () => {
    return (
        <footer className={styles.footer}>
      <span className={styles.footerText}>
        Developed by <a href="https://github.com/Aamoree99" target="_blank" rel="noopener noreferrer">Aamoree99</a> @ 2025 for RedPanda
      </span>
        </footer>
    );
};

export default Footer;
