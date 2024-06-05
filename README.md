# PACT CONTRACT TESTING JS

Pact is a contract testing tool used for testing interactions between service consumers and service providers. It ensures that both parties adhere to a predefined contract, helping to prevent integration issues and ensuring compatibility.

### What is a Pact Contract?

A Pact contract is a formalized agreement between a service consumer and a service provider. It defines the interactions between these two parties, including the requests the consumer will make and the responses the provider will return. This contract is usually in the form of a JSON file that both parties can use to test against independently.

### Key Concepts

1. **Consumer and Provider:**
    - **Consumer:** The client or service that makes requests to another service.
    - **Provider:** The service that responds to the consumer's requests.
2. **Interaction:**
    - An interaction in Pact represents a single request and its expected response. It includes details such as the HTTP method, request path, headers, query parameters, and the expected response body and status.
3. **Pact File:**
    - The Pact file is a JSON document generated by the consumer tests. It contains all the interactions that the consumer expects from the provider.
4. **Verification:**
    - The provider uses the Pact file to verify that it can fulfill all the expected interactions. If the provider can respond correctly to all the requests defined in the Pact file, the contract is considered verified.

### Example Workflow

1. **Define Interactions (Consumer):**
    - The consumer defines the expected interactions and generates a Pact file during its tests.
2. **Share the Pact File:**
    - The Pact file is shared with the provider, often through a Pact Broker or directly.
3. **Provider Verification:**
    - The provider uses the Pact file to verify that it can handle all the defined interactions.
4. **Continuous Integration:**
    - Both the consumer and provider integrate the contract testing into their CI/CD pipelines to ensure compatibility as code changes.

### Benefits of Using Pact

- **Improved Confidence:** Ensures that both consumer and provider can integrate without issues.
- **Early Detection of Issues:** Helps detect integration issues early in the development process.
- **Automated Testing:** Fits well into CI/CD pipelines, allowing automated verification of interactions.
- **Independent Development:** Allows consumer and provider to develop independently as long as they adhere to the contract.

### SETUP AND EXECUTION

```bash
cd frontend
npm install
npm start //starts a frontend server TERMINAL 1
npm test //create a contact TERMINAL 2

copy contract file from frontend/pacts/ and paste to backend folder in backend/pacts/

cd backend
npm install
node index.js //starts a backend server TERMINAL 1
node verifyPacts.js //verify a contract TERMINAL 2
```

Links:

https://pact.io
