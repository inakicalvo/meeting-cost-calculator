import React, { useState } from 'react'


const PersonForm = ({addParticipant}) => {

    const [participantInfo, setParticipantInfo] = useState({
        name: '',
        time: '',
        rate: ''
    })

    const handleChange = (e) => {
        setParticipantInfo({...participantInfo, [e.target.name]: [e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addParticipant(participantInfo);
        setParticipantInfo({name: '', time: '', rate: ''})
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="personName">Name</label>
            <input type="text" name="name" id="personName" placeholder='John Doe' value={participantInfo.name} onChange={handleChange} required/>
        </div>
        <div>
            <label htmlFor="timeInMeeting">Hours in meeting</label>
            <input type="number" step="0.01" min="0.01" name="time" placeholder='1.5' value={participantInfo.time} id="timeInMeeting" onChange={handleChange} required/>
        </div>
        <div>
            <label htmlFor="hourlyRate">Hourly rate</label>
            <input type="number" step="0.01" min="0.01" name="rate" placeholder='2' value={participantInfo.rate} id="hourlyRate" onChange={handleChange} required/>
        </div>
        <input type="submit" value="Add person to meeting" />
    </form>
  )
}

export default PersonForm