import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UncontrolledTooltip } from "reactstrap";
import moment from "moment-timezone";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from "reactstrap";

class Blog extends Component {
  navigate = () => {
    this.props.history.push(`/blog/${this.props.blog.id}`);
  };

  render() {
    let { title, updated, text } = this.props.blog;
    updated = moment(updated).calendar();

    return (
      <Card onClick={this.navigate} className="blogCard">
        <CardBody>
          <CardTitle>
            <Row>
              <Col xs={12} style={{ marginBottom: 3 }}>
                <Badge className="titleBadge">Title</Badge> {title}
              </Col>

              {updated !== "No versions." && (
                <Col xs={12} style={{ marginTop: 3 }}>
                  <Badge className="updatedBadge">Updated</Badge> {updated}
                </Col>
              )}

              <Col
                xs={12}
                style={{ marginTop: 3, marginBottom: 3 }}
                className="text-truncate"
              >
                <Badge className="textBadge">Message</Badge> {text}
              </Col>
            </Row>
          </CardTitle>
          <Row>
            <Col xs={12}>

              <Button
                id="Trash"
                color="danger"
                onClick={e => {
                  e.stopPropagation();
                  this.props.delete();
                }}
                style={{ marginLeft: 7 }}
              >
                <FontAwesomeIcon icon="trash" />
                <UncontrolledTooltip placement="right" target="Trash">
                  Trash
                </UncontrolledTooltip>
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default withRouter(blog);