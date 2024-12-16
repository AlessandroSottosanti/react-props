import CardPost from "./CardPost";
import SectionTitle from "./SectionTitle";
import style from "./AppMain.module.css";
import posts from '../data/posts.js';
import Tags from './Tags';

const AppMain = () => {

    const allTags = posts.map(post => post.tags);


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

                    <section>                        
                            <Tags tags={allTags} />
                    </section>


                </div>
            </section>
        </>
    )
}

export default AppMain;