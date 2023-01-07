import React from 'react';
import { useTranslation } from 'react-i18next';
import { BagButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
