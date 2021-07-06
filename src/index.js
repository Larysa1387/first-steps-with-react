import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


// const link = React.createElement("a", { href: "react.org" }, "Ссылочка");
// console.log('~ link', link);
// ReactDOM.render(link, document.getElementById("root"));

// const jsxLink = <a href="react.org">Ссылочка</a>;
// console.log('~ jsxLink', jsxLink);

// const painting = {
//   id: 'id-1',
//   url: "http://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/",
//   },
//   quantity: 10,
// };

// const template = (
//   <div>
//     <img src={painting.url}
//       alt={painting.title}
//       width="480" />
//     <h2>{painting.title}</h2>
//     <p>Цена: {painting.price} кредитов</p>
//     <button type="button">В корзину</button>
//   </div>
// );
// console.log('~ template', template);
// ReactDOM.render(template, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById("root")); //То же самое, но лучше юзать стриктмоуд
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
