import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards_contents'>
        <Link className='cards_contents_link' to={props.path}>
          <div className='cards__contents__info'>
            <h5 className='cards__contents__text'>{props.text}</h5>
            <h6 className='cards__contents__label'>{props.label}</h6>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
