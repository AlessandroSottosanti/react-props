import style from './Tags.module.css';
const Tags = ({ tags }) => {
    
// const uniqueTags = [...new Set(tags.flat())];

    const uniqueTags = tags.flat().filter((tag, index, selfArray) => selfArray.indexOf(tag) === index);
        
        console.log(uniqueTags);
    

    return (
        <>
            <ul className={style.tags_list}>
            <h2>Tags list: </h2>
                {uniqueTags.map((tag, index) => (
                     <li key={index}> <span className={`${style.tag} ${style[tag]}`} > {tag} </span> </li>
                ))}
            </ul>

        </>
    );
};

export default Tags;
