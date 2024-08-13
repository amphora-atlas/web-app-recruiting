// https://bun.sh/docs/test/dom
// Bun runs this file to expose a document object to the testing suite
import { GlobalRegistrator } from '@happy-dom/global-registrator';
import HTTP, { request as HTTPRequest } from 'http';
import HTTPS, { request as HTTPSRequest } from 'https';

type RequestParams = Parameters<typeof HTTPRequest>;

HTTP.request = function httpRequest(...args) {
	return Object.assign(
		HTTPRequest(...(args as RequestParams)),
		{ end() { } },
	);
};

HTTPS.request = function httpsRequest(...args) {
	return Object.assign(
		HTTPSRequest(...(args as RequestParams)),
		{ end() { } },
	);
};

GlobalRegistrator.register();
