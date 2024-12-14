import CardPost from "./CardPost";
import SectionTitle from "./SectionTitle";
import style from "./AppMain.module.css";

const AppMain = () => {
    return (
        <>
            <section className={style.main}>
                <SectionTitle />
                <CardPost />
            </section>
        </>
    )
}

export default AppMain;