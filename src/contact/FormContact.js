/* Import the Amplify API category */
import { API } from 'aws-amplify';
import React from "react"

/* Next, create a function for calling the REST API to create a new contact */
async function createContact() {
    const data = {
        body: {
            name: formState.name,
            phone: formState.phone
        }
    };
    const apiData = await API.post('formapi', '/contact', data);
    console.log({ apiData });
}

/* Create some type of local state to hold the form input. This is pseudocode and will differ based on your JavaScript framework. */
const formState = { phone: '', name: '' };

/* Create a function to update the form state. This is pseudocode and will differ based on your JavaScript framework.  */
function updateFormState(key, value) {
    formState[key] = value;
}
const FormContact = () => {  //function Header() {
    return (
        <div className="container formdiv" >
            <div class="form-group">
                <label for="Name">Name</label>
                <input className="form-control" placeholder="Name" onChange={e => updateFormState('name', e.target.value)} />
            </div>
            <div class="form-group">
                <label for="Phone">Phone</label>
                <input className="form-control" placeholder="Phone" onChange={e => updateFormState('phone', e.target.value)} />

            </div>

            <button className="btn btn-success" onClick={createContact}>Create New Contact</button>
        </div>
    )
}


export default FormContact