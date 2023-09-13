import Person from "./Person";

export default function PersonList( {personList} ) {

    function itemClick(value, component) {
        console.log("값: " + value)
        console.log("컴포넌트: " + component)
    }

    return (
        <div>
            {
                personList.map( (value, index) => 
                       <Person key={index}
                               id={value.id}
                               name={value.name}
                               onClickEvent={itemClick} /> )
            }
        </div>
    );

}