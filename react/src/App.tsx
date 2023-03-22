import Message from "./Message";
import ListGroup from "./components/ListGroup";

// function App(){
//     const name = "John";
//     if (name === "John") {
//         return <h1>Hello {name}</h1>;
//     }
//     return <h1>Hello World</h1>;
// }

function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Items"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
