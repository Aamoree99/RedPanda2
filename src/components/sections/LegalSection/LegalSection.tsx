import styles from './LegalSection.module.css';

const LegalSection = () => {
    return (
        <section className={styles.legal}>
            <div className={styles.container}>
                <div className={styles.mapTextWrapper}>
                    <div className={styles.text}>
                        <p>
                            <strong>Red Corp. s.r.o.</strong> — zajišťuje zprostředkování pojištění jako Vázaný zástupce IČO: 05010349. Datum oprávnění k činnosti – 06.05.2019.
                            <br />
                            Adresa: Václavské náměstí 808/66, 110 00 Praha 1, office 214–215
                            <br />
                            Zastoupený: START INSURANCE s.r.o. IČO:28623151
                            <br />
                            Vázaný zástupce má oprávnění nabízet pojištění od těchto partnerských pojišťoven:
                            MAXIMA pojišťovna, a.s., Pojišťovna VZP, a.s., Slavia pojišťovna, a.s., SV pojišťovna, a.s.,
                            UNIQA pojišťovna, a.s., Vitalitas pojišťovna, a.s., Colonnade Insurance S.A.
                        </p>
                        <p>
                            <strong>Red Panda Finance s.r.o.</strong> — zajišťuje služby a servis klientům<br />
                            IČO: 17398878
                        </p>
                    </div>
                </div>

                <div className={styles.links}>
                    <a href="https://redpanda.cz/opojistovacmzprostredkovateli" target="_blank" rel="noopener noreferrer">
                        INFORMACE O POJIŠŤOVACÍM ZPROSTŘEDKOVATELI DLE § 88 ZÁKONA Č. 170/2018 SB.
                    </a>
                    <a href="https://redpanda.cz/reklamacnirad" target="_blank" rel="noopener noreferrer">
                        REKLAMAČNÍ ŘÁD
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LegalSection;
