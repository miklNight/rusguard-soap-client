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
Object.defineProperty(exports, "__esModule", { value: true });
const soap_1 = require("soap");
function RusGuardClient(url, username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Trying to connect to:", url);
        const _security = new soap_1.security.WSSecurity(username, password);
        const options = {
            wsdl_options: {
                Authorization: _security,
                rejectUnauthorized: false,
            }
        };
        try {
            const client = yield (0, soap_1.createClientAsync)(url, options);
            client.setSecurity(_security);
            return client;
        }
        catch (error) {
            console.log(error);
            throw new Error('Failed to initialize client');
        }
    });
}
exports.default = RusGuardClient;
//# sourceMappingURL=RusGuardClient.js.map