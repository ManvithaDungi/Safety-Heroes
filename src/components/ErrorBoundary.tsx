import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cream to-orange-50 p-4">
          <div className="text-center">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-3xl font-nunito font-bold text-coral mb-2">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-4">Don't worry, let's try again!</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-coral text-white rounded-full font-nunito font-bold hover:bg-red-500 transition-all active:scale-95"
            >
              🔄 Refresh Page
            </button>
            {typeof window !== 'undefined' && !window.location.hostname.includes('github') && (
              <details className="mt-4 text-left bg-red-50 p-4 rounded-lg">
                <summary className="cursor-pointer font-bold text-red-700">Error Details</summary>
                <pre className="text-xs text-red-600 overflow-auto mt-2">{this.state.error?.message}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
