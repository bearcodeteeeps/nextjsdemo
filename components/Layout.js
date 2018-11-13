import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap'

import Header from './Header';

const Layout = (props) => (
  <div>
    <Head>
      <title>Welcome to my blog</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    </Head>
    <Header />
    <Container>
      <Row style={{marginTop: '20px'}}>
        <Col>
      {props.children}
        </Col>
      </Row>
    </Container>
  </div>
);

export default Layout