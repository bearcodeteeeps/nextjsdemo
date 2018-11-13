import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h3>Contact Me</h3>
    <Form>
      <FormGroup row>
        <Label for="contactEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input required type="email" name="email" id="contactEmail" placeholder="Enter contact email" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="contactPhone" sm={2}>Phone</Label>
        <Col sm={10}>
          <Input type="tel" name="phone" id="contactPhone" placeholder="Enter contact phone" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="reason" sm={2}>Reason for Contact</Label>
        <Col sm={10}>
          <Input type="select" name="selectMulti" id="reason" multiple>
            <option>I'm awesome</option>
            <option>You're awesome</option>
            <option>They're awesome</option>
            <option>We're all awesome</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="message" sm={2}>Message</Label>
        <Col sm={10}>
          <Input required type="textarea" name="text" id="message" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="fileUpload" sm={2}>Attachments</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="fileUpload" />
          <FormText color="muted">
            Add any relevant attachments
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="checkbox2" sm={2}>Human?</Label>
        <Col sm={{ size: 10 }}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" />{' '}
              I am not a robot
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  </Layout>
)