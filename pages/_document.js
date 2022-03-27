import Document, { Html, Head, Main, NextScript } from 'next/document'
// any attributes such as meta and lang should not be changed here. they should be changed in next/head which is currently index.js
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
