// Create two arrays named "movies" and "search_result" with 20 random movie names as both of the array values
let movies = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    'The Godfather: Part II',
    '12 Angry',
    "Schindler's List",
    'The Lord of the Rings: The Return of the King',
    'Pulp Fiction',
    'The Good, the Bad and the Ugly',
    'The Lord of the Rings: The Fellowship of the Ring',
    'Fight Club',
    'Forrest Gump',
    'Inception',
    'The Lord of the Rings: The Two Towers',
    'Star Wars: Episode V - The Empire Strikes Back',
    'The Matrix',
    'Goodfellas',
    "One Flew Over the Cuckoo's Nest",
    'Seven Samurai',
    'Se7en',
  ];
  let search_result = movies;
  
  // Create a function to clear div with id "movies_list" content and display "search_result" array in div with id "movies_list" as list items
  function displayMovies() {
    document.getElementById('movies_list').innerHTML = '';
    search_result.forEach((movie) => {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(movie));
      document.getElementById('movies_list').appendChild(li);
    });
  }
  
  // Call the function "displayMovies" when the document is ready
  document.addEventListener('DOMContentLoaded', function () {
    displayMovies();
  });
  
  // Create a function named linearSearch to filter the "movies" array using linear search based on the input value and set the filtered result to "search_result" array and call the function "displayMovies"
  function linearSearch() {
    let search = document.getElementById('searchKey').value;
    search_result = movies.filter((movie) =>
      movie.toLowerCase().includes(search.toLowerCase())
    );
    displayMovies();
  }
  
  // Create a function named binarySearch to filter the "movies" array using linear search based on the input value and set the filtered result to "search_result" array and call the function "displayMovies"
  function binarySearch() {
    let search = document.getElementById('searchKey').value;
    let start = 0;
    let end = movies.length - 1;
    let mid;
    while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (movies[mid].toLowerCase().includes(search.toLowerCase())) {
        search_result = [movies[mid]];
        displayMovies();
        return;
      } else if (movies[mid].toLowerCase() < search.toLowerCase()) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    search_result = [];
    displayMovies();
  }
  
  // Create a function named ternarySearch to filter the "movies" array using ternary search based on the input value and set the filtered result to "search_result" array and call the function "displayMovies"
  function ternarySearch() {
    let search = document.getElementById('searchKey').value;
    let start = 0;
    let end = movies.length - 1;
    let mid1, mid2;
    while (start <= end) {
      mid1 = start + Math.floor((end - start) / 3);
      mid2 = end - Math.floor((end - start) / 3);
      if (movies[mid1].toLowerCase().includes(search.toLowerCase())) {
        search_result = [movies[mid1]];
        displayMovies();
        return;
      } else if (movies[mid2].toLowerCase().includes(search.toLowerCase())) {
        search_result = [movies[mid2]];
        displayMovies();
        return;
      } else if (movies[mid1].toLowerCase() > search.toLowerCase()) {
        end = mid1 - 1;
      } else if (movies[mid2].toLowerCase() < search.toLowerCase()) {
        start = mid2 + 1;
      } else {
        start = mid1 + 1;
        end = mid2 - 1;
      }
    }
    search_result = [];
    displayMovies();
  }
  
  /* Create a method searchMovie
   * 1. Get the value of the input field with id "searchKey" and store it in a variable named "searchKey"
   * 2. Get the value of the radio button with name "searchType" and store it in a variable named "algorithm"
   * 3. If "searchKey" is empty, set "search_result" to "movies" and call the function "displayMovies"
   * 4. If "algorithm" is "linear", call the function "linearSearch"
   * 5. If "algorithm" is "binary", call the function "binarySearch"
   * 6. If "algorithm" is "ternary", call the function "ternarySearch"
   */
  function searchMovie() {
    let searchKey = document.getElementById('searchKey').value;
    let algorithm = document.getElementById('searchAlgorithm').value;
    if (searchKey === '') {
      search_result = movies;
      displayMovies();
    } else if (algorithm === 'linear') {
      linearSearch();
    } else if (algorithm === 'binary') {
      binarySearch();
    } else if (algorithm === 'ternary') {
      ternarySearch();
    }
  }
  