import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss'


export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  theme?: ThemeButton

}

const Button: FC<ButtonProps> = (props) => {
  const {className, children, theme, ...OtherProps} = props
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...OtherProps}
    >
      {children}
    </button>
  );
};

export default Button;
