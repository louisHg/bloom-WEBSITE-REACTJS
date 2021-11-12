import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__tags'>
        <Link className='cards__tags_link' to={props.path}>
          <div className='cars__tags__info'>
              <div className='bambino2'>
                <h5 className='cars__tags__text'>{props.text}</h5>
              </div>
              <div className='buttons++'>
                <p href='' className='button_tags'>{props.button}</p>
              </div>
              <div className='buttons++'>
                <p href='' className='button_tags'>{props.button1}</p>
              </div>
              <div className='buttons++'>
                <p href='/products' className='button_tags'>{props.button2}</p>
              </div>
            <h6 className='cars__tags__label'>{props.label}</h6>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;


