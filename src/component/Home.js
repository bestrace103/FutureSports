import React from 'react'

function Home(props) {
    const showCourtBookingForm =()=> {
        const date = prompt("Enter the booking date (e.g., DD/MM/YY):");
        const time = prompt("Enter the length of time (e.g., 1 hour):");
        const players = prompt("Enter the number of players:");
    
        if (date && time && players) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nPlayers: ${players}`);
        } else {
            alert("Invalid input or booking canceled.");
        }
    }

    const showCoachBookingForm =()=> {
        const date = prompt("Enter the booking date (e.g., DD/MM/YY):");
        const time = prompt("Enter the length of time (e.g., 1 hour):");
        const skill = prompt("Indicate Skill Level (A)Advanced / (B) Beginner:");
    
        // Validate input (you can add more validation as needed)
        if (date && time && skill) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nPlayers: ${skill}`);
        } else {
            // Handle invalid input or cancellation
            alert("Invalid input or booking canceled.");
        }
    }

    const showVenueBookingForm=()=> {
        const date = prompt("Enter the booking date (e.g., DD/MM/YY):");
        const time = prompt("Enter the length of time (e.g., 1 hour):");
        const players = prompt("Enter the number of guests:");
    
        if (date && time && players) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nPlayers: ${players}`);
        } else {
            alert("Invalid input or booking canceled.");
        }
    }

    const showEquipmentBookingForm =()=> {
        const date = prompt("Enter the booking date (e.g., DD/MM/YY):");
        const time = prompt("Enter the length of time (e.g., 1 hour):");
        const rackets = prompt("Enter the number of rackets:");
        const balls = prompt("Enter the number of ball time (4 balls / tin):");
    
        if (date && time && rackets && balls) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nRackets: ${balls}\nRackets: ${balls}`);
        } else {
            alert("Invalid input or booking canceled.");
        }
    }

    return (
        <section className="pt-24 px-5 flex color-gray" style={{flexDirection: "row", gap: 8}}>
            <div style={{width: "40%"}}>
                {props.name && <div>{props.name}</div>}
                Reminder: Club Memberships are due next week<br />
                Join us for a fun social gathering Sat 25th Nov<br />
                <img src="images/mainpage.jpg" alt="Tennis Activity" />
            </div>
            <div style={{width: "60%"}}>
                Bookings<br />
                Book a court, coaching session, or the venue.<br />
                <div className="flex">
                    <img src="images/bookings-court.jpg" alt="Court Hire" onClick={showCourtBookingForm} />
                    <img src="images/bookings-coach.jpg" alt="Coach Bookings" onClick={showCoachBookingForm} />
                    <img src="images/bookings-venue.jpg" alt="Venue Bookings" onClick={showVenueBookingForm} />
                    <img src="images/bookings-equipment.jpg" alt="Equipment" onClick={showEquipmentBookingForm} />
                </div>
                <br />
                Connect Zone<br />
                Connect with others with a similar interest, from night tennis to finding a hitting partner.<br />
                <img src="images/connectzone.jpg" alt="Connect Zone" />
            </div>
        </section>
    )
}

export default Home