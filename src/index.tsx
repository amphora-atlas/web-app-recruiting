import { render } from 'preact';
import { TermsAndConditionsForm } from './components/form';

export function App() {
	return (
		<div class="text--center">
			<h1>Welcome to the Agora Technical Interview</h1>
			<h4>Getting Started:</h4>
			<p>
				Have a look at the README.md file to get yourself set up with bun.js. <br />
				Start your frontend with `bun run dev`. <br />
				Start your mock server with `bun run server`. <br />
				Navigate to localhost:5173 to see the app. <br />
			</p>

			<h4>Instructions</h4>
			<div>
				<p>
					Your challenge is to recreate the Terms & Conditions form from app.agora.finance.
				</p>

				<p>
					The form has 4 fields:
					<ol>
						<li>1. A text input for first name,</li>
						<li>2. A text input for last name,</li>
						<li>3. A checkbox for accepting the Terms & Conditions</li>
						<li>4. A checkbox for accepting the Privacy Policy</li>
					</ol>
				</p>

				<p>
					When submitted, the form must make two requests:
					<ol>
						<li>
							1. a PUT request to /api/v1/employee/agreement with a JSON payload like so:
							`{'{'} tos: boolean, privacy: boolean {'}'}`
						</li>
						<li>
							2. a PUT request to /api/v1/employee with a JSON payload like so:
							`{'{'} firstName: string, lastName: string {'}'}`
						</li>
					</ol>
				</p>

				<p>
					Display a success panel if the response status is 200 and an error panel otherwise.
				</p>

				<p>
					Please spend no more than 90 minutes on this!
				</p>

				<p>
					When you're done, commit your work to a private github repo and send a link to careers@agora.finance, along with a brief description of how you would enhance this feature and what further steps are needed for your code to be 100% production-ready.
				</p>

				<p>
					Good luck!
				</p>
			</div>

			<TermsAndConditionsForm />
		</div>
	);
}

render(<App />, document.getElementById('app'));
