import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useRef } from 'react';
import Modal from './modal';
import Button from './button';

type Props = {
  src: string;
  aspect: number;
  onCrop: (img: string) => void;
  onClose: VoidFunction;
  size: {
    width: number;
    height: number;
  };
};

const CropModal = ({ src, aspect, size, onCrop, onClose }: Props) => {
  const cropperRef = useRef<HTMLImageElement>(null);

  const crop = () => {
    const imageElement = cropperRef?.current as ReactCropperElement;
    const cropper = imageElement?.cropper;

    onCrop(cropper.getCroppedCanvas(size).toDataURL());
    onClose();
  };

  return (
    <Modal isOpen={Boolean(src)} handelClose={onClose}>
      <div className="rounded-lg overflow-hidden mb-4">
        <Cropper
          src={src}
          style={{ height: 400, width: 400 }}
          // Cropper.js options
          aspectRatio={aspect}
          guides={false}
          ref={cropperRef}
          cropBoxMovable={false}
          cropBoxResizable={false}
          toggleDragModeOnDblclick={false}
          center={false}
          viewMode={3}
          dragMode="move"
          autoCropArea={1}
        />
      </div>

      <Button onClick={crop}>トリミング</Button>
    </Modal>
  );
};

export default CropModal;
