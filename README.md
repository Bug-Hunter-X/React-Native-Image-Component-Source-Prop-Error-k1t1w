# React Native Image Component Source Prop Error

This repository demonstrates a common error in React Native when using the Image component: incorrectly setting the `source` prop. The error occurs because the component expects an object with a `uri` property, not just a string URL.

## Bug

The `bug.js` file shows the incorrect implementation.  It attempts to set the `source` prop directly with a string, which causes a runtime error. 

## Solution

The `bugSolution.js` file provides the corrected implementation.  It shows how to set the `source` prop correctly using an object with a `uri` property.

## How to run

1. Clone this repository.
2. Navigate to the directory in your terminal.
3. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.