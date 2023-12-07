import React from 'react'

const Home = (props) => {
    const valString = (val) => {
        return (isNaN(val));
    }

    const valNum = (val) => {
        return (!isNaN(val));
    }

    const valDate = (val) => {
        const arr = val.split("/");
        const isNumber = Boolean(Number(arr[0])) && Boolean(Number(arr[1])) && Boolean(Number(arr[2]));
        // return new Date(val).valueOf();
        return isNumber;
    }

    const valTime = (val) => {
        const val1 = Boolean(Number(val.split(" ")[0]));
        const val2 = (val.split(" ")[1] === "hour");
        return (val1 && val2);
    }

    const valSkill = (val) => {
        return ((val === "A") || (val === "B"))
    }
    
    const showCourtBookingForm =()=> {
        let date = "", time = "", players = "";
        let valid1 = false, valid2 = false, valid3 = false;
        while(!valid1) {
            date = prompt("Enter the booking date (e.g., DD/MM/YY):");
            valid1 = (valDate(date));
        }
        while(!valid2) {
            time = prompt("Enter the length of time (e.g., 1 hour):");
            valid2 = (valNum(time));
        }
        while(!valid3) {
            players = prompt("Enter the number of players:");
            valid3 = (valNum(players));
        }
    
        if (date && time && players) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nPlayers: ${players}`);
        } else {
            alert("Invalid input or booking canceled.");
        }
    }

    const showCoachBookingForm =()=> {
        let date = "", time = "", skill = "";
        let valid1 = false, valid2 = false, valid3 = false;

        while(!valid1) {
            date = prompt("Enter the booking date (e.g., DD/MM/YY):");
            valid1 = (valDate(date));
        }
        while(!valid2) {
            time = prompt("Enter the length of time (e.g., 1 hour):");
            valid2 = (valNum(time));
        }
        while(!valid3) {
            skill = prompt("Indicate Skill Level (A)Advanced / (B) Beginner:");
            valid3 = (valSkill(skill));
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
        let valid1 = false, valid2 = false, valid3 = false;

        while(!valid1) {
            date = prompt("Enter the booking date (e.g., DD/MM/YY):");
            valid1 = (valDate(date));
        }
        while(!valid2) {
            time = prompt("Enter the length of time (e.g., 1 hour):");
            valid2 = (valNum(time));
        }
        while(!valid3) {
            players = prompt("Enter the number of guests:");
            valid3 = (valNum(players));
        }

    
        if (date && time && players) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nPlayers: ${players}`);
        } else {
            alert("Invalid input or booking canceled.");
        }
    }

    const showEquipmentBookingForm =()=> {
        let date = "", time = "", rackets = "", balls = "";
        let valid1 = false, valid2 = false, valid3 = false, valid4 = false;

        while(!valid1) {
            date = prompt("Enter the booking date (e.g., DD/MM/YY):");
            valid1 = (valDate(date));
        }
        while(!valid2) {
            time = prompt("Enter the length of time (e.g., 1 hour):");
            valid2 = (valNum(time));
        }
        while(!valid3) {
            rackets = prompt("Enter the number of rackets:");
            valid3 = (valNum(rackets));
        }
        while(!valid4) {
            balls = prompt("Enter the number of ball time (4 balls / tin):");
            valid4 = (valNum(balls));
        }
    
        if (date && time && rackets && balls) {
            alert(`Booking details:\nDate: ${date}\nTime: ${time}\nRackets: ${balls}\nRackets: ${balls}`);
        } else {
            alert("Invalid input or booking canceled.");
        }
    }

    return (
        <section className="pt-24 px-5 flex color-gray small-column small-font-15" style={{flexDirection: "row", gap: 8}}>
            <div className="small-width-100 big-align-center" style={{width: "40%"}}>
                {props.name && <div>{props.name}</div>}
                Reminder: Club Memberships are due next week<br />
                Join us for a fun social gathering Sat 25th Nov<br />
                <img className="big-margin-auto" src="images/mainpage.jpg" alt="Tennis Activity" />
            </div>
            <div className="small-width-100 big-align-center" style={{width: "60%"}}>
                Bookings<br />
                Book a court, coaching session, or the venue.<br />
                <div className="flex small-img big-content-center">
                    <img src="images/bookings-court.jpg" alt="Court Hire" onClick={showCourtBookingForm} />
                    <img src="images/bookings-coach.jpg" alt="Coach Bookings" onClick={showCoachBookingForm} />
                    <img src="images/bookings-venue.jpg" alt="Venue Bookings" onClick={showVenueBookingForm} />
                    <img src="images/bookings-equipment.jpg" alt="Equipment" onClick={showEquipmentBookingForm} />
                </div>
                <br />
                Connect Zone<br />
                Connect with others with a similar interest, from night tennis to finding a hitting partner.<br />
                <img className="big-margin-auto" src="images/connectzone.jpg" alt="Connect Zone" />
            </div>
        </section>
    )
}

export default Home