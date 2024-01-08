function Person({ id, name, age, image }) {

    return (
        <li key={id} className="container person">
            <img className="img" src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <h4>{`${age} year`}</h4>
            </div>
            
        </li>   
    );
    
}

export default Person;