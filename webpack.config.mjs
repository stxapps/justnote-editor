import path from 'path';
import { fileURLToPath } from 'url';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  devtool: 'source-map',
  performance: { hints: false },

  entry: path.resolve(__dirname, 'src', 'ckeditor.ts'),

  output: {
    // The name under which the editor will be exported.
    library: 'DecoupledEditor',

    path: path.resolve(__dirname, 'build'),
    filename: 'ckeditor.js',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            // Preserve CKEditor 5 license comments.
            comments: /^!/
          }
        },
        extractComments: false
      })
    ]
  },

  plugins: [

  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2022',
          tsconfig: 'tsconfig.json'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
              attributes: {
                'data-cke': true
              }
            }
          },
          'css-loader',
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    extensionAlias: {
      '.js': ['.js', '.ts']
    }
  }
};
