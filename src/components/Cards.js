import React from 'react';
import CardItem from './CardItem';
import CardContents from './Cardscontents';
import CardTags from './Cardstag';
import './Cards.css';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
  integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
  crossorigin="anonymous"
/>

function Cards() {
  return (
  <div className="row">

    <div className="col">

      <div className="leftside">
        <CardItem
          src='images/bloom.png'
          text='Article 1- Rapport demande / expérience'
          label='Blog'
          path='/services'
          date='Mon Sep 27 2021 11:12:21'
          description='A'
          author='A'
        />
        <CardItem
          src='images/bloom.png'
          text='A'
          label='A'
          path='/services'
          date='Mon Sep 13 2021 19:59:45 '
          description='A'
          author='A'
        />
        <CardItem
          src='images/bloom.png'
          text='Hello World'
          label='alternance'
          path='/services'
          date='Mon Sep 13 2021 19:37:10'
          description='Hello main description'
          author='5 MIN READ'
        />
      </div>

    </div>


    <div className="col">

      <div className='rightside'>
        <div>
          <h4>ARTICLES LES PLUS POPULAIRE</h4>
        </div>
        <CardContents
          text='Article 1- Rapport demande / expérience'
          label='BLOG | A'
          path='/services'
        />
        <CardContents
          text='A'
          label='A | A'
          path='/services'
        />
        <CardContents
          text='Hello World'
          label='ALTERNANCE | 5 MIN READ'
          path='/services'
        />
        <CardTags
          text='Tags'
          path='/services'
          button='Blog'
          button1='A'
          button2='alternance'
        />
      </div>

    </div>

  </div>
    
  );
}

export default Cards;
 

              