import s from './LoadMoreBtn.module.css'

interface LoadMoreBtnProps {
    onNextPage: () => void
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onNextPage }) => {
    return (
        <button className={s.button} onClick={onNextPage}>
            Load more
        </button>
    );
};

export default LoadMoreBtn;