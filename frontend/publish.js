const path = require('path');
const pact = require('@pact-foundation/pact-node');

const pactBrokerUrl = 'http://localhost:9292'; // Replace with your Pact Broker URL
//const pactBrokerUsername = 'pact_broker_user'; // Replace with your Pact Broker username
//const pactBrokerPassword = 'pact_broker_password'; // Replace with your Pact Broker password
const consumerVersion = '1.0.2'; // Replace with your consumer version
const providerVersion = '1.0.0'; // Replace with your provider version
const pactsDirectory = path.resolve(__dirname, 'pacts'); // Directory where pact files are located

const opts = {
  pactFilesOrDirs: [pactsDirectory],
  pactBroker: pactBrokerUrl,
  consumerVersion,
  providerVersion,
  //pactBrokerUsername,
  //pactBrokerPassword,
  publishVerificationResult: true,
};

pact.publishPacts(opts)
  .then(() => {
    console.log('Pact files successfully published to Pact Broker.');
  })
  .catch((error) => {
    console.error('Error publishing pact files:', error);
    process.exit(1);
  });
