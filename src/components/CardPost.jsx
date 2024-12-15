import style from './CardPost.module.css';


const CardPost = ({ image, title, content,  published, tags}) => {
    console.log(tags);
    function getTag() {
        return tags.map((tag, index) => {
            return (
                <li key={index}> <span className={`${style.tag} ${style[tag]}`} > {tag} </span> </li>
            )
        })
        
    }

    function getCard() {
        return (<div className={`${style.card} ${style.col}`}  >
        <img className={style.img} src={image || "/images/image.jpeg"} />
        <div className={style.card_body}>
            <h3 className={style.card_title}>{title}</h3>
            <p>{content}</p>
            <ul className={style.tags_list}> {getTag()}</ul>
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