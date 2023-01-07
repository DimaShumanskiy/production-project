import { lazy } from 'react';
export var AboutPageAsync = lazy(function () { return new Promise(function (resolve) {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(function () { return resolve(import('./AboutPage')); }, 1500);
}); });
