import { useContext } from 'react';
import { TranslationContext } from './TranslationContext';

export const useTranslation = () => {
    return useContext(TranslationContext);
};
