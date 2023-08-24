import React, {useState} from "react"; // import useState Hook to use
import Item from "./Item";

function ShoppingList({ items }) {

const [selectedCategory, setSelectedCatergory] = useState("All") // create variable and setter function to change the category
// set variauble state to All starting off

function handleChange(event) { // create a handleChange function that listens to our change event and gets that value
  // set that value into our setter funtion to keep track of the selected input value
  setSelectedCatergory(event.target.value)
}

const filteredItems = items.filter((item) => { // we need to filter through our items list in order to know which 
  //selectedCategory matches and return it if its === to the item.category
  if (selectedCategory === "All") {
    return true
  } else {
    return item.category === selectedCategory
  }
})



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}> 
        {/* call onChange event bc it handles changes to input values, and call a handle change function */}
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => ( //instead of just .map through items we want this to .map through the filteredItems
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
