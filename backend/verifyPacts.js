// backend/verifyPacts.js
const { Verifier } = require('@pact-foundation/pact');
const path = require('path');

const opts = {
    provider: 'backend',
    providerBaseUrl: 'http://localhost:3001',
    pactUrls: [path.resolve(process.cwd(), 'pacts/frontend-backend.json')],
};

new Verifier(opts).verifyProvider().then(output => {
    console.log('Pact Verification Complete!');
    console.log(output);
}).catch(error => {
    console.error('Pact verification failed:', error);
});
