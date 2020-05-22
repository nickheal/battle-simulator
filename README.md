# Byhiras tech test

![Screenshot](https://github.com/nickheal/react-journey/blob/master/docs/screenshot.gif?raw=true)

I bootstrapped this project with with [Create React App](https://github.com/facebook/create-react-app).

## Running the project

### Setup

Install the dependencies with npm i.

### Run

npm start runs the app in the development mode.

Open http://localhost:3000 to view it in the browser.

### Test

npm test launches the test runner.

## Other info

### Accessibility

This text color over the background almost certainly doesn't meet WCAG AA accessibility guidelines around contrast.

### Browser support

Tested in Chrome & Firefox. I'm not sure if the text gradient will work in IE 11.

This is built mobile first, but the layout could probably be rethought for mobile so that the text could be bumped up a bit in size.

### State management

I chose useReducer for state rather than adding a global state management.

This is down to being lightweight/quick to set up, and also because passing parameters through to the components didn't feel like it was over-coupling them.

### Styling

I haven't seen a Mortal Kombat game for years, but the idea for this project brought it to mind so I googled gifs, and I found [fightersgeneration.com](https://www.fightersgeneration.com/characters3/scorpion-a.html) which has an amazing number of GIFs of Mortal Kombat characters.

## Missing

1. Localisation support
2. E2E tests
