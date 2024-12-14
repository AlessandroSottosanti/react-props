
import style from './CardPost.module.css';

const CardPost = () => {
    return (
        <>
            <section className={style.cards_container}>
                <div className={style.card}>
                    <img className={style.img} src="/images/image.jpeg" />
                    <div className={style.card_body}>
                        <h3 className={style.card_title}>Titolo del Post</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam laboriosam consequatur nobis optio nesciunt dolore eius in non, veniam maxime cum at dolores quia enim, voluptatum soluta officia cumque deserunt.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam corporis vitae maxime dolor, adipisci excepturi eum! Sed, mollitia nesciunt. Odio deleniti, aliquid sed ad fuga ducimus id nihil consequuntur! Quod.</p>
                        <button>LEGGI DI PIU'</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardPost;