// backend/verifyPacts.js
const path = require('path');
const { Verifier } = require('@pact-foundation/pact');
const { spawn } = require('child_process');

const pactBrokerUrl = 'http://localhost:9292'; // Update with your Pact Broker URL
const providerBaseUrl = 'http://localhost:3001'; // Update with your provider's base URL
const providerVersion = '1.0.0'; // Update with your provider's version
const providerVersionBranch = '1.0.0'; 

//const pactBrokerUsername = 'pact_broker_user'; // Update with your Pact Broker username
//const pactBrokerPassword = 'pact_broker_password'; // Update with your Pact Broker password

const opts = {
  providerBaseUrl,
  pactBrokerUrl,
  providerVersionBranch,
  //pactBrokerUsername,
 // pactBrokerPassword,
 stateHandlers: {
    'i have a message': () => {
      // Set up your provider state here, e.g., mock a message in the system
      console.log('Setting up state: "i have a message"');
      // Example: mock message setup
      // mockMessageService.createMessage('Hello World');
    }
  },
  providerVersion,
  logLevel: 'INFO',
  provider: 'backend', // Update with your provider name
  publishVerificationResult: true,
  enablePending: true,
  pactUrls: [`${pactBrokerUrl}/pacts/provider/backend/consumer/frontend/version/${providerVersion}`] // Update with your provider and consumer details
};

new Verifier(opts).verifyProvider().then(output => {
  console.log('Pact verification complete!');
  console.log(output);
}).catch(error => {
  console.error('Pact verification failed:', error);
  process.exit(1);
});



/*
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
*/