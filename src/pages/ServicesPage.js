import React, { useState } from 'react';
import './ServicesPage.css'; // Make sure to include your CSS file

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="services-page">
      <section className="tabs-section">
        <div className="tabs-container">
          <div className="tabs">
            <div
              className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab1')}
            >
              Bus Booking
            </div>
            <div
              className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab2')}
            >
              Real Time Bus Information
            </div>
            <div
              className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab3')}
            >
              Ticket Management

            </div>
            <div
              className={`tab ${activeTab === 'tab4' ? 'active' : ''}`}
              onClick={() => handleTabClick('tab4')}
            >
              Payment Options

            </div>
          </div>
          <div className="tabs-content">
            <div
              className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`}
              id="tab1"
            >
              <h2>Bus booking</h2>
              <p><b>Search and Book</b>: Allow users to search for available buses between specified origin and destination points on selected dates and book tickets.
                <br/><b>Seat Selection</b>: Provide options to choose specific seats on the bus. <br />
<b>Multiple Bus Operators</b>: Offer options from various bus operators, including private and state-run buses.</p>
            </div>
            <div
              className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`}
              id="tab2"
            >
              <h2>Real Time Bus Information</h2>
              <p>
                <b>Live Bus Tracking:</b> Show the real-time location of buses on a map.<br/>
             <b> Estimated Arrival/Departure Times:</b> Provide updated times for bus arrivals and departures.</p>
            </div>
            <div
              className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`}
              id="tab3"
            >
              <h2>Ticket Management</h2>
              <p><b>Booking Confirmation: </b>Send confirmation messages via email, SMS, or WhatsApp.<br/>
<b>Cancellation and Refund:</b> Allow users to cancel their bookings and process refunds based on the cancellation policy.<br/>
<b>Modify Bookings:</b> Provide options to change the travel date, time, or other details.</p>
            </div>
            <div
              className={`tab-content ${activeTab === 'tab4' ? 'active' : ''}`}
              id="tab4"
            >
              <h2>Payment options</h2>
              <p>
                <b>Multiple Payment Methods: </b>Support various payment methods such as credit/debit cards, net banking, and digital wallets.<br/>
              <b>Secure Transactions:</b> Ensure that payment transactions are secure and encrypted.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
