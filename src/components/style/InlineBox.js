export default function InlineBox( { bgColor, letter } ) {

    const style = {
        padding: "10px",
        margin: "10px",
        backgroundColor: bgColor,
        color: "#333",
        display: "inline-block",
        fontSize: "50px",
        fontFamily: "맑은 고딕",
        textAlign: "center"
    }

    return (
        <div style={style}>{letter}</div>
    )

}