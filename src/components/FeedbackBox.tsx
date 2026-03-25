import React, { useEffect } from 'react';

interface FeedbackBoxProps {
  message: string;
  type: 'success' | 'error' | 'neutral';
  onDismiss: () => void;
}

export const FeedbackBox: React.FC<FeedbackBoxProps> = ({ message, type, onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(onDismiss, 2500);
    return () => clearTimeout(timer);
  }, [onDismiss]);

  const bgStyles = 
    type === 'success' 
      ? 'bg-success-soft text-text-primary border-2 border-success-soft/50'
      : type === 'error' 
      ? 'bg-error-soft text-text-primary border-2 border-error-soft/50'
      : 'bg-highlight-soft text-text-primary border-2 border-highlight-soft/50';

  return (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 ${bgStyles} px-6 py-4 rounded-2xl shadow-soft-lg animate-fade-in max-w-sm text-center z-50`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <p className="font-quicksand font-semibold text-base leading-relaxed">
        {message}
      </p>
    </div>
  );
};
