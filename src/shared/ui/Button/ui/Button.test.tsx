import { render, screen } from '@testing-library/react';
import Button, { ButtonTheme } from 'shared/ui/Button/ui/Button';

describe('Button', () => {
    test('render text in button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('render theme  button', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
