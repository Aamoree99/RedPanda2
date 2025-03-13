import { useEffect, useRef, useState } from "react";
import styles from "./Reviews.module.css";
import { useTranslationContext } from "../../../i18n/TranslationContext";

interface Review {
    name: string;
    text: Record<string, string>;
}

export const Reviews = () => {
    const { lang, t } = useTranslationContext();
    const [reviews, setReviews] = useState<Review[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const isUserInteracting = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let scrollInterval: number;

        const startScroll = () => {
            scrollInterval = window.setInterval(() => {
                if (!isUserInteracting.current) {
                    container.scrollLeft += 1;
                    if (
                        container.scrollLeft + container.clientWidth >=
                        container.scrollWidth - 100
                    ) {
                        loadMoreReviews();
                    }
                }
            }, 20);
        };

        const stopScroll = () => clearInterval(scrollInterval);
        startScroll();
        return () => stopScroll();
    }, [reviews]);

    const handleInteraction = () => {
        isUserInteracting.current = true;
        setTimeout(() => {
            isUserInteracting.current = false;
        }, 3000);
    };

    useEffect(() => {
        loadMoreReviews();
    }, []);

    const loadMoreReviews = () => {
        fetch("/data/reviews.json")
            .then((res) => res.json())
            .then((newData) => {
                setReviews((prev) => [...prev, ...newData]);
            });
    };

    return (
        <section id="reviews" className={styles.section}>
            <h2 className={styles.heading}>
                {t("reviews.title")}
            </h2>
            <div
                className={styles.container}
                ref={containerRef}
                onMouseEnter={handleInteraction}
                onTouchStart={handleInteraction}
                onWheel={handleInteraction}
            >
                {reviews.map((review, index) => (
                    <div key={index} className={styles.card}>
                        <p className={styles.text}>“{review.text[lang] || review.text.en}”</p>
                        <p className={styles.name}>– {review.name}</p>
                        <div className={styles.glow} />
                    </div>
                ))}
            </div>
        </section>
    );
};
