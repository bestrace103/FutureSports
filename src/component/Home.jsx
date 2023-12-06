import React from 'react'

const Home = (props) => {
    const valString = (val) => {
        return (isNaN(val));
    }

    const valNum = (val) => {
        return (!isNaN(val));
    }

    const valDate = (val) => {
        return new Date(val).valueOf();
    }

    const valTime = (val) => {
        let val1 = Number(val.split(" ")[0]);
        let val2 = (val.split(" ")[1] === "hour");
        return (val1 && val2);
    }

    const valSkill = (val) => {
        return ((val === "A") || (val === "B"))
    }
    
    const showCourtBookingForm =()=> {
        let date = "", time = "", players = "";
        let valid = false;
        while(!valid) {
            date = prompt("Enter the booking date (e.g., DD/MM/YY):");
            valid = (valDate(date));
        }
        while(valid) {
            time = prompt("Enter the length of time (e.g., 1 hour):");
            valid = (valTime(time));
        }
        while(!valid) {
            players = prompt("Enter the number of players:");
            valid = (valNum(players));
        }
    
        if (date && time && players) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nPlayers: ${players}`);
        } else {
            alert("Invalid input or booking canceled.");
        }
    }

    const showCoachBookingForm =()=> {
        let date = "", time = "", skill = "";
        let valid = false;

        while(!valid) {
            date = prompt("Enter the booking date (e.g., DD/MM/YY):");
            valid = (valDate(date));
        }
        while(valid) {
            time = prompt("Enter the length of time (e.g., 1 hour):");
            valid = (valTime(time));
        }
        while(valid) {
            skill = prompt("Indicate Skill Level (A)Advanced / (B) Beginner:");
            valid = (valSkill(skill));
        }

        // Validate input (you can add more validation as needed)
        if (date && time && skill) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nPlayers: ${skill}`);
        } else {
            // Handle invalid input or cancellation
            alert("Invalid input or booking canceled.");
        }
    }

    const showVenueBookingForm=()=> {
        let date = "", time = "", players = "";
        let valid = false;

        while(!valid) {
            date = prompt("Enter the booking date (e.g., DD/MM/YY):");
            valid = (valDate(date));
        }
        while(valid) {
            time = prompt("Enter the length of time (e.g., 1 hour):");
            valid = (valTime(time));
        }
        while(!valid) {
            players = prompt("Enter the number of guests:");
            valid = (valNum(players));
        }

    
        if (date && time && players) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nPlayers: ${players}`);
        } else {
            alert("Invalid input or booking canceled.");
        }
    }

    const showEquipmentBookingForm =()=> {
        let date = "", time = "", rackets = "", balls = "";
        let valid = false;

        while(!valid) {
            date = prompt("Enter the booking date (e.g., DD/MM/YY):");
            valid = (valDate(date));
        }
        while(valid) {
            time = prompt("Enter the length of time (e.g., 1 hour):");
            valid = (valTime(time));
        }
        while(!valid) {
            rackets = prompt("Enter the number of rackets:");
            valid = (valNum(rackets));
        }
        while(!valid) {
            balls = prompt("Enter the number of ball time (4 balls / tin):");
            valid = (valNum(balls));
        }
    
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