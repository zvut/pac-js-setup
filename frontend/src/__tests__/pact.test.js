// frontend/src/__tests__/pact.test.js
const { Pact } = require('@pact-foundation/pact');
const axios = require('axios');
const path = require('path');

const provider = new Pact({
    consumer: 'frontend',
    provider: 'backend',
    port: 1234,
    log: path.resolve(process.cwd(), 'logs', 'pact.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: 'INFO',
    spec: 2,
});

describe('Pact with Backend', () => {
    beforeAll(() => provider.setup());
    afterAll(() => provider.finalize());

    describe('when a request to GET /api/message is made', () => {
        beforeAll(() => {
            return provider.addInteraction({
                state: 'i have a message',
                uponReceiving: 'a request for a message',
                withRequest: {
                    method: 'GET',
                    path: '/api/message',
                    headers: {
                        'Accept': 'application/json',
                    },
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: {
                        message: 'Hello from the backend!',
                    },
                },
            });
        });

        it('should return the correct message', async () => {
            const response = await axios.get('http://localhost:1234/api/message', {
                headers: { 'Accept': 'application/json' }
            });
            expect(response.status).toBe(200);
            expect(response.data).toEqual({ message: 'Hello from the backend!' });
        });

        afterEach(() => provider.verify());
    });
});
