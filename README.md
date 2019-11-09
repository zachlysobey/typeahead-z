# typeahead-z

[![Actions Status](https://github.com/zachlysobey/typeahead-z/workflows/Node%20CI/badge.svg)](https://github.com/zachlysobey/typeahead-z/actions)

## Architecture

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available npm scripts

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run precommit`

Runs the tests, formatter, etc. as the git precommit hook would

### `npm run prettier`

Formats this project's code with 'prettier'

## Specification

### Code Challenge

Please code a “typeahead” widget (also sometimes called an “autocomplete” input.) This challenge is designed to take between 1-3 hours depending on your implementation strategy. Two days are allotted to complete the challenge from time of receipt.

#### Inspiration:

-   https://www.airbnb.com/ (the “where” input)

#### Functional requirements:

1. It must be built in React; feel free to use a styling solution of your choice
1. Upon typing, the widget fuzzy-matches case-insensitively against the list at the end of this document and presents list items that contain the matched characters as suggestions
1. Clicking an autocomplete suggestion should fill in the input with the full text
1. Using the up and down arrow keys should allow the user to highlight a desired suggestion and press Enter to select it, filling in the input
1. The input should be a valid HTML text input element to be used in a standard HTML form setup
1. The user should be able to proceed without choosing one of the suggestions (non-exclusive)

#### Styling requirements:

1. The widget match suggestions should appear below the text input as a floating container
1. The floating suggestion area should become scrollable when there are many suggestions
1. The matched portion of the suggestion should be highlighted in some way

#### Bonus points:

-   Hovering over the suggestions pre-preemptively fills in the input box, but does not commit the change permanently until a suggestion is clicked or pressed enter-upon
-   Put your own personal style on it

-   Please make your project source easily accessible on GitHub or another code hosting platform for review. A reviewer should be able to clone the repo and run “npm start” to see the finished product.

### Here are the list of terms that should be matched against:

Açaí, Apple, Akee, Apricot, Avocado, Banana, Bilberry, Blackberry, Blackcurrant, Black sapote, Blueberry, Boysenberry, Buddha's hand, Crab apples, Currant, Cherry, Cherimoya, Chico fruit, Cloudberry, Coconut, Cranberry, Cucumber, Damson, Date, Dragonfruit, Pitaya, Durian, Elderberry, Feijoa, Fig, Goji berry, Gooseberry, Grape, Raisin, Grapefruit, Guava, Honeyberry, Huckleberry, Jabuticaba, Jackfruit, Jambul, Japanese plum, Jostaberry, Jujube, Juniper berry, Kiwano, Kiwifruit, Kumquat, Lemon, Lime, Loquat, Longan, Lychee, Mango, Mangosteen, Marionberry, Melon, Cantaloupe, Honeydew, Watermelon, Miracle fruit, Mulberry, Nectarine, Nance, Olive, Orange, Blood orange, Clementine, Mandarine, Tangerine, Papaya, Passionfruit, Peach, Pear, Persimmon, Plantain, Plum, Prune, Pineapple, Pineberry, Plumcot, Pomegranate, Pomelo, Purple mangosteen, Quince, Raspberry, Salmonberry, Rambutan, Redcurrant, Salal, Salak, Satsuma, Soursop, Star apple, Star fruit, Strawberry, Surinam cherry, Tamarillo, Tamarind, Ugli fruit, White currant, White sapote, Yuzu, Avocado, Bell pepper, Chili pepper, Corn kernel, Eggplant, Olive, Pea, Pumpkin, Squash, Tomato, Zucchini
