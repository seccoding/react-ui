import PersonList from "./PersonList";

export default function PersonApp() {

    const personList = [
        {id: 1, name: "Kim"},
        {id: 2, name: "Lee"},
        {id: 3, name: "Park"},
        {id: 4, name: "Choi"}
    ];

    return (
        <div>
            <PersonList personList={personList} />
        </div>
    );

}