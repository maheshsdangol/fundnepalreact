/* Import the Amplify API category */
import { API } from 'aws-amplify';

/* Next, create a function for calling the REST API to create a new contact */
async function createContact() {
  const data = {
    body: {
      name: 'Chris',
      phone: '+1-555-555-5555'
    }
  };
  const apiData = await API.post('formapi', '/contact', data);
  console.log({ apiData });
}