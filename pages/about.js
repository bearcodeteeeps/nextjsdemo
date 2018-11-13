import { Media } from 'reactstrap'

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Media>
      <Media left>
        <img src="../static/thumbs-up.jpg" alt="Thumbs Up!" width="400"/>
      </Media>
      <Media body style={{ marginLeft: '15px'}}>
        <Media heading>Hi my name is Chris</Media>
          My name is Chris and I'm a software developer and proud beard owner.
      </Media>
    </Media>
  </Layout>
)