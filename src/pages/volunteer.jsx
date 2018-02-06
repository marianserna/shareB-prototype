import React from 'react';

import { PageContainer, PageVisual, PageContent } from '../elements/layout';

import {
  Form,
  Label,
  InputGroup,
  Input,
  Textarea,
  Submit,
  Agreement
} from '../elements/volunteer';

import appImage from '../images/app.jpg';

export default class Volunteer extends React.Component {
  render() {
    return (
      <PageContainer>
        <PageVisual style={{ backgroundImage: `url('${appImage}')` }} />
        <PageContent padding scroll>
          <Form>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="John Doe" />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="john@email.com" />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message to us" />
            </InputGroup>

            <InputGroup right>
              <Submit type="submit">Submit</Submit>
            </InputGroup>

            <Agreement>
              By submitting this form, you agree with our{' '}
              <a href="#">privacy policy and terms of service</a> 📖.
            </Agreement>
          </Form>
        </PageContent>
      </PageContainer>
    );
  }
}
