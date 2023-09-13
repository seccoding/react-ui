export default function Row( {name, age, num} ) {
    return (
        <tr>
            <td>{num}</td>
            <td>{name}</td>
            <td>{age}</td>
        </tr>
    );
}