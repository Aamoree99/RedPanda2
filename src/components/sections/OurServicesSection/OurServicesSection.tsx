import styles from './OurServicesSection.module.css';
import VisaInsuranceBlock from './blocks/VisaInsuranceBlock';
import CoursesBlock from './blocks/CoursesBlock';
import ClinicBlock from './blocks/ClinicBlock';
import CarInsuranceBlock from './blocks/CarInsuranceBlock';
import OtherBenefitsBlock from './blocks/OtherBenefitsBlock';

const OurServicesSection = () => {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <VisaInsuranceBlock/>
                <CoursesBlock/>
                <ClinicBlock/>
                <CarInsuranceBlock/>
                <OtherBenefitsBlock/>
            </div>
        </section>
    );
};

export default OurServicesSection;
