import React, { Component } from "react";
import { Button, Form, Divider, Segment } from "semantic-ui-react";

export default class CertificateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      projectName: "",
    };
  }

  adjustBeforeSubmit = () => {
    const now = new Date();
    return {
      ...this.state,
      day: now.getDay(),
      month: now.toLocaleString("default", { month: "short" }),
      year: now.getFullYear(),
    };
  };

  render() {
    return (
      <Segment>
        <h2>Certificate Form</h2>
        <p>Complete the following fields, date is added automatically</p>
        <Divider />
        <Form onSubmit={() => this.props.onSubmit(this.adjustBeforeSubmit())}>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>First Name</label>
              <input
                value={this.state.firstName}
                onChange={(e) => this.setState({ firstName: e.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                value={this.state.lastName}
                onChange={(e) => this.setState({ lastName: e.target.value })}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Project Name</label>
            <input
              value={this.state.projectName}
              onChange={(e) => this.setState({ projectName: e.target.value })}
            />
          </Form.Field>
          <Button primary> Download Certificate</Button>
        </Form>
      </Segment>
    );
  }
}
