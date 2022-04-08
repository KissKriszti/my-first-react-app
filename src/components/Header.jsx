function Header({data}) {
    
    const {logo} = data;

    return (
        <div className="header">
            <h1>{logo}</h1>
        </div>
    )
};

export default Header;