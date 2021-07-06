import React from "react";
import defaultImage from "./default-image.webp" //❣️Прописываем путь к дефолтной картинке
import PropTypes from 'prop-types';

const Painting = ({url, title, profileUrl, tag, price, quantity}) => (
  <div>
    <img src={url}
      alt={title}
      width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
    <button type="button">В корзину</button>
  </div>
);

Painting.defaultProps = {
  url: defaultImage,
}

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}

export default Painting;
