import React, { Component } from "react";
import axios from "axios";
import striptags from "striptags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  UncontrolledAlert,
  ButtonGroup,
  Col,
  Label,
  Container,
  Input,
  Row,
  Card,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import ContentEditable from "react-contenteditable";
import "./blog.css";

class NewBlog extends Component {
  crumbs = [{ name: "Home", path: "/" }, { name: "Document" }];
  state = {
    title: "",
    editorText: "",
    selected_version: 1,
    makingCall: false,
    error: false,
    componentState: 0
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.fetchblog(id);
    }
  }

  fetchblog = id => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + `/blogs/${id}`, {
        withCredentials: true
      })
      .then(({ data }) => {
        const { blog } = data;
        if (blog) {
          const state = { ...this.state, ...data.blog };

          // Set the latest version as selected
          if (data.blog.versions.length) {
            state.selected_version = data.blog.versions.length;
          }

          // Update the editor once new state is populated
          this.setState(state, this.processTone);
        }
      });
  };

  previousVersion = () => {
    if (this.state.selected_version > 1) {
      const selected_version = this.state.selected_version - 1;
      this.setState({ selected_version }, this.processTone);
    }
  };

  nextVersion = () => {
    if (this.state.selected_version < this.state.versions.length) {
      const selected_version = this.state.selected_version + 1;
      this.setState({ selected_version }, this.processTone);
    }
  };

  // Return the selected version, or a blank one if none have been made.
  selectedVersion = () => {
    return this.state.versions[this.state.selected_version - 1];
  };

  resetComponentState = () => {
    this.setState({ componentState: 0 });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editorInput = e => {
    let editorText = e.target.value;
    let text = striptags(e.target.value);
    const versions = this.state.versions;
    versions[this.state.selected_version - 1].text = text;
    this.setState({ versions, editorText });
  };

  handleSave = async e => {
    e.preventDefault();
    if (
      this.state.title.trim() === "" ||
      this.state.addressee.trim() === "" ||
      this.selectedVersion().text.trim() === ""
    ) {
      this.setState({ componentState: 6 });
    } else {
      const body = {
        blog: {
          title: this.state.title,
          addressee: this.state.addressee
        },
        version: this.selectedVersion()
      };

      if (this.props.match.params.id) {
        body.blog.id = this.props.match.params.id;
      }

      let headers = {
        withCredentials: true,
        headers: { Authorization: process.env.USER_COOKIE }
      };

      try {
        const { data: { id } } = await axios.post(
          process.env.REACT_APP_BACKEND_URL + "/blogs",
          body,
          headers
        );
        if (!this.props.match.params.id) {
          this.props.history.push(`/blog/${id}`);
        } else {
          this.fetchblog(id);
        }
        this.setState({ componentState: 5 });
      } catch (err) {
        this.setState({ componentState: 7 });
      }
    }
  };

  // Renames button to "save as" when editing a version that is not the latest
  saveButton = () => {
    if (this.state.selected_version === this.state.versions.length) {
      return "Save";
    }
    return "Save as";
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  navigationButtons = () => (
    <ButtonGroup>
      <Button color="danger" onClick={this.previousVersion}>
        <FontAwesomeIcon icon="arrow-left" className="fa-lg version-icon" />
      </Button>
      <Button color="danger" disabled>
        {this.state.selected_version} / {this.state.versions.length}
      </Button>
      <Button color="danger" onClick={this.nextVersion}>
        <FontAwesomeIcon icon="arrow-right" className="fa-lg version-icon" />
      </Button>
    </ButtonGroup>
  );

  actionButtons = () => (
    <ButtonGroup>
      <Button onClick={this.analyzeText}>Analyze</Button>
      <Button onClick={this.handleSave}>{this.saveButton()}</Button>
      <Button onClick={this.sendblog}>Send</Button>
    </ButtonGroup>
  );

  saveblogAlert = () => {
    if (this.state.componentState >= 5 && this.state.componentState <= 7) {
      let response;
      if (this.state.componentState === 5) {
        response = "Saved blog.";
      } else if (this.state.componentState === 6) {
        response =
          "To save an blog, one must include a title and message.";
      } else {
        response = "Something went wrong trying to save blog.";
      }
      return (
        <UncontrolledAlert
          color={this.state.componentState === 5 ? "success" : "danger"}
          onClick={() => this.resetComponentState()}
          className="mt-2"
        >
          {response}
        </UncontrolledAlert>
      );
    }
    return null;
  };
  render() {
    return (
      <Container className="mt-3">
    
        {this.saveblogAlert()}
        <Row className="top-row">
          <Col md={12} lg={{ order: 0, size: 8 }} className="fields">
            <InputGroup className="blog-fields">
              <InputGroupAddon
                addOnType="prepend"
                className="input-group-addon"
              >
                <i className="nc-icon nc-caps-small" />
              </InputGroupAddon>
              <Input
                name="title"
                value={this.state.title}
                onChange={this.handleInput}
                spellCheck="false"
                placeholder="Title"
              />
            </InputGroup>
            <InputGroup className="blog-fields">
              <InputGroupAddon
                addOnType="prepend"
                className="input-group-addon"
              >
                <i className="nc-icon nc-blog-85" />
              </InputGroupAddon>

            </InputGroup>
          </Col>
          <Col md={12} lg={{ size: 4 }}>
            <Card className="no-transition blogCard" body>
              <ButtonGroup vertical>
                {this.navigationButtons()}
                {this.actionButtons()}
              </ButtonGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={{ order: 2 }} lg={{ order: 0, size: 8 }}>
            <Label>Message</Label>
            <ContentEditable
              html={this.state.editorText}
              onChange={this.editorInput}
              className="form-control"
              style={{ height: "auto", minHeight: "150px" }}
            />
          </Col>
          <Col xs={{ order: 1 }} lg={{ size: 4 }} className="analysis">
            <Analysis
              error={this.state.error}
              toneAnalysis={this.selectedVersion().tone_analysis}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Newblog;
