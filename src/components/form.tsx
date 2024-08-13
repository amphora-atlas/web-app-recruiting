import { signal } from '@preact/signals';

const firstName = signal('');
const lastName = signal('');

fetch(process.env.API_URL + '/api/v1/employee/agreement')
	.then(response => response.json())
	.then(console.log);

export function TermsAndConditionsForm() {
	return (
		<form>
			Hi!
			I'm the form.
			You can find me at /src/components/form.tsx
		</form>
	);
}
