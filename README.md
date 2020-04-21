# Focus Order Annotation (Figma plugin)

Quickly annotate your designs’ focus / tab order flow for keyboard-navigating users. Bulk add, remove, reorder, and update your annotations with a few button clicks. Adds all focus-order annotations into a single layer group that can be toggled on and off. 

## Getting Started

I'll post the plugin share key soon. :) 


### Installing and building

To get the TypeScript compiler working and set up development to production:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.

2. Install the TypeScript compiler globally:

```
sudo npm install -g typescript
```

Install webpack dependencies: 
```
npm install --save-dev css-loader html-webpack-inline-source-plugin html-webpack-plugin style-loader ts-loader typescript url-loader webpack webpack-cli
```

3. Open this directory in Visual Studio Code.

4. Run this command to build for development. The --watch flag will re-run the build each time a source file is changed,

```
npx webpack --mode=development --watch
```

Run this command for production build: 
```
npx webpack --mode=production
```

That's it! Visual Studio Code will push all the final code into the dist folder. 

