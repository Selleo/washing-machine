import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Field } from "redux-form";
import _map from "lodash";
import _capitalize from "lodash/capitalize";
import TimePickerWrapper from "./TimePickerWrapper";

const SingleDayReservations = ({ fields }) => {
  return [
    <Row>
      <Col>
        <h5>{_capitalize(fields.name)}</h5>
      </Col>
    </Row>,
    <Row>
      {fields.map((name, index) => (
        <Row
          key={`single-entry-${index}`}
          className="reservations__single-entry"
        >
          <Col xs={{ size: 3, offset: 1 }}>
            <Field name={`[${index}].start`} component={TimePickerWrapper} />
          </Col>
          <Col xs={{ size: 3, offset: 2 }}>
            <Field name={`[${index}].end`} component={TimePickerWrapper} />
          </Col>
          <Col xs={{ size: 1, offset: 1 }}>
            <Button
              onClick={() => {
                fields.remove(index);
              }}
              color="danger"
              className="reservations__remove-btn"
            >
              Remove
            </Button>
          </Col>
        </Row>
      ))}
    </Row>,
    <Row>
      <Col xs={{ size: 3, offset: 6 }}>
        <Button
          onClick={() => {
            fields.push({ start: null, end: null });
          }}
          color="warning"
          className="reservations__clear-btn"
        >
          + Add Entry
        </Button>
      </Col>
    </Row>
  ];
};

export default SingleDayReservations;
