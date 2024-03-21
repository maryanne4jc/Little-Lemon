import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);

    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e)

    }
    return (
        <header>
            <section>
            <form onSubmit={handleSubmit}>
            <fieldset>
            {/*for date selection */}
            <div>
                <label htmlFor='book-date'>Choose Time:</label>
                <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} 
                type='date' required/>
            </div>

            {/*For times selection */}

            <div>
            <label htmlFor='book-time'>Choose Time:</label>
            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                <option value="">Select a Time</option>
                {
                    props.availableTimes.availableTimes.map(availableTimes=>
                         {return <option key={availableTimes}>{availableTimes}</option>})
                }

            </select>

            </div>

            {/*For Number of Guests Selection */}
            <div>
                <label htmlFor='book-guests'>Number of Guests:</label>
                <input id='book-guests' min='1' max='10' value={guests} 
                onChange={(e) => setGuests(e.target.value)}/>
            </div>

            {/*For Occasion Selection */}
            <div>
                <label htmlFor='book-occasion'>Occasion:</label>
                <select id='book-occasion' key={occasion} 
                value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>

            {/*Submit Button */}
            <div className='btnReceive'>
                <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
            </div>
        </fieldset>
    </form>
</section>
        </header>
    );
};

export default BookingForm;