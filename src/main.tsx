import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { detectLanguage, getAvailableLanguages, loadTranslations } from './i18n';
import {TranslationProvider} from "./i18n/TranslationProvider.tsx"; // Ваши функции

const Index = () => {
    const [lang, setLang] = useState<string>('en');
    const [dict, setDict] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const availableLanguages = getAvailableLanguages();
        const userLang = detectLanguage(availableLanguages);
        setLang(userLang);
        loadTranslations(userLang).then((translations) => {
            setDict(translations);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Пока не загружены переводы, показываем лоадер
    }

    return (
        <TranslationProvider lang={lang} setLang={setLang} dict={dict}>
            <App />
        </TranslationProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);
