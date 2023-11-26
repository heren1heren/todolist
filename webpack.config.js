const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    // Other webpack configuration...
     entry: './src/script.js',

     output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'test.js', // Output file name
      },     
     


    module: {
      rules: [
        {
          test: /\.css$/, // Apply this rule to files ending with .css
          use: [
            'style-loader', // Inject CSS into the DOM
            'css-loader' // Handles the CSS imports in JavaScript
          ]
        },
        // Other rules for different file types if needed...
      ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html', // Path to your HTML template
          filename: 'index.html', // Output HTML file name
        }),
        // Other plugins and webpack configuration...
      ],

  };