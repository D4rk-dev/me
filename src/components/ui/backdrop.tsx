import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Backdrop: React.FC<
  PropsWithChildren<{ open: boolean; className?: string }>
> = ({ open, children, className = '' }) => {
  if (open && !document.getElementById('presentation')) {
    document.body
      .appendChild(document.createElement('div'))
      .setAttribute('id', 'presentation');
  }
  useEffect(() => {
    if (!open) {
      //Remove div
      document.getElementById('presentation')?.remove();
    }
  }, [open]);

  return open
    ? createPortal(
        <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 ${className}`}>
          {children}
        </div>,
        document.getElementById('presentation') || document.body
      )
    : null;
};

export default Backdrop;
