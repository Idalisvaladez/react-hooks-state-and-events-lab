import React, {useState} from "react"; // import useState hook
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState(false) 
  // create a variable to represent current value and a setter function to dynamically change it

  // create that handler function and utilize our setter function setIsDarkMode to change the state of isDarkMode
  // since we want it to toggle, add a bang operator do have the variable set to the opposite of what isDarkMode current value
  function handleMode() {
  setIsDarkMode(!isDarkMode) 
}

  return (
    <div className={isDarkMode ? "App dark" : "App light"} > 
    {/* update the actual browser to represent the Ligh and Dark version. Referencing the class name of our css 
    call our state variable, if isDarkMode true then we want the app dark else light app */}
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button> 
        {/* call a handler function that will take care of toggle between light and dark mode */}
        {/* now update the text in the button by using the state variable value. If true we want it to say
        dark mode else light mode */}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
