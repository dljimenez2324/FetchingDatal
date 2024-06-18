// Import the axios library for making HTTP requests
import axios from "axios";

// Import the CanceledError class from axios to handle request cancellations
import { CanceledError } from "axios";

// Create an axios instance with a predefined base URL
// This instance will be used for making HTTP requests to the specified base URL
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

// Export the CanceledError class to handle request cancellations in other parts of the application
export { CanceledError }