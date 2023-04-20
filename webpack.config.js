const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js', // Entry point for your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
        filename: 'bundle.js' // Output filename for bundled file
    },
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "fs": false // Add this line to resolve the 'fs' module
        },
        alias: {
            'plotly.js': 'plotly.js-dist',
            'simple-statistics': 'simple-statistics', // Alias for simple-statistics library
            'shaman': 'shaman', // Alias for shaman library
            'data-forge': 'data-forge', // Alias for data-forge library
            './config': './config', // Alias for config module
            'plotly.js-dist-min': 'plotly.js-dist-min', // Alias for plotly.js-dist-min library
            'opn': 'opn' // Alias for opn library
        }
    },
    module: {
        rules: [
            // ... other rules ...
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /plotly\.js-dist-min\.js$/,
                use: ['script-loader'],
            },
        ]
    },
    // Add any necessary plugins for your code (e.g., HtmlWebpackPlugin for generating HTML)
    // Example:
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     template: 'index.html'
    //   })
    // ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Serve bundled files from 'dist' directory
        port: 8080 // Specify the port for the dev server
    }
};
