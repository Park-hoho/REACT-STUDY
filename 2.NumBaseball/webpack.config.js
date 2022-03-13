const path = require('path'); // 이건 그냥 외우기 + 여기는 import가 안되는 이유가 node로 돌리는거라서 안됨
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// process.env.NODE_ENV = 'production'; // 환경변수 production으로 하면 배포모드

// 웹팩 설정
module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실서비스: preduction
  devtool: 'eval', // 그냥 빠르게 하려는거 / 실서비스 : hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'] // entry에 확장자 일일이 다 적기 귀찮으니 여기서 설정
  },

  // **중요
  entry: { // 입력
    app: ['./client'], // client 가 WordRelay를 불러오므로 적어줄 필요없다.
  },

  module: {
    rules: [{
      test: /\.jsx?/, // jsx파일에 옛날브라우저에서도 돌아갈수있는 문법으로 바꿔주겠다.
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR', 'last 2 chrome versions'] // 지원할 브라우저 설정 https://github.com/browserslist/browserslist
            },
            debug: true,
          }],
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel', // 설치를 안해도 리로딩되지만 핫리로딩이랑 리로딩은 다르다. -> 브라우저 새로고침되면 기존 데이터가 다 날라간다.
        ],
      },
    }],
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: { // 출력
    path: path.join(__dirname, 'dist'), // path.join( 현재폴더(2.NumBaseball) , dist폴더 ),
    filename: 'app.js',
    publicPath: '/dist/',
  },
  devServer: {
    publicPath: '/dist/', // dist폴더에 결과물을 저장함 webpack devServer는 핫리로더 변경점이 생기면 저장물 수정을 해준다.
    hot: true,
  },
}