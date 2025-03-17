import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'
import {Image} from '../../types'

interface ImageGalleryProps {
    gallery: Image[];
    onSelect: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ gallery, onSelect }) => {
    return (
        <ul className={s.gallery}>
            {gallery.map(image => (
                <li key={image.id}>
                    <ImageCard image={image} onClick={onSelect} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;