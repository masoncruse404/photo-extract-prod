//UTILS
import getBaseURL from "../../util/Constants";
import Cookies from "universal-cookie";
//CONSTANTS
const BASE_URL = getBaseURL()

async function getFolder(varActiveProfileId, varSetFiles){
    console.log('get Folder', varActiveProfileId)
    const resp = await fetch(BASE_URL + 'profile', {
        method: 'POST',
        body: JSON.stringify({varActiveProfileId}),
        headers: {'Content-Type':'application/json'},
    })

    const json = await resp.json()
    console.log('json', json.message)
    varSetFiles(json.message)
}

export default getFolder