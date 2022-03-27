
import './Card.css'

function Card(props){
    const classes = 'card' + props.className; //озунун жана пропс аркылуу келген className дерди сактайт
    return <div className={classes}>{props.children}</div> //Card тын чиндеги компонеттер Card тын баласы болуп калат 
}

export default Card;