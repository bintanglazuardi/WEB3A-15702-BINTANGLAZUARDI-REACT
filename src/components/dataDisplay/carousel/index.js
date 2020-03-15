import React from 'react';
import './style.css';

import { Carousel } from 'antd';

const CarouselAnt = () => {
    return(
        <Carousel autoplay style={{height:'360px',width:'640px', margin:'auto'}}>
            <div class="carousel">
                <img class="image" src="https://hdwallpaperfx.com/wp-content/uploads/2017/06/Animated-Kingdom-Mountains-Sunrise.jpg" />
            </div>
            <div class="carousel">
                <img class="image" src="https://free4kwallpapers.com/uploads/originals/2015/08/13/anime-wallpaper-1920x1080.jpg" />
            </div>
            <div class="carousel">
                <img class="image" src="https://i.pinimg.com/originals/42/a2/a8/42a2a8751b63b25984ee0caac8fe962c.jpg" />
            </div>
            <div class="carousel">
                <img class="image" src="https://wallpapercave.com/wp/wp4082746.jpg" />
            </div>
            
        </Carousel>
    )
}

export default CarouselAnt;