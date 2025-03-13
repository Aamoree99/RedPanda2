import { createContext, useContext } from 'react';

export interface TranslationContextType {
    lang: string;
    setLang: (lang: string) => void;
    t: (key: string) => string;
}

export const TranslationContext = createContext<TranslationContextType>({
    lang: 'en',
    setLang: () => {},
    t: (key: string) => key,
});

export const useTranslationContext = () => useContext(TranslationContext);
