/* First, import the Amplify API category */
import { API } from 'aws-amplify';

/* Next, add the function code for calling the API to create a contact */
async function fetchContacts() {
  const contactData = await API.get('formapi', '/contact');
  console.log({ contactData });
}