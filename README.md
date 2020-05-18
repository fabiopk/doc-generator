This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Simple project for generating docx documents with varibles passed through a React form.<br>
Uses `docxtemplater` for generating the files and `semantic-ui` for styling

[Live demo for creating a from a react form](https://doc-generator-c9b96.web.app)

## Quickstart

Clone the project and cd to its folder and run `npm install`<br>
Run the project in development mode: `npm start`<br>

## Custom Usage

- Create your .docx model using word or any other text editor.<br>
- Replace text you want to chage with variable names between curly braces (i.e. `{myVar}`)
- Save the custom model inside `public` (you can also pass a URL to the same function)
- Add all variables you need to an object
- Call `docxGenerator()` with the path to the model, the object containing the variables and the ooutput file name.

For more complex usage, check the [docxtemplater documentation](https://docxtemplater.readthedocs.io/en/latest/)
