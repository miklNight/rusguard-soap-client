import {Client} from 'soap';

export default function GetAssignedAcsKeyByKeyNumber(client: Client, keyNumber = '') {
    try {
        client.GetAssignedAcsKeyByKeyNumber({"keyNumber": keyNumber}, (err, result) => (err) ? new Error(err) : result);
    } catch (e) {
        console.log(e)
        return e;
    }
}