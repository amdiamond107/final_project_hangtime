import {useState} from 'react'

function UpdateCourtForm({updateCourt, setIdToUpdate, updatePatchFormData, courts}){

    const [updateFormSubmitted, setUpdateFormSubmitted] = useState(false)

    return (
        <div className="court-form">
            <h2>Update Court Form</h2>
            {updateFormSubmitted ? <h1>Court Updated!</h1> :
            <form onSubmit={event => {
                updateCourt(event)
                setUpdateFormSubmitted(updateFormSubmitted => !updateFormSubmitted)
            }}>
                <label>Choose a Court: </label>
                <select onChange={(event) => {
                    setIdToUpdate(event.target.value)
                }} name="id">
                {courts.map(court => {
                    return <option key={court.id} value={court.id}>{`${court.id}: ${court.title} (${court.court_type}) at ${court.location} `}</option>
                })}
                </select>
                <input onChange={updatePatchFormData} type="text" name="name" placeholder="Court name"/>
                <input onChange={updatePatchFormData} type="text" name="image" placeholder="Image URL"/>
                <input type="submit" value="Update Court"/>
            </form>}
        </div>
    )
}

export default UpdateCourtForm