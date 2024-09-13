import "./greeting.css"
import style from "./greeting.module.css"

const Greeting = (props)=>{
    const {text="hi",greeting="Hi good evening"}=props
    return(
        <div className={style.card}>
            <h4>{greeting}</h4>
            <h5>{text}</h5>
        </div>
    );
};

export default Greeting