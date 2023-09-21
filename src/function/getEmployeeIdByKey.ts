import {Client} from 'soap';

export default function getAssignedAcsKeyByKeyNumber(client: Client, key = '') {
    try {
        client.GetEmployeeIdByKey({"keyNumber": key}, (err, result) => (err) ? new Error(err) : result);
    } catch (e) {
        console.log(e)
        return e;
    }
}