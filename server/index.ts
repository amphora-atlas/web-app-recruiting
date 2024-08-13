import { type Serve } from 'bun';
import * as Employee from './employee';
import * as Organization from './organization';

function setHeaders(res: Response) {
	res.headers.set('Access-Control-Allow-Origin', process.env.FRONT_END_URL);
	res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.headers.set('Access-Control-Allow-Credentials', 'true');
	res.headers.set('Access-Control-Allow-Headers', 'Authorization, Content-Type, x-trace-id');
	res.headers.set('Content-Type', 'application/json');
}

async function handleRoute(expr, cases, req) {
	const fn = cases[expr] ?? cases.default;
	const res = await fn(req);
	setHeaders(res);
	console.log(res);
	return res;
}

export default {
	port: 8080,
	async fetch(req) {
		const url = new URL(req.url);
		console.log(req);

		// Preflight request handling
		if (req.method === 'OPTIONS') {
			const res = new Response(null, { status: 204 });
			setHeaders(res);
			return res;
		}

		return handleRoute(url.pathname, {
			'/api/v1/organization/compliance': Organization.compliance,
			'/api/v1/employee/compliance': Employee.compliance,
			'/api/v1/employee/agreement': Employee.agreement,
			'/api/v1/employee': Employee.update,
			default: () => new Response('Not Found', { status: 404 }),
		}, req);
	},
} satisfies Serve;
