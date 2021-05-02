import { createContext, useState } from 'react';
import languagesObj from '../language/languages.js';

export const LanguageContext = createContext('en');

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const languages = { ...languagesObj };

    return (
        <LanguageContext.Provider value={{ languages, language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};