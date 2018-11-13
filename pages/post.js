import Layout from '../components/Layout.js'
import {withRouter} from 'next/router'

export default withRouter((props) => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <div>
      {props.router.query.content}
    </div>
  </Layout>
))