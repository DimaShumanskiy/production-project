import React, { useEffect, useState } from 'react';
import Button from 'widgets/Button/ui/Button';
import { useTranslation } from 'react-i18next';

/**
 component for test ErrorBoundary
 * */
const BagButton = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const onThrow = () => setError((prev) => !prev);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('throw error')}
        </Button>
    );
};

export default BagButton;
