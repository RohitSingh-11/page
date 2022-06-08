import React from 'react';
import ReactElasticCarousel from 'react-elastic-carousel';
import nasa from '../components/images/nasa.jpeg';
import sf from '../components/images/sf.png';
import mit from '../components/images/mit.png';
import parent from '../components/images/parent.jpeg';
import idea from '../components/images/idea.png';

const Slider = () => {
  return (
    <div className='slider-wrapper'>
        <ReactElasticCarousel>
        <div id='1' className='slider-content-wrapper'>
            <div className='first-slider-text'>Brought to You By a Team Form</div>
            <div className='first-slider-image-wrapper'>
                <img src={mit} className='mit' alt='mit' ></img>
                <img src={nasa} className='nasa' alt='nasa' ></img>
                <img src={sf} className='sf' alt='sf' ></img>
            </div>
        </div>
        <div id='2' className='slider-content-wrapper'>
            <div className='common-slider-icon'>
                <img src={parent} className='parent' alt='parent' ></img>
            </div>
            <div className='common-slider-text'>Trusted by 1M+ Parents over 25+ Countries for Specific Teaching Expertise</div>
        </div>
        <div id='3' className='slider-content-wrapper'>
            <div  className='common-slider-icon'>
                <img src={idea} className='idea' alt='idea' ></img>
            </div>
            <div  className='common-slider-text'>Kids who code do better in school 85% improvement in Math/Logic</div>
        </div>
        </ReactElasticCarousel>
    </div>
  )
}

export default Slider;