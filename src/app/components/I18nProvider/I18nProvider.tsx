'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export default function I18nProvider({ children }: { children: ReactNode }) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (i18n.isInitialized) setIsReady(true);
        else i18n.on('initialized', () => setIsReady(true));
    }, []);

    if (!isReady) return null;
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}


