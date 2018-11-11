<h1>Games Arena</h1>

## Basic Overview  [Live Demo](https://react-shopping-cart-67954.firebaseapp.com/)

This simple shopping cart prototype shows how React components and Redux can be used to build a
friendly user experience with instant visual updates and scaleable code in ecommerce applications. 


#### Features
- Add and remove products from the floating cart
- Sort products by highest to lowest and lowest to highest price
- Filter products by available sizes
- Products persist in floating cart even after page reloads
- Responsive design for desktop, tablets and mobile
- Product stoppers for free shipping

#### Using
- React
  * Redux - for application state management
- Nodejs
  * Express CORS Middleware
  * Nodemon - for watching for server changes
- Axios - for promise HTTP requests
- Native local storage API - for product persistence in floating cart
- CSS
  * BEM methodology
  * SASS

## Getting started

#### Requirements

- Node.js
- NPM

### Package installation

Execute the following command on your terminal to install all the needed packages:
``` bash
npm install
```

### Run the API Server

Start the server using:
``` bash
npm run server
```

When done, the products API will be running on  `http://localhost:8001/api/products`

keep it running on a terminal and go to the next step.

### Start the React App

just execute the following command and thats it! :D
``` bash
npm start
```

The application will start automatically in your browser on `http://localhost:3000`
