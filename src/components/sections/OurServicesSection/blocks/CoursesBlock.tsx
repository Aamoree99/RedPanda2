import styles from './CoursesBlock.module.css';
import { useTranslation } from '../../../../i18n/useTranslation';

const CoursesBlock = () => {
    const { t } = useTranslation();

    type CourseItem = {
        name: string;
        fullYear: string;
        halfYear?: string;
    };

    const rawCourses = t('services.courses.list');
    const courses: CourseItem[] = Array.isArray(rawCourses) ? (rawCourses as CourseItem[]) : [];


    return (
        <section className={styles.courses} id="courses">
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.image}>
                        <span className={styles.label}>{t('services.courses.img')}</span>
                    </div>


                    <div className={styles.content}>
                        <h2 className={styles.title}>{t('services.courses.title')}</h2>
                        <div className={styles.items}>
                            {courses.map((course, idx) => (
                                <div key={idx} className={styles.item}>
                                    <div className={styles.name}>{course.name}</div>
                                    <div className={styles.prices}>
                                        {course.halfYear && (
                                            <span>{t('services.courses.halfYear')}: <b>{course.halfYear}</b></span>
                                        )}
                                        <span>{t('services.courses.fullYear')}: <b>{course.fullYear}</b></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className={styles.button} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{t('services.courses.button')}</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesBlock;
