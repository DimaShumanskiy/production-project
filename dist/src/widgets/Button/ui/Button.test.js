import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import Button from 'widgets/Button/ui/Button';
describe('Button', function () {
    test('test', function () {
        render(_jsx(Button, { children: "TEST" }));
        expect(screen.getByText('TEST')).toBeIn;
    });
});
