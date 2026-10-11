import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface LightboxModalProps {
  imageUrl: string | null;
  title: string;
  caption: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  imageUrl,
  title,
  caption,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && imageUrl) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageUrl, onClose]);

  if (!imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} full-screen image preview`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full space-y-3"
      >
        <div className="flex items-center justify-between gap-4 text-slate-100">
          <div>
            <h3 className="text-base font-display font-bold">{title}</h3>
            <p className="text-xs text-slate-400">{caption}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close full-screen preview"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
          <ResilientImage
            src={imageUrl}
            alt={title}
            eager={true}
            className="w-full max-h-[80vh] object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};
