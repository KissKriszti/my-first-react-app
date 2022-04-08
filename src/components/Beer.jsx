function Beer({info, randomNum}) {

    const {title, sub, text} = info;

    return (
        <div className="beer">
            <h2>{title}</h2>
            <h4>{sub}</h4>
            <h5>{text}</h5>
            <button onClick={() => console.log(`clicked`)}>Click me</button>
        </div>
    )
};

export default Beer;