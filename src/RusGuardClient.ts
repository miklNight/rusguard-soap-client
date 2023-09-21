import {createClientAsync, security} from "soap";
import {IOptions} from "soap/lib/types";
import {IRusGuardClient} from "./types/IRusGuardClient";

export default async function RusGuardClient(url: string, username: string, password: string): Promise<IRusGuardClient> {
    console.log("Trying to connect to:", url)
    const _security = new security.WSSecurity(username, password);
    const options: IOptions = {
        wsdl_options: {
            Authorization: _security,
            rejectUnauthorized: false,
        }
    };

    try {
        const client = await createClientAsync(url, options);
        client.setSecurity(_security);
        return client;
    } catch (error) {
        console.log(error)
        throw new Error('Failed to initialize client');
    }
}