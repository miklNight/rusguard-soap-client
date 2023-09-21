import {IRusGuardClient} from "./types/IRusGuardClient";
import RusGuardClient from "./RusGuardClient";

export default async function CustomRusGuard(url: string, username: string, password: string) {
    const client: IRusGuardClient = await RusGuardClient(url, username, password);

    const addEmployee = (groupId: string, firstName: string = '', lastName?: string, secondName?: string) => new Promise((resolve, reject) => {
        client.AddAcsEmployee({
                employeeGroupID: groupId,
                data: {
                    FirstName: firstName, LastName: lastName ?? "", SecondName: secondName ?? "",
                    CreationDateTime: new Date().toISOString(), EmployeeGroupID: groupId
                }
            }, (err: any, result: any) => (err) ? reject(new Error(err)) : resolve(result)
        );
    });

    const updateEmployee = (id: string, firstName: string = '', lastName?: string, secondName?: string) => new Promise((resolve, reject) => {
        client.SaveAcsEmployee({
                id: id,
                data: {
                    FirstName: firstName, LastName: lastName, SecondName: secondName,
                    ModificationDateTime: new Date().toISOString()
                }
            }, (err: any, result: any) => (err) ? reject(new Error(err)) : resolve(result)
        );
    });

    const removeEmployee = async (id: string) => new Promise((resolve, reject) => {
        client.RemoveAcsEmployee({id: id}, (err: any, result: any) => (err) ? reject(new Error(err)) : resolve(result));
    });

    const assignKey = (employeeId: string, keyNumber: string) => new Promise((resolve, reject) => {
        client.AssignAcsKeyForEmployee({
                employeeId: employeeId,
                indexNumber: 1,
                keyData: {
                    KeyNumber: keyNumber,
                    StartDate: new Date(Date.now() - (10 * 60 * 1000)).toISOString(),
                    EndDate: new Date(Date.now() + (60 * 60 * 24 * 365 * 1000)).toISOString(),
                    Description: '№' + keyNumber
                }
            }, (err: any, result: any) => (err) ? reject(new Error(err)) : resolve(result)
        );
    });

    const getAssignedAcsKeyByKeyNumber = (keyNumber: string = '') => new Promise((resolve, reject) => {
        client.GetAssignedAcsKeyByKeyNumber(
            {"keyNumber": keyNumber},
            (err: any, result: any) => (err) ? reject(new Error(err)) : resolve(result))
    });


    const setKeyIsLost = (keyNumber: string, employeeId: string, index: number = 1) => new Promise((resolve, reject) => {
        client.SetStatusOfAcsKeyAsLost({
                keyNumber: keyNumber,
                indexNumber: index,
                employeeID: employeeId
            }, (err: any, result: any) => (err) ? reject(new Error(err)) : resolve(result)
        );
    });

    return {
        addEmployee,
        updateEmployee,
        removeEmployee,
        assignKey,
        getAssignedAcsKeyByKeyNumber,
        setKeyIsLost
    };
}
