
# Fetch and Save Frontend

This is the frontend application for the Fetch and Save project. The frontend is built using React and allows users to interact with the backend API to fetch, display, and delete posts.

## Demo

You can see a live demo of the application [here](https://6656850d06c38e1c683d38e6--illustrious-cannoli-f88716.netlify.app/).

## Features

- Fetch and save posts from an external API
- Display posts in a neatly organized table
- Delete all posts from the database

## Prerequisites

- Node.js and npm installed on your machine

## Getting Started

1. Clone the repository:

    ```sh
    git clone https://github.com/TyTe108/fetch-and-save-frontend.git
    cd fetch-and-save-frontend
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Update the `api.js` file to point to your backend API if necessary. The file is located in `src/api.js`.

4. Start the development server:

    ```sh
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Deployment

The application is deployed on Netlify. You can deploy your own instance by following these steps:

1. Commit and push your code to a GitHub repository.

2. Go to [Netlify](https://www.netlify.com/) and log in or sign up.

3. Click on "New site from Git" and connect your GitHub repository.

4. Follow the prompts to configure the deployment settings.

5. Once deployed, your site will be live at the provided Netlify URL.

## Configuration

Ensure your `package.json` has the correct proxy to your backend API. Update the `"proxy"` field in `package.json`:

```json
"proxy": "https://fetch-and-save-d8b0e2b25bdc.herokuapp.com"
```

## Technologies Used

- React
- Axios
- CSS

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
