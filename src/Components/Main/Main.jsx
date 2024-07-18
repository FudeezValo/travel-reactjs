import React, {useEffect} from "react"

import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the WORLD, This place is known for its luxurious stays and adventurous activities. '
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Maldives',
        location: 'Indian Ocean',
        grade: 'BEACH RELAX',
        fees: '$500',
        description: 'Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, It is known for its crystal-clear waters, pristine beaches, and luxury resorts.'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Hawaii',
        location: 'USA',
        grade: 'BEACH ADVENTURE',
        fees: '$800',
        description: 'Hawaii is a state located in the Pacific Ocean, It is known for its beautiful beaches, active volcanoes, and lush rainforests.'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Paris',
        location: 'France',
        grade: 'CULTURAL ROMANCE',
        fees: '$600',
        description: 'Paris, the capital of France, is a global center for art, fashion, and cuisine, It is known for its iconic landmarks like the Eiffel Tower and Notre-Dame Cathedral.'
    },

    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Rome',
        location: 'Italy',
        grade: 'CULTURAL HISTORY',
        fees: '$550',
        description: 'Rome, the capital of Italy, is a city steeped in history and architecture, It is known for its ancient ruins like the Colosseum and Roman Forum.'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Cancun',
        location: 'Mexico',
        grade: 'BEACH PARTY',
        fees: '$450',
        description: 'Cancun is a popular tourist destination in Mexico, It is known for its beautiful beaches, vibrant nightlife, and ancient Mayan ruins.'
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Barcelona',
        location: 'Spain',
        grade: 'CULTURAL BEACH',
        fees: '$650',
        description: 'Barcelona, the capital of Catalonia, is a city known for its modernist architecture, beaches, and vibrant cultural scene.'
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Cairo',
        location: 'Egypt',
        grade: 'CULTURAL HISTORY',
        fees: '$400',
        description: 'Cairo, the capital of Egypt, is a city steeped in history and culture, It is known for its ancient pyramids, museums, and bustling markets.'
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Sydney',
        location: 'Australia',
        grade: 'CULTURAL ADVENTURE',
        fees: '$750',
        description: 'Sydney, the capital of New South Wales, is a city known for its iconic landmarks like the Sydney Opera House and Harbour Bridge, as well as its beautiful beaches and vibrant cultural scene.'
    },
]


const Main = () => {
// creating react hook to add a scroll animation....
    useEffect(()=>{
        Aos.init({duration: 2000 })
    }, [])    
    
    
    
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right"
                className="title">
                    Most visited destination
                </h3>
            </div>

        <div className="secContent grid">
            {/* array method map()/ .map() array to fetch each destination*/}
            {
                Data.map(({id, imgSrc, destTitle, location, grade, fees, description })=>{
                    return(
                    <div key={id}
                        data-aos="fade-up"
                        className="singleDestination">
                            {/* single ID from map array */}
                        
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>

                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                <HiOutlineLocationMarker className="icon"/>
                                <span className="name">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <button className="btn flex">
                                DETAILS <HiOutlineClipboardCheck className="icon" />
                            </button>
                        </div>
                    </div>
                    )
                })
            }




            </div>

        </section>
    )
}

export default Main