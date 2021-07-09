# electron-testing

This is an electron testing, used only to test some possibilities with Electron.js
two of the main possibilities are:

1. Using typescript instead of javascript
2. Using Reactjs cdn, as a library instead of a framework, with babel transpiling

## Typescript remarks

While typescript can be a go-to option in some contexts, i have not found a way to create a good archetechture to it with electron.
The code concerning typescript is:

```JSON
    "build": "tsc",
    "watch": "tsc -w",
    "start": "npm run build && electron ./dist/main.js"
```

## React remarks

Although Reactjs can be used simply as a library, as Facebook says, it is really hard to use it properly without using Babel together.
First, the JSX doesn't run alone in the browser, instead, you will need to actually transpile the JSX to the React.createElement state.

```Javascript
    //before:
    return (
            <button>
                Hello, World
            </button>
        )
    //after: 
    return /*#__PURE__*/React.createElement("button", null, "Hello, World");
```

if you want to use Electronjs with React, the common and easiest approach is to actually see react as a framework and build it backwards: first use the create-react-app and then install Electron.
