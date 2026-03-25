// src/components/ErrorBoundary.js
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    // Update state so the next render will show the fallback UI
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });

    // You can also log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#F0F8F8',
            padding: '20px',
            fontFamily: 'Lexend, sans-serif'
          }}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              padding: '40px',
              maxWidth: '500px',
              boxShadow: 'rgba(93, 96, 115, 0.07) 0 10px 30px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>😔</div>
            <h1 style={{ color: '#5D6073', margin: '0 0 10px 0' }}>
              Oops! Something Went Wrong
            </h1>
            <p style={{ color: '#8E92A7', marginBottom: '30px', lineHeight: '1.6' }}>
              We encountered an unexpected error. Please try refreshing the page to continue
              your learning adventure!
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#6366F1',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: 'Lexend, sans-serif',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#4F46E5')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#6366F1')}
            >
              🔄 Refresh Page
            </button>

            {/* Optional: Show error details in development mode */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details
                style={{
                  marginTop: '30px',
                  textAlign: 'left',
                  backgroundColor: '#F0F8F8',
                  padding: '15px',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                <summary style={{ color: '#5D6073', fontWeight: '600' }}>
                  Error Details (Development Only)
                </summary>
                <pre
                  style={{
                    fontSize: '12px',
                    color: '#5D6073',
                    overflow: 'auto',
                    padding: '10px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '4px',
                    marginTop: '10px'
                  }}
                >
                  {this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
