"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
//disable ssl warning
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const username = 'admin';
const password = 'password';
const url = 'https://192.168.111.1/LNetworkServer/LNetworkService.svc?wsdl';
(0, src_1.CustomRusGuard)(url, username, password).then((skud) => {
    skud.getAssignedAcsKeyByKeyNumber("112233")
        .then((response) => {
        if (response["GetAssignedAcsKeyByKeyNumberResult"]["AcsEmployeeId"]) {
            console.log("Found key! EmployeeId #", response["GetAssignedAcsKeyByKeyNumberResult"]);
        }
        else {
            console.log("Not Found Key");
        }
    })
        .catch((e) => console.log("ERR!", e));
});
//# sourceMappingURL=index.js.map