const https = require('https');

/**
 * Makes an HTTPS request.
 *
 * @param {Object} params - Parameters for the HTTP request.
 * @param {string} params.url - The URL to which the request is made.
 * @param {string} params.body - The request body data.
 * @param {string} params.method - The HTTP method (e.g., 'GET', 'POST').
 * @param {Object} params.headers - The headers for the HTTP request.
 * @returns {Promise<Object>} - A Promise that resolves to the parsed response or rejects with an error message.
 */
const HttpRequest = async ({
    url,
    body,
    method,
    headers
}) => {
    try {
        const result = await new Promise(async (resolve, reject) => {
            const request = await https.request(url, {
                method,
                headers
            }, (response) => {
                let responseBody = '';
                response.on('data', (buffer) => {
                    responseBody += buffer;
                });
                response.on('end', () => {
                    try {
                        resolve(JSON.parse(responseBody));
                    } catch (error) {
                        reject(`Error parsing response: ${error.message}`);
                    }
                });
            });

            // Write the request body
            request.write(body);

            // Handle request errors
            request.on('error', (error) => {
                reject(`Request error: ${error.message}`);
            });

            // End the request
            request.end();
        });

        return result;
    } catch (error) {
        // Handle unexpected errors and return an error message
        return Promise.reject(`Unexpected error: ${error.message}`);
    }
}

module.exports = HttpRequest;