import './Card.css';

//Some kind of Container
//props.children is a special property that allows us to access the content between the opening and closing tags of a component
// const classes = 'card ' + props.className; //This is a dynamic way of adding classes to a component
function Card(props) {
    const classes = 'card ' + props.className;
    return (<div className={classes}>{props.children}</div>);
}

export default Card;