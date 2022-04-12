import { Layout } from "./common";
import {wrapper} from '../redux/store'
//수정테스트
const App=({ Component, pageProps})=> {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(App)


