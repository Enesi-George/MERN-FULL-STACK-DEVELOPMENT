import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Item} from './Item';
import {images} from '../../ads';




export const Slides=()=>
{
    return (
        <Carousel sx={{borderRadius:"10px", boxShadow:'1px 1px 2px grey', paddingBottom:"10px"}}>
            {
                images.map( item => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

export default Slides;