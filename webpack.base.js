const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const production = process.env.NODE_ENV === 'production';
const ManifestPlugin = require('webpack-manifest-plugin');
// the path(s) that should be cleaned
let pathsToClean = [
  'dist',
  '*.html',
  '*.css'
]

// the clean options to use
let cleanOptions = {
  root: 'D:/Code/October/ModerNumOpt',
  exclude: ['shared.js'],
  verbose: true,
  dry: false,
}

module.exports =  {

    entry: {

      main: './src/js/index.js',
      // second: './src/js/helper.js',
      style: './src/js/style.js'
    },
    output: {
      filename: 'js/[name].[hash].js',
      path: path.resolve(__dirname, 'dist'),

			publicPath: 'dist/'

      // NOTE: DEVELOPMENT
			// publicPath: '/'
    },
    module: {
      rules: [{
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }, {
          test: /\.scss$/,
          use: [{
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }

            },
            {
              loader: "css-loader", // translates CSS into CommonJS,
              options: {
                // url: false,
                sourceMap: true,

              }
            },
            {
              loader: "resolve-url-loader",
              options: {
                debug: true,
                sourceMap: true,
                engine: 'rework'

              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            },
             {
               loader:  "postcss-loader"
             }
          ]
        },

        {
          test: /\.html$/,
          loader: 'html-loader'
        },

        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [{
              loader: 'file-loader',
              options: {
                name: 'images/[name]-[hash].[ext]',
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 91
                },
                // optipng.enabled: false will disable optipng
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '91',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
                // the webp option will enable WEBP
                webp: {
                  quality: 95
                }
              }
            },
          ]
        },
      ]
    },


    plugins: [new CleanWebpackPlugin(pathsToClean, cleanOptions),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[id].[contenthash].css",

      }),
      new webpack.HashedModuleIdsPlugin(),

      new HtmlCriticalWebpackPlugin({
  base: path.resolve(__dirname, 'dist'),
  src: '../index.html',
  dest: '../index.html',
  inline: true,
  minify: false,
  extract: false,
  width: 375,
  height: 565,
  penthouse: {
    blockJSRequests: false,
  }
}),

      new HtmlCriticalWebpackPlugin({
  base: path.resolve(__dirname, 'dist'),
  src: '../index.html',
  dest: '../index.html',
  inline: true,
  minify: false,
  extract: false,
  width: 375,
  height: 565,
  penthouse: {
    blockJSRequests: false,
  }
}),
//       new HtmlCriticalWebpackPlugin({
//   base: path.resolve(__dirname, 'dist'),
//   src: '../index.html',
//   dest: '../index.html',
//   inline: true,
//   minify: false,
//   extract: false,
//   width: 375,
//   height: 565,
//   penthouse: {
//     blockJSRequests: false,
//   }
// }),
//
//       new HtmlCriticalWebpackPlugin({
//   base: path.resolve(__dirname, 'dist'),
//   src: '../index.html',
//   dest: '../index.html',
//   inline: true,
//   minify: false,
//   extract: false,
//   width: 375,
//   height: 565,
//   penthouse: {
//     blockJSRequests: false,
//   }
// }),

      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: 'ModerNum | Home',
				filename: '../index.html',
        // NOTE: DEVELOPMENT

				// filename: 'index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }),

      new HtmlWebpackPlugin({
        template: 'src/second.html',
        title: 'ModerNum | Eos Ad Sunt',
        filename: '../second.html',


        // NOTE: DEVELOPMENT

        // filename: 'second.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }),

      new HtmlWebpackPlugin({
        template: 'src/blog.html',
        title: 'ModerNum | Blog',
        filename: '../blog.html',


        // NOTE: DEVELOPMENT

        // filename: 'blog.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }),

       new ManifestPlugin({
       }),


      new webpack.HotModuleReplacementPlugin(),

    ]

};
