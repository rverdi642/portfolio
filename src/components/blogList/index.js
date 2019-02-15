import React, { Component } from "react";
import axios from "axios";
import {
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
  CardColumns,
  Col,
  Container,
  Row,
  Button
} from "reactstrap";
import { withRouter } from "react-router-dom";
import Blog from "./blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

class DocumentList extends Component {
  state = {
    blogs: [],
    componentState: 0
  };

  componentDidMount = async () => {
    this.fetchblogs();
  };

  fetchblogs = () => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/blogs", {
        withCredentials: true
      })
      .then(({ data }) => {
        const { blogs, err } = data;

        if (blogs) {
          this.setState({ blogs });
        }
      });
  };

  blogElements = () =>
    /* I think we have to check for message ID. If it is already being mapped. Then skip others with the same ID*/
    this.state.blogs.map((e, i) => (
      <Document
        key={i}
        blog={e}
        copy={this.copyblog(e)}
        delete={() => this.deleteblog(e)}
      />
    ));

  blogCreateButton = param => (
    <Card
      className={param !== "single" ? "documentCard" : null}
      onClick={this.redirectToCreateblogPage}
      style={{ width: "100%", height: 193 }}
    >
      <CardBody style={{ textAlign: "center" }}>
        <CardTitle style={{ marginTop: 5, marginBottom: 20 }}>
          <h3>Create New E-mail</h3>
        </CardTitle>
        <Button size="lg" color="danger">
          <FontAwesomeIcon icon="plus-circle" size="3x" />
        </Button>
      </CardBody>
    </Card>
  );

  redirectToCreateblogPage = () => {
    if (this.props.user.subscribed === true || this.state.blogs.length < 5) {
      this.props.history.push("/blog");
    } else {
      this.setState({ componentState: 1 });
    }
  };
  deleteblog = e => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL + "/blogs/"}${e.id}`, {
        withCredentials: true
      })
      .then(res => {
        if (this.state.componentState === 1) {
          this.setState({ componentState: 0 }, () => this.fetchblogs());
        } else {
          this.fetchblogs();
        }
      })
      .catch(err => err);
  };

  resetComponentState = () => {
    this.setState({ componentState: 0 });
  };
  blogCountAlert = () => {
    if (this.state.componentState === 1) {
      return (
        <UncontrolledAlert
          color="danger"
          onClick={() => this.resetComponentState()}
          className="mt-2"
        >
          Free users can only have 5 blogs in their dashboard, please clean up
          any unnecessary blogs.
        </UncontrolledAlert>
      );
    }
    return null;
  };

  blogCards = () => {
    if (this.state.blogs.length === 0) {
      return (
        <Container fluid className="button-center">
          <div>{this.blogCreateButton("single")}</div>
        </Container>
      );
    }
    return (
      <Col>
        <CardColumns>
          {this.blogCreateButton()}
          {this.blogElements()}
        </CardColumns>
      </Col>
    );
  };
  

  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col xs={12}>{this.blogCountAlert()}</Col>
        </Row>
        <Row>{this.blogCards()}</Row>
      </Container>
    );
  }
}
export default withRouter(DocumentList);
