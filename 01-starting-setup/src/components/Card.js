import "./Card.css";

function Card(props) {
    //makes sure that we get the styling from the other className variables
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}
//children is the content between opening and closing components so here it is what is described in ExpenseItem.js
export default Card;