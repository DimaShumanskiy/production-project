import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import PageError from 'widgets/PageError/ui/PageError';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <>{children}</>;
    }
}

// add translate class components
// import { withTranslation } from 'react-i18next';
// export default withTranslation()(ErrorBoundary);

export default ErrorBoundary;
