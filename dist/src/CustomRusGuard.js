"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RusGuardClient_1 = __importDefault(require("./RusGuardClient"));
function CustomRusGuard(url, username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield (0, RusGuardClient_1.default)(url, username, password);
        const addEmployee = (groupId, firstName = '', lastName, secondName) => new Promise((resolve, reject) => {
            client.AddAcsEmployee({
                employeeGroupID: groupId,
                data: {
                    FirstName: firstName, LastName: lastName !== null && lastName !== void 0 ? lastName : "", SecondName: secondName !== null && secondName !== void 0 ? secondName : "",
                    CreationDateTime: new Date().toISOString(), EmployeeGroupID: groupId
                }
            }, (err, result) => (err) ? reject(new Error(err)) : resolve(result));
        });
        const updateEmployee = (id, firstName = '', lastName, secondName) => new Promise((resolve, reject) => {
            client.SaveAcsEmployee({
                id: id,
                data: {
                    FirstName: firstName, LastName: lastName, SecondName: secondName,
                    ModificationDateTime: new Date().toISOString()
                }
            }, (err, result) => (err) ? reject(new Error(err)) : resolve(result));
        });
        const removeEmployee = (id) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                client.RemoveAcsEmployee({ id: id }, (err, result) => (err) ? reject(new Error(err)) : resolve(result));
            });
        });
        const assignKey = (employeeId, keyNumber) => new Promise((resolve, reject) => {
            client.AssignAcsKeyForEmployee({
                employeeId: employeeId,
                indexNumber: 1,
                keyData: {
                    KeyNumber: keyNumber,
                    StartDate: new Date(Date.now() - (10 * 60 * 1000)).toISOString(),
                    EndDate: new Date(Date.now() + (60 * 60 * 24 * 365 * 1000)).toISOString(),
                    Description: '№' + keyNumber
                }
            }, (err, result) => (err) ? reject(new Error(err)) : resolve(result));
        });
        const getAssignedAcsKeyByKeyNumber = (keyNumber = '') => new Promise((resolve, reject) => {
            client.GetAssignedAcsKeyByKeyNumber({ "keyNumber": keyNumber }, (err, result) => (err) ? reject(new Error(err)) : resolve(result));
        });
        const setKeyIsLost = (keyNumber, employeeId, index = 1) => new Promise((resolve, reject) => {
            client.SetStatusOfAcsKeyAsLost({
                keyNumber: keyNumber,
                indexNumber: index,
                employeeID: employeeId
            }, (err, result) => (err) ? reject(new Error(err)) : resolve(result));
        });
        return {
            addEmployee,
            updateEmployee,
            removeEmployee,
            assignKey,
            getAssignedAcsKeyByKeyNumber,
            setKeyIsLost
        };
    });
}
exports.default = CustomRusGuard;
//# sourceMappingURL=CustomRusGuard.js.map