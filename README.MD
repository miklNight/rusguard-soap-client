## Node.JS SOAP Client RusGuard Soft + Custom functions
https://www.rgsec.ru/rusguard-soft

this package use https://www.npmjs.com/package/soap to connect LNetworkServer

## Usage

in my case need disable ssl
````
//disable ssl warning
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const username = 'Admin';
const password = 'Password';
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