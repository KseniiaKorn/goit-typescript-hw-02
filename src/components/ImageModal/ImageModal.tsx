import Modal from "react-modal";
import s from './ImageModal.module.css'
import {Image} from '../../types'

Modal.setAppElement("#root");

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Selected Image"
            className={s.modal}
            overlayClassName={s.overlay}
            shouldCloseOnOverlayClick={true}
        >
            <div className={s.modalContent}>
                <img
                    // onClick={onClose}
                    src={image.urls.regular}
                    alt={image.alt_description || "Selected"}
                    className={s.image}
                />
            </div>
        </Modal>
    );
};

export default ImageModal;