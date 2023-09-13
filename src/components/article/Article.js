export default function Article({aNum, aSubject, aWriter, aViewCount}) {

    return (
        <tr>
            <td>{aNum}</td>
            <td>{aSubject}</td>
            <td>{aWriter}</td>
            <td>{aViewCount}</td>
        </tr>
    );

}