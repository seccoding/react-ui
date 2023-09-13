export default function Person( {id, name, onClickEvent} ) {

    return (
        <div>
            <h1 onClick={ (e) => onClickEvent( e.target.innerText, Person) }>{name}</h1>
            <p onClick={ (e) => onClickEvent( e.target.innerText, Person) }>{id}</p>
        </div>
    );

}
