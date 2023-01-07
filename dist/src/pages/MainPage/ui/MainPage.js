import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
var MainPage = function () {
    var t = useTranslation('main').t;
    return (_jsx("div", { children: t('Главная страница') }));
};
export default MainPage;
