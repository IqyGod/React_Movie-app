# React_Movie-search-App
## Table of contents
* [General info](#general-information)
* [Stretch Goals](#stretch-goals)
* [Technologies](#technologies)
* [Setup](#setup)
* [App Link](#app-link)
<br>

## General information
<img src="https://user-images.githubusercontent.com/99662300/173768560-f786fbb5-0222-4a3c-9890-815bbf9a52b4.png" width=45% height=45%>


In this project, the project of visualization of the React concepts. 
<br> We built a movies search app in single page, no page reload, by utilizing 3 most important concepts of React : 
- Component
- Props
- State


Alongwith hooks, 2 hooks are used here : useState, useEffect.
<br> we can have multiple states or multiple useEffect hooks per Component.
<br> useState: 
- [movies, setMovies] ==> user input in search bar
- [searchTerm, setSearchTerm] ==> display for movie search output

<br >And events - the onClick listener :
- use the state ___setSearchTerm___ to dynamically rerender the movie arrays

<br>

## Technologies
- React
- HTML
- CSS
- JSX

<br>

## Stretch Goals
- As a user, they can type in and click icon to search latest movies and tv series.
- As a user, they can retrieve all matched movie infos at webpage very soon.
- As a user, they will see 'no movies found' if no match is found in IMDB database.

<img src="https://user-images.githubusercontent.com/99662300/173774324-06b68131-bdc4-4cb8-8fc7-f294e834d898.png" width=45% height=45%>

<br>


## Setup
To run this project, install npx locally after creating a new folder:

```
$ npx create-react-app ./
```

### API 
Movie API with IMDb.com
<br> Link to retriece the key : https://www.omdbapi.com/apikey.aspx
<br>

### ReactDOM.render
Up to June 2022, ReactDOM.render is no longer supported in React 18. 
<br> Use createRoot instead. 

__code in index.js__ : 
```
import App from './App';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

 root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

## App Link
https://fascinating-movie-search.netlify.app/

