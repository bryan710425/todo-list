
const CLIENT_ID = '710326532788-kvi7j5balqadgiq3t9fsuk9rq4rn8dgv.apps.googleusercontent.com'
const API_KEY = 'AIzaSyCC8FWVrglkM3um_pvGqyeCV8skqp3Kyv8'
// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events'
// create the 'options' object
const apiConfig = {
  apiKey: API_KEY,
  clientId: CLIENT_ID,
  discoveryDocs: DISCOVERY_DOCS,
  scope: SCOPES
  // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
}

export { apiConfig }
