import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const [startPoint, setStartPoint] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    if (startPoint && destination) {
      const url = `https://www.abhibus.com/bus_search/${startPoint}/7/${destination}/3/15-09-2024/O`;
      window.open(url, '_blank');
    } else {
      alert('Please fill in both fields');
    }
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main className="main-section">
      <div className="search-container">
        <h1>Bus Scheduler</h1>
        <div className="search-fields">
          <input
            type="text"
            placeholder="Start Point"
            value={startPoint}
            onChange={(e) => setStartPoint(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination Point"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* Discount Offers Section */}
      <div className="discount-offers-section mt-5">
        <h1>Discount Offers</h1>
        <Slider {...sliderSettings}>
          <div className="slider-item">
            <img src="https://tse3.mm.bing.net/th?id=OIP.RqKZiy6HDLw0Z1o4tQUNjgAAAA&pid=Api&P=0&h=180" alt="Offer 1" />
            <div className="slider-caption">
              <h5>Exclusive Discount</h5>
              <p>Get 200% flat discount on bus booking  by using the code BUS200</p>
            </div>
          </div>
          <div className="slider-item">
            <img src="https://tse2.mm.bing.net/th?id=OIP.oSbJCxQDIhjT6XW1180nJQHaHa&pid=Api&P=0&h=180" alt="Offer 2" />
            <div className="slider-caption">
              <h5>Comfortable Rides</h5>
              <p>Upto 10% off on using the coupon code</p>
            </div>
          </div>
          <div className="slider-item">
            <img src="https://tse4.mm.bing.net/th?id=OIP.ByTyYZrGykD0kkQ8LyWpQQAAAA&pid=Api&P=0&h=180" alt="Offer 3" />
            <div className="slider-caption">
              <h5>Customer Support</h5>
              <p>Get 5% off on bookings over 500/-</p>
            </div>
          </div>
          <div className="slider-item">
            <img src="https://tse4.mm.bing.net/th?id=OIP.tEI7XTjKino2hY3eF57NwQHaGN&pid=Api&P=0&h=180" alt="Offer 4" />
            <div className="slider-caption">
              <h5>Flexible Booking</h5>
              <p>Change or cancel your bookings easily with our flexible policies.</p>
            </div>
          </div>
          <div className="slider-item">
            <img src="https://tse2.mm.bing.net/th?id=OIP.FBOEmh05nhLNcYx9nAFewwAAAA&pid=Api&P=0&h=180" alt="Offer 5" />
            <div className="slider-caption">
              <h5>Seasonal Deals</h5>
              <p>Enjoy special offers and deals during the festive season.</p>
            </div>
          </div>
          <div className="slider-item">
            <img src="https://tse1.mm.bing.net/th?id=OIP.IEvSWV8RXtSwX5RPlqzXSQAAAA&pid=Api&P=0&h=180" alt="Offer 6" />
            <div className="slider-caption">
              <h5>Group Discounts</h5>
              <p>Book for a group and get additional discounts on bulk bookings.</p>
            </div>
          </div>
        </Slider>
      </div>

      {/* Why Choose AbhiBus Section */}
      <div className="why-choose-section mt-5">
        <h2>Why Choose WeBus for Bus Ticket Booking?</h2>
        <div className="cards-container">
          <div className="card">
            <h3>3,50,000+ Bus Routes</h3>
            <p>Offering unparalleled choices for your travel needs</p>
          </div>
          <div className="card">
            <h3>4000+ Bus Partners</h3>
            <p>Ranging from State RTCs to private partners</p>
          </div>
          <div className="card">
            <h3>Fastest Bus Booking</h3>
            <p>Swift and seamless bus ticket booking experience</p>
          </div>
          <div className="card">
            <h3>24/7 Customer Support</h3>
            <p>Available for all your bus booking needs</p>
          </div>
        </div>
      </div>

      {/* Bus Information Section */}
      <div className="bus-info-section mt-5">
        <div className="bus-info-box">
          <h2>Bus Ticket Booking Information</h2>
          <p>With WeBus, travellers can book bus tickets online at the lowest ticket fares. Travellers can choose their favorite bus for online bus booking. WeBus is the right place for reserving bus tickets as you will find a wide range of Private buses and SRTC (State Road Transport Corporation) buses available for online booking on WeBus.</p>
          <p>Below, you will find various types of buses available to book bus tickets on WeBus at the lowest fare for bus ticket booking:</p>
          <div className="bus-info-content">
            <ul className="bus-info-list">
              <li>AC Buses</li>
              <li>Non AC Buses</li>
              <li>Ordinary Buses</li>
              <li>Mini Buses</li>
            </ul>
            <ul className="bus-info-list">
              <li>Super Luxury (Non-AC Seater)</li>
              <li>Volvo AC Buses</li>
              <li>Sleeper AC Buses</li>
              <li>Sleeper Buses</li>
            </ul>
            <ul className="bus-info-list">
              <li>Deluxe Buses</li>
              <li>Sleeper Cum Seater AC</li>
              <li>Double Decker Buses</li>
              <li>Mercedes buses</li>
            </ul>
            <ul className="bus-info-list">
              <li>Non-Mercedes buses</li>
              <li>Electric Buses</li>
              <li>Express Buses</li>
            </ul>
          </div>
          <p>The bus ticket fare depends on factors such as type of bus, bus operator, bus routes distance between origin and destination cities, amenities offered by the bus operator, and bus operators may change ticket prices during festive seasons. Traveling by bus is the best option, cost-effective, and the most convenient travel option compared to other modes of transport.</p>
        </div>
      </div>




      <section class="abhi-assured-section">
  <div class="abhi-assured-box">
    <h2>Our Assured Program</h2>
    <p>WeBus customers can avail more benefits by opting for We Assured:</p>
    <div class="abhi-assured-content">
      <ul class="abhi-assured-list">
        <li>150% Refund if bus cancelled</li>
        <li>Up to 100% Refund if bus delayed</li>
        <li>Up to 100% Refund for bad quality service</li>
        <li>100% Refund for booking cancellation</li>
      </ul>
      <p>One of the unique features that WeBus offers is We Assured. This program guarantees a safe and secure bus travel experience for all passengers. WeBus customers can claim refunds for various reasons. For detailed information about eligibility and the refund policy, please check the Program here.</p>
      <p>When booking a bus ticket on WeBus, look for the "Assured Partner" label to avail the associated benefits with the We Assured program. This Assured Partner tag is visible on the bus search details page for WeBus Assured Bus Partners only. WeBus users should note that We Assured benefits are provided only by the WeBus Assured Bus Partners. WeBus Assured Partner program ensures a hassle-free and comfortable bus journey for all its passengers by encouraging top-rated bus operators to maintain high-quality standards.</p>
    </div>
  </div>
</section>

    </main>
  );
};

export default HomePage;
