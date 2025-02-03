'use client';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageLoader({ children }: { children: React.ReactNode }) {
    const { i18n } = useTranslation();
    const [isReady, setIsReady] = useState(i18n.isInitialized);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleInit = () => setIsReady(true);
        const handleLanguageChange = () => {
            setIsReady(false);
            setProgress(0);
            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(() => setIsReady(true), 300); // Pequeño retraso para un mejor efecto visual
                        return 100;
                    }
                    return prev + 10; // Incremento de la barra de carga
                });
            }, 100);
        };

        if (!i18n.isInitialized) {
            i18n.on('initialized', handleInit);
        } else {
            setIsReady(true);
        }

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('initialized', handleInit);
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    if (!isReady) {
        return (
            <div className="fixed inset-0 bg-[#191919] flex items-center justify-center z-50">
                <div className="flex flex-col items-center space-y-4 px-6">
                    <img className="h-28 w-auto animate-pulse" src="../logo.svg" alt="iweb logo" />
                    <div className="w-[90%] h-[6px] bg-[#222222] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#08E6F5] transition-all duration-300 ease-out animate-pulse"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
