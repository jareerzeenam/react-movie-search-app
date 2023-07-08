
# Jareer's MovieLand App


This is a movie search application built with React. It allows users to search for movies by their title or name. The application fetches movie data from the OMDb API.

## Installation

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/jareerzeenam/react-movie-search-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd react-movie-search-app
   ```

3. Create an `.env` file in the root directory of the project.

4. Open the `.env.example` file provided in the project and copy the content.

5. Paste the copied content into the `.env` file.

6. Obtain an API key from the OMDb API (http://www.omdbapi.com/) and replace `REACT_APP_MOVIES_API_URL` in the `.env` file with your API URL.

   Example `.env` file:

   ```shell
   REACT_APP_MOVIES_API_URL=http://www.omdbapi.com/?apikey=your-api-key
   ```

7. Save the `.env` file.

8. Install the project dependencies:

   ```shell
   npm install
   ```

## Usage

1. Start the development server:

   ```shell
   npm start
   ```

2. Open your web browser and visit `http://localhost:3000` 🚀 to access the Movie Search App.

3. Enter a movie title in the search input and click the search icon or press Enter to fetch and display the corresponding movie information.

## Contributing

Contributions to the Movie Search App are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


Feel free to modify the README file as per your requirements and add any additional sections or details that you think are necessary.