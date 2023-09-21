export default function CustomRusGuard(url: string, username: string, password: string): Promise<{
    addEmployee: (groupId: string, firstName?: string, lastName?: string, secondName?: string) => Promise<unknown>;
    updateEmployee: (id: string, firstName?: string, lastName?: string, secondName?: string) => Promise<unknown>;
    removeEmployee: (id: string) => Promise<unknown>;
    assignKey: (employeeId: string, keyNumber: string) => Promise<unknown>;
    getAssignedAcsKeyByKeyNumber: (keyNumber?: string) => Promise<unknown>;
    setKeyIsLost: (keyNumber: string, employeeId: string, index?: number) => Promise<unknown>;
}>;
