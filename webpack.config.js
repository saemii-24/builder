const path = require('path');

module.exports = {
  mode: 'development',  
  entry: './src/index.js',  // 시작 파일
  output: {
    filename: 'bundle.js',  // 결과물 파일명
    path: path.resolve(__dirname, 'dist'),  // 저장 경로
  },
  module: {
    rules: [
      {
        test: /\.css$/i,   // .css로 끝나는 파일 찾기
        use: ['style-loader', 'css-loader'], // 오른쪽부터 순서대로 실행
      },
    ],
  },
};
