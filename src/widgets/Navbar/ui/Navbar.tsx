import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/Modal';
import Button, { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string,

}

const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Boйти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                dsdasdakgnadlknfalsknf;jЫтпфлдоытдвоапирывапфпафвдыфаываотфывло
            </Modal>
        </div>
    );
};

export default Navbar;
