import { IRusGuardClient } from "./types/IRusGuardClient";
export default function RusGuardClient(url: string, username: string, password: string): Promise<IRusGuardClient>;
