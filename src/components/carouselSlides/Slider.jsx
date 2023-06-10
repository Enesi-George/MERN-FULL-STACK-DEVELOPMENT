import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Item} from './Item';
import {adsSlider} from '../../ads';




export const Slides=()=>
{
    return (
        <Carousel>
            {
                adsSlider.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}