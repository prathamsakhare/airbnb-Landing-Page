import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Cart from './Components/Cart'
import data from './data.js'


function App() {
  const cards = data.map(item => {
    return (
      <Cart
        key = {item.id}
        // this key property is used bcz when you dont use this there is a warning on the console that each item should have atleast 1 unique key prop so that it can be identified by that 
        // img={item.img}
        // name={item.name}
        // country = {item.country}
        // origin={item.origin}
        // post ={item.post}
        // email={item.email}
        // openSpots = {item.openSpots}
        item = {item}
        // HERE YOU CAN SEE THAT WITH INCREASE IN NUMBER OF PROPS, THE FILE IS GETTING MORE LINE SO FOR THAT YOU CAN INCLUDE PROP WHICH IS item = {item} SO IT WILL INCLUDE ALL THE SIMILAR PROPS FROM THE DATA FILE, BUT YOU NEED TO MENTION ID SEPARATELY BCZ IT HAS UNIQUE PROPERTY FOR EACH PROP
      />
    )
  })
  return (
    <div className="App">
      <Navbar/>
      <Main/>



      {/* <Cart
        img="./sundar.jfif"
        name="Sundar Pichai"
        country = "USA"
        post ="CEO, Google"
      /> */}
      {/* <Cart
        img="./sundar.jfif"
        name="Unknown"
        country = "Unknown"
        post ="CEO, Google"
      />
      <Cart
        img="./sundar.jfif"
        name="Unknown"
        country = "Unknown"
        post ="CEO, Google"
      />
      <Cart
        img="./sundar.jfif"
        name="Unknown"
        country = "Unknown"
        post ="CEO, Google"
      /> */}
      {/* instead of doing this for so many times we can make one separate file named as data.js and put our all the props under that file and import that file here */}
      {/* instead of filling the props everytime we can make a function for that and call it once so that it can print all the data according to the props */}

      {/* for calling the constant, write it inside the curly braces */}

      {cards}
      

      
      
    </div>
  );
}

export default App;
