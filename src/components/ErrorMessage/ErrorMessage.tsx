import s from './ErrorMessage.module.css'


const ErrorMessage: React.FC = () => {
    return (
        <p className={s.error}>
            Something went wrong. Please try again!
        </p>
    );
};

export default ErrorMessage;