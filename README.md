# FilmDB
A React-based movie database application that allows users to search for movies and view detailed information about them.
The app is built using [Material UI](https://material-ui.com) for styling and components, 
[React Router](https://reactrouter.com) for navigation, 
and the [OMDb API](http://www.omdbapi.com) for fetching movie data.

## Features
- **Search Movies:** Look up movies by title using the OMDb API.
- **Movie Details:** View detailed information about a selected movie, including its title, year, genre, plot, and more.
- **Responsive Design:** The app is fully responsive, ensuring a great user experience on both desktop and mobile devices.
- **Navigation:** Seamless routing between pages using React Router.

## Demo
![FilmDB Demo](img/demo.gif)

## Installation
1. **Clone the repository**
2. **Install dependencies:**
```bash
npm install
```
3. **Set up OBDb API Key:**
   - Create a `.env` file in the root directory.
   - Add your OMDb API key to the `.env` file:
     ```bash
     VITE_OMDB_API_KEY=your_api_key_here
     ```
4. **Build and run the project:**
    ```bash
    npm run build
    cd dist
    npm run preview
    ```

## Usage
1. Enter a movie title in the search bar to find movies.
2. Click on a movie to view detailed information about it.

## Technologies Used
- [React](https://reactjs.org)
- [Material-UI](https://material-ui.com)
- [React Router](https://reactrouter.com)
- [OMDb API](http://www.omdbapi.com)