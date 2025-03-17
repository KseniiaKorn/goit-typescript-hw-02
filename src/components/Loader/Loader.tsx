import { ColorRing } from "react-loader-spinner";
import s from './Loader.module.css'

const Loader = () => {
  return (
    <div className={s.loader}>
      <ColorRing
        wrapperClass={s.colorRing}
        height="80"
        width="80"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>
    </div>
  );
};

export default Loader;