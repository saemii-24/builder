const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // 시작 파일
  output: {
    filename: "bundle.js", // 결과물 파일명
    path: path.resolve(__dirname, "dist"), // 저장 경로
    clean: true, // 매번 빌드할 때 dist 폴더 초기화
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 모든 .js 파일
        exclude: /node_modules/, // 외부 라이브러리 제외
        use: {
          loader: "babel-loader", // Babel로 변환
        },
      },
      {
        test: /\.css$/i, // .css로 끝나는 파일 찾기
        use: ["style-loader", "css-loader"], // 오른쪽부터 순서대로 실행
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // 이미지 파일 처리
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Demo",
      template: "./src/template.html", // 템플릿 파일 지정
    }),
  ],
  devServer: {
    static: "./dist", // 정적 파일 경로
    open: true, // 서버 실행 시 자동으로 브라우저 열기
    hot: true, // 수정 시 페이지 전체 새로고침 없이 갱신
    port: 3000, // 기본값 8080 -> 포트 변경 가능
  },
  devtool: "source-map",
};
