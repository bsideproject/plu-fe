import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const createBackground = () => {
  const el = document.createElement('div');

  el.style.zIndex = '1200';
  el.style.background = '#999';
  el.style.height = '100%';
  el.style.width = '100%';
  el.style.opacity = '0.7';

  return el;
};

const createDialog = () => {
  const el = document.createElement('div');
  el.style.display = 'flex';
  el.style.flexDirection = 'column';
  el.style.justifyContent = 'flex-end';
  el.style.position = 'relative';
  el.style.boxSizing = 'border-box';
  el.style.zIndex = '1201';
  el.style.background = 'white';

  return el;
};

const Dialog = (props: Props) => {
  const { children, open, onClose } = props;

  const backgroundRef = useRef(createBackground());
  const dialogRef = useRef(createDialog());
  const elementRef = useRef<HTMLElement>();
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      e.stopPropagation();

      onCloseRef.current();
      window.console.log('asd');
    };

    const background = backgroundRef.current;

    background.addEventListener('mousedown', onMouseDown);

    return () => {
      background.removeEventListener('mousedown', onMouseDown);
    };
  }, []);

  useEffect(() => {
    const modalElement = window.document.getElementById('modal');
    const background = backgroundRef.current;
    const dialog = dialogRef.current;

    if (modalElement) {
      modalElement.style.display = 'flex';
      modalElement.appendChild(background);
      modalElement.appendChild(dialog);
    }

    return () => {
      if (modalElement) {
        modalElement.style.display = 'none';
        modalElement.removeChild(background);
      }
    };
  }, [open]);

  window.console.log('open', open, elementRef.current);

  return ReactDOM.createPortal(children, dialogRef.current);
};

export default Dialog;
