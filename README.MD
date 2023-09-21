# RusGuard SOAP Client 
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://mit-license.org) 

> A SOAP client for RusGuard 3.3.1

This package lets you connect to RusGuard web services using SOAP.

- [Install](#install)
- [Usage:](#Usage)

## Install

```
  npm install soap
```


## Usage

in my case need disable ssl

````
import {CustomRusGuard} from "rusguard-soap-client";

//disable ssl warning
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const username = 'admin';
const password = 'password';
const url = 'http://192.168.1.1/LNetworkServer/LNetworkService.svc?wsdl';
````

### RusGuard LNetworkServer
```
const client: IRusGuardClient = await RusGuardClient(url, username, password);
client.AddAcsEmployee(
        {
            employeeGroupID: "groupId",
            data: {
                FirstName: "firstName", LastName: "lastName", SecondName: "secondName",
                CreationDateTime: new Date().toISOString(), EmployeeGroupID: "groupId"
            }
        }, (err: any, result: any) => {
            (err) ? console.log(err) : console.log(result);
        }
    );
```


### or Custom functions

```
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
```


Custom functions list
````
addEmployee,
updateEmployee,
removeEmployee,
assignKey,
getAssignedAcsKeyByKeyNumber,
setKeyIsLost
````