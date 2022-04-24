import './Card.css';

// The value of this children prop will always be the content between the opening and cloding tags of our custom component (<Cards>) 

const Card = (props) => {
    // This will add every css style we have added on our elements inside Card component
    const classes = 'card ' + props.className;

    return(
        <div className={classes}>{props.children}</div>
    );
}

export default Card;