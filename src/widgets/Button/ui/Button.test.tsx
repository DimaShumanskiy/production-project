import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from 'widgets/Button/ui/Button';

describe('Button', () => {
    test('render text in button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('render theme  button', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
