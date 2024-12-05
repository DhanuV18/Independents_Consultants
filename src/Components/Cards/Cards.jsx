import React from 'react'
import './Cards.css'
import image1 from '../../assets/item1.jpg'
import image2 from '../../assets/item2.jpg'
import image3 from '../../assets/item3.jpg'
import image4 from '../../assets/item4.png'
import image5 from '../../assets/item5.jpg'
import image6 from '../../assets/item6.jpg'
import image7 from '../../assets/item7.jpg'


import Service from '../../NewPages/Services/Service.jsx'

const Cards = () => {
  return (
    <section className='block block--dark block--skewed-left' id='services'>
        <div className="container">

        <div className='service__header '>
            {/* <h2 className='service__heading'>Our Services</h2> */}
            <h4 className="small__heading2">Keep moving with confident</h4>
            {/* <h4 className="small__headingsmall__heading">Keep move ahead <span className='confidence'>with Confidence</span></h4> */}
            <h2 className="sub__heading">Solve Problems <span className='technology'>With Technology</span></h2>
            {/* <p className='service__paragraph'>
            Welcome to Independent Consultants, a leading provider of offshore IT support and Revenue Cycle Management (RCM) services. 
            At Independent Consultants, we specialize in delivering high-quality, cost-effective solutions tailored to meet the dynamic 
            needs of our clients. Our team of experts combines technical proficiency with industry knowledge to ensure seamless IT 
            support and optimize revenue cycles for businesses across various sectors. By leveraging cutting-edge technology and best 
            practices, we help our clients enhance operational efficiency, reduce costs, and drive growth.
            Partner with us to experience unparalleled service and innovative solutions that empower your business to thrive in a 
            competitive landscape.
            </p> */}
        </div> 
    
    <div className='cards'>
        <div class="card">
            <img src={image1} alt="image 1" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Managed IT Services</h3>
                <button className="btn card__button">Click here</button>

            </div>
        </div>
        <div className="card">
            <img src={image2} alt="image 2" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Cloud Services</h3>
                {/* <p className="card__button">Click here</p> */}
                <button className="btn card__button">Click here</button>
            </div>
        </div>
        <div className="card">
            <img src={image3} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Cyber Security</h3>
                <button className="btn card__button">Click here</button>

            </div>
        </div>
        {/* <div className="card">
            <img src={image4} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Web Development</h3>
                <button className="btn card__button">Click here</button>

            </div>
        </div>
        <div className="card">
            <img src={image5} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>365 Management</h3>
                <button className="btn card__button">Click here</button>
            </div>
        </div>

        <div className="card">
            <img src={image6} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>AV Products</h3>
                <button className="btn card__button">Click here</button>
            </div>
        </div>

        <div className="card">
            <img src={image7} alt="image 3" className='image' />
            <div className='image_card-image'>
                <h3 className='card__text'>Offshore Team</h3>
                <button className="btn card__button">Click here</button>
            </div>
        </div> */}


    </div>
            <h3 className="explore">
                <a href={Service} target='_blank' className='explore'>Explore More</a>
            </h3>
        </div>
</section>
  )
}

export default Cards
