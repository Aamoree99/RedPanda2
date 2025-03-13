import React, { useEffect, useState } from 'react';
import { TranslationContext } from './TranslationContext';
import { getAvailableLanguages } from './index.ts';

type Dictionary = Record<string, unknown>;

export const TranslationProvider = ({
                                        children,
                                        lang,
                                        setLang,
                                    }: {
    children: React.ReactNode;
    lang: string;
    setLang: (lang: string) => void;
    dict: Record<string, unknown>;
}) => {
    const [dict, setDict] = useState<Dictionary>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const systemLang = navigator.language.split('-')[0];
        console.log(`System language detected: ${systemLang}`);
        console.log(`Selected language: ${lang}`);
    }, [lang]);

    useEffect(() => {
        const loadTranslations = async (language: string) => {
            try {
                console.log(`Loading translations for ${language}...`);
                const response = await fetch(`/locales/${language}.json`);
                if (response.ok) {
                    const translations = await response.json();
                    setDict(translations);
                    setLoading(false); // Устанавливаем загрузку в false, когда данные загружены
                    console.log(`Successfully loaded translations for ${language}`);
                } else {
                    console.error(`Failed to load translations for ${language}`);
                }
            } catch (error) {
                console.error('Error loading translations:', error);
            }
        };

        loadTranslations(lang);
    }, [lang]);

    useEffect(() => {
        const langs = getAvailableLanguages();
        console.log(`Available languages: ${langs.length}`);
    }, []);

    const t = <T = string>(key: string): T => {
        const keys = key.split('.');
        let value: unknown = dict;

        for (const k of keys) {
            if (typeof value === 'object' && value !== null && k in value) {
                value = (value as Record<string, unknown>)[k];
            } else {
                return key as unknown as T;
            }
        }

        return value as T;
    };

    return (
        <TranslationContext.Provider value={{ lang, setLang, t }}>
            {loading ? <div>Loading...</div> : children} {/* Пока данные загружаются, показываем "Loading..." */}
        </TranslationContext.Provider>
    );
};
