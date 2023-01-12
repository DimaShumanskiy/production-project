import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';
import Button from '../../../Button/ui/Button';

interface SidebarProps {
  className?: string,

}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >

            {/* <Button */}
            {/*    data-testid="sidebar-toggle" */}
            {/*    onClick={onToggle} */}
            {/* > */}
            {/*    toggle */}
            {/* </Button> */}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
