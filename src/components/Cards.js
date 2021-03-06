import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() { 
  return ( 
    <div className = 'cards'>
        <h1>Check out these EPIC destinations</h1>
        <div className = 'cards__container'>
            <div className = 'cards__wrapper'>
                <ul className = 'cards__items'>
                    <CardItem
                      src = 'images/img-9.jpg'
                      text = 'Explore the hidden water fall deep inside the Amazon Jungle'
                      label = 'Adventure'
                      path = '/services'
                    />
                    <CardItem
                      src = 'images/img-2.jpg'
                      text = 'Travel through the Islands of Bali in a private cruise'
                      label = 'Luxury'
                      path = '/services'
                    />
                </ul>
                <ul className = 'cards__items'>
                    <CardItem
                      src = 'images/img-3.jpg'
                      text = 'Set sail in the Antlantic ocean visiting Uncharted waters'
                      label = 'Mystery'
                      path = '/services'
                    />
                    <CardItem
                      src = 'images/img-4.jpg'
                      text = 'Watch live matches on one of the best stadiums at Himalayas'
                      label = 'Pitch View'
                      path = '/services'
                    />
                    <CardItem
                      src = 'images/img-8.jpg'
                      text = 'Ride on a camel through the Sahara desert on a tour'
                      label = 'Boost'
                      path = '/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards