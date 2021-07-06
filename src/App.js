// import logo from './logo.svg';
// import './App.css';
import React from "react";
import paintings from "./paintings.json";
import PaintingList from "./components/paintingList";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


const numbers = [1, 2, 3, 4, 5];
const colors = ["red", "green", "blue"];


const App = () => {
  return (
    <div>
      <h1>Главный компонент-контейнер приложения</h1>
      <PaintingList paintings={paintings}/>
      <ul>
        {numbers.map((number,index) =>
          <li key={index}>{number}</li>)} {/* 💩индекс лучше не юзать */}
      </ul>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
