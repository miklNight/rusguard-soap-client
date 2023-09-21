import {CustomRusGuard} from "../src";

//disable ssl warning
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const username = 'admin';
const password = 'password';
const url = 'https://192.168.1.1/LNetworkServer/LNetworkService.svc?wsdl';

CustomRusGuard(url, username, password).then((skud) => {
    skud.getAssignedAcsKeyByKeyNumber("112233")
        .then((response) => {
            if (response["GetAssignedAcsKeyByKeyNumberResult"]["AcsEmployeeId"]) {
                console.log("Found key! EmployeeId #",response["GetAssignedAcsKeyByKeyNumberResult"]);
            } else {
                console.log("Not Found Key")
            }
        })
        .catch((e) => console.log("ERR!", e))
});
