# Add Bootstrap

```
npm install bootstrap

//in index.js
import 'bootstrap/dist/css/bootstrap.css';

```

- We need to import Bootstrap's CSS before our own custom CSS so that our CSS will have precedence over Bootstrap's.


# Front-end route with react router

- Front-end routing is handling page change dynamically using JavaScript, instead of a full page reload where the new HTML file is downloaded from the server.

## Install React Router

```
npm install react-router-dom@5
or
yarn add react-router-dom@5
```

## Router

- React router provides two types of routers, BrowserRouter and HashRouter

- BrowserRouter uses browser history API to maintain browsing history. Which we should always be using for building front-end web application

- HashRouter uses a unique hash keycode at the end of URLs to sync the URL with DOM content. This is generally used for static file servers and legacy browsers. We won't be using this.

## Route

- Route is a component for route matching

```
<Route path="/" exact component={Home} />
<Route path="/about/" component={About} />
<Route path="/contact/" component={Contact} />

```

- The `exact` attribute is an optional attribute that lets us set how the Route matches the path with the current URL path. If we don't see `exact`, it will render on any other paths too.

| path |	current URL path | 	exact	| matches? |
| ----- | ----------- |----------- |----------- |
/	| /about | 	true  |	no |
/  |	/about | 	false	| yes |

## Link
- Page changes are now handled by React Router using JavaScript. To ensure this happens correctly, we need to use the Link component provided by React Router

- if we add 
```    
     <li>
      <a href="/about/">About (normal anchor link, page will full reload)</a>
    </li>
```

- Click the anchor link will make the page reload. The other links won't do a page reload since they're handled by React Router

## Switch

- Will render whenever its path value matches the current Url path.

- The other feature about using the Switch component is to add a catch all Route that will render a 404 Not Found page for routes that are not defined. 

- Test:  go to an undefined URL such as http://localhost:3000/foo, the NotFound component will be rendered