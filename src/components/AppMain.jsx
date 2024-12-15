import CardPost from "./CardPost";
import SectionTitle from "./SectionTitle";
import style from "./AppMain.module.css";
import posts from '../data/posts.js';


const AppMain = () => {
    return (
        <>
            <section>
                <SectionTitle />



                <div className={style.main}>
                    <section className={`${style.cards_container} ${style.row}`}>

                        {
                            posts.map((post) => (
                                <CardPost
                                    key={post.id}
                                    image={post.image}
                                    title={post.title}
                                    content={post.content}
                                    published={post.published}
                                    tags={post.tags}
                                />

                            ))
                        }
                    </section>

                </div>
            </section>
        </>
    )
}

export default AppMain;