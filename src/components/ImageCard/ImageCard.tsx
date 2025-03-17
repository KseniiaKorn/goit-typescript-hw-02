import s from './ImageCard.module.css'
import {Image} from '../../types'

interface ImageCardProps {
    image: Image;
    onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image,
    image: {
        urls: { small },
        alt_description,
    },
    onClick,
}) => {
    return (
        <div>
            <img className={s.image} src={small} alt={alt_description} onClick={()=>onClick(image)}/>
        </div>
    );
};

export default ImageCard;