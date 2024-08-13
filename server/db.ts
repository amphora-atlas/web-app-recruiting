import { dummy } from './mockData';

export const myOrgPk = dummy.string.uuid();
export const uuid = dummy.string.uuid;
const range = (ln = 100) => Array.from(Array(ln)).map((x, i) => i);

type EmployeeDetails = {
	email: string,
	firstName: string,
	lastName: string,
};
type EmployeeAgreement = {
	privacy: boolean,
	tos: boolean,
};
type EmployeeCompliance = {
	referenceId: string,
	status: 'pending' | 'verified' | 'rejected',
};

export type Employee = EmployeeDetails & EmployeeAgreement & EmployeeCompliance;

export const makeEmployee = (): Employee => ({
	email: dummy.internet.email(),
	firstName: dummy.person.firstName(),
	lastName: dummy.person.lastName(),
	privacy: true,
	tos: true,
	referenceId: dummy.string.uuid(),
	status: 'pending',
});

export const MOCK_EMPLOYEE: Employee = makeEmployee();
