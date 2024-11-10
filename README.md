## Environment Setup

This project requires environment variables to be set up for accessing the Brainflix API.  
Follow the steps below to configure the necessary environment files.

1. Copy the `.env.example` template file to create your own `.env` file:

   `cp .env.example .env`

2. Open the `.env` file and add your API key to the `VITE_BRAINFLIX_API_KEY` variable.

### Environment Variables Overview

- **`VITE_BRAINFLIX_API_BASE_URL`**: The base URL for the Brainflix API. This should already be prefilled in `.env.example` but can be updated if necessary.
- **`VITE_BRAINFLIX_API_KEY`**: Your unique API key for accessing the Brainflix API. This is required to make API calls.

### Example `.env` File

After setting up, your `.env` file should look like this:

- VITE_BRAINFLIX_API_BASE_URL=http://localhost:8080
- VITE_BRAINFLIX_API_KEY=your-api-key-here

**Note**: Keep the `.env` file secure and avoid sharing it publicly. This file should already be included in `.gitignore` to prevent it from being committed to version control.

### Running the Project

After setting up your `.env` file, you can start the development server:

`npm run dev`

If you encounter any issues with API requests, double-check that the values in your `.env` file are correct.
