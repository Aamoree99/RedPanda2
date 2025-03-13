export const getAvailableLanguages = (): string[] => {
    const langs = import.meta.glob('/public/locales/*.json', { eager: false });
    return Object.keys(langs)
        .map((path) => path.match(/\/([a-z]{2})\.json$/i)?.[1] || '')
        .filter(Boolean);
};

export const detectLanguage = (
    available: string[],
    fallback = 'en'
): string => {
    const systemLang = navigator.language.split('-')[0];
    return available.includes(systemLang) ? systemLang : fallback;
};

export const loadTranslations = async (lang: string): Promise<any> => {
    const file = `/locales/${lang}.json`;
    const response = await fetch(file);
    return response.json();
};
