import { useEffect } from 'react';

interface ModalProps {
  image: string;
  title: string;
  context: string;
  onClose: () => void;
}

function Modal({ image, title, context, onClose }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick} style={{ display: 'flex' }}>
      <div className="modal-wrapper">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-image-container">
          <img id="modalImage" src={image} alt={title} />
        </div>
        <div className="modal-content-container">
          <h2 className="modal-title">{title}</h2>
          <div className="modal-context">{context}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
