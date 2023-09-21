import CustomRusGuard from "./CustomRusGuard";

//disable ssl warning
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const username = 'Admin';
const password = 'Rusgard23';
const url = 'http://192.168.200.20/LNetworkServer/LNetworkService.svc?wsdl';

CustomRusGuard(url, username, password).then((skud) => {
    skud.getAssignedAcsKeyByKeyNumber("1234")
        .then((response) => {
            if (response["GetAssignedAcsKeyByKeyNumberResult"]["AcsEmployeeId"]) {
                console.log(response["GetAssignedAcsKeyByKeyNumberResult"]);
            } else {
                console.log("Not Found Key Create...")
            }
        })
        .catch((e) => console.log("ERR!", e))
});
