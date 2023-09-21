import {IRusGuardClient} from "../types/IRusGuardClient";

export default function addEmployee(client: IRusGuardClient, groupId, firstName = 'Гость', lastName = 'Гость', secondName = '') {
     client.AddAcsEmployee({
        employeeGroupID: groupId,
        data: {
            FirstName: firstName,
            LastName: lastName,
            SecondName: secondName,
            CreationDateTime: new Date().toISOString(),
            EmployeeGroupID: groupId
        }
    }, (err, result) => (err) ? new Error(err) : result);
}