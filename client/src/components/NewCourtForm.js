import {useState} from 'react'

function NewCourtForm({addCourt, updatePostFormData}){

    const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        <div className="court-form">
            <h2>Add New Court Form</h2>
            {formSubmitted ? <h1>Thanks for adding a new court!</h1> :
            <form onSubmit={event => {
                addCourt(event)
                setFormSubmitted(formSubmitted => !formSubmitted)
            }}>
                <input onChange={updatePostFormData} type="text" name="name" placeholder="Court name" required/>
                <input onChange={updatePostFormData} type="text" name="image" placeholder="Image URL" required/>
                <input type="submit" value="Add Court"/>
            </form>}
        </div>
    )
}

export default NewCourtForm