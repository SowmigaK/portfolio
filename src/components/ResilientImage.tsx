import React, { useState } from 'react';
import { BarChart3 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  eager?: boolean;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'Analytical Visual Preview',
  fallbackSubtitle = 'Data Analytics Artifact',
  eager = false
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 ${className}`}
        role="img"
        aria-label={alt}
      >
        <BarChart3 className="w-8 h-8 text-teal-400 mb-2 opacity-80" />
        <p className="text-sm font-display font-semibold text-slate-100">{fallbackTitle}</p>
        <p className="text-xs text-slate-400 mt-1">{fallbackSubtitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
