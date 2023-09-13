import Row from "./Row";

/*

 props = {
    content: [ ... ]
 }

 */
export default function Table( {content} ) {

    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
            <tbody>
                {
                    content.map( (value, index) => 
                            <Row key={index}
                                 name={value.name}
                                 age={value.age}
                                 num={value.num} /> )
                }
            </tbody>
        </table>
    );
}