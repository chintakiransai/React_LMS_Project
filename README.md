# React LMS Project

### Setup Instructions
1. Clone the project
```
git clone https://github.com/chintakiransai/React_LMS_Project.git
```
2. Change the directory
```
cd React_LMS_Project 
```
3.Insatll dependencies
```
npm i
```
4. Run the server
```
npm run dev
```

### Setting up Tailwind CSS in a Vite project [Link](https://tailwindcss.com/docs/guides/vite)
1.Install tailwindcss and its peer dependencies using below both command, then generate your tailwind.config.js and postcss.config.js files.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
2.Add the paths to all of your template files in your tailwind.config.js file.
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```
4.Add the @tailwind directives for each of Tailwind’s layers in your ./src/index.css file.
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
* Run the server, tailwind should be integrated....

### Adding plugins and additional dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Adding auto import sort for esline
1.Install the plugin
```
npm i eslint-plugin-simple-import-sort
```
2.Add rule in .eslintrc.cjs
```
'simple-import-sort/imports': 'error',
```
3.Add simple-import-sort in the plugin array of .eslintrc.cjs file
```
plugins: [..., 'simple-import-sort']
```
4.Open settings.json in vscode configuration settings
5.Add the following line
```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true 
}
```