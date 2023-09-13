import Card from "./components/card/Card";

function App() {

  const cardData = [
    {name: "장민창", age: 39},
    {name: "장보늬", age: 29, profileImgSrc: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png"},
    {name: "남현욱", age: 29, profileImgSrc: "https://cdn-icons-png.flaticon.com/512/4086/4086679.png"},
    {name: "김효진", age: 29, profileImgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZ5KR-07QkQTBiUJ2UEaEZHOJkCWyeMqdrw&usqp=CAU"}
  ]

  return (
    <div>
      {
        // 프로퍼티로 전달하는 데이터는 
        // 문자열은 "" 로 전달하고
        // 그 외의 모든 데이터는 {} 에 작성한다.
      }
      {
        cardData.map( (value, index) => 
            <Card key={index}
                  name={value.name} 
                  age={value.age}
                  profileImgSrc={value.profileImgSrc} /> )
      }
    </div>
  );
}

export default App;
