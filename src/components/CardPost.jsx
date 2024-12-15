import style from './CardPost.module.css';


const CardPost = ({ image, title, content,  published}) => {


    function getCard() {
        return (<div className={`${style.card} ${style.col}`}  >
        <img className={style.img} src={image || "/images/image.jpeg"} />
        <div className={style.card_body}>
            <h3 className={style.card_title}>{title}</h3>
            <p>{content}</p>
        </div>
    </div>)
    }

    return (
        <>
            {published && getCard()}
        </>
    )
}

export default CardPost;