import { MOCK_EMPLOYEE } from './db';

export enum HttpVerbs {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
	PATCH = 'PATCH',
	OPTIONS = 'OPTIONS',
	HEAD = 'HEAD',
};

const { GET, PUT, POST, DELETE } = HttpVerbs;

let { tos, privacy, firstName, lastName } = MOCK_EMPLOYEE;

const compliance = () => new Response(JSON.stringify({ referenceId: '', status: 'pending' }));
const agreement = async (req: Request) => {
	switch (req.method) {
		case GET: {
			const ok = tos && privacy;
			const res = new Response(JSON.stringify({ ok }), { status: ok ? 200 : 403 });
			return res;
		}
		case PUT: {
			const data = await req.json();
			tos = data.tos;
			privacy = data.privacy;
			const ok = tos && privacy;
			const res = new Response(JSON.stringify({ ok }), { status: ok ? 200 : 403 });
			return res;
		}
		default: return new Response('', { status: 403 });
	}
};
const update = async (req: Request) => {
	switch (req.method) {
		case GET: {
			return new Response(JSON.stringify({ firstName, lastName }), { status: 200 });
		}
		case PUT: {
			const data = await req.json();
			firstName = data.firstName;
			lastName = data.lastName;
			return new Response(JSON.stringify({ firstName, lastName }), { status: 200 });
		}
		default: return new Response('', { status: 403 });
	}
};

export { agreement, compliance, update };
