import React, { useState } from "react";
import { Form, Row, Col, FormControl, InputGroup } from "react-bootstrap";
import Calculator from "./Calculator";

const EntryForm = () => {
  //This component could of been broken down into a single component which I could
  //later use
  const [total, setTotal] = useState(0);
  const [duration, setDuration] = useState(0);
  const [interestCalcOne, setInterestCalcOne] = useState(0);
  const [interestCalcTwo, setInterestCalcTwo] = useState(0);
  return (
    <Form>
      <Row>
        <Col>
          <Form.Label>Amount {total}</Form.Label>
          <FormControl
            onChange={e => setTotal(e.target.value)}
            placeholder="Enter desired amount"
          />
          <div className={"calc-one"} id={"calc-one"}>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Interest
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={e => setInterestCalcOne(e.target.value)}
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <Calculator
              total={total}
              duration={duration}
              interestCalcOne={interestCalcOne}
              interestCalcTwo={interestCalcTwo}
            />
          </div>
        </Col>
        <Col>
          <Form.Label>Duration: {duration}</Form.Label>
          <FormControl
            onChange={e => setDuration(e.target.value)}
            placeholder="Enter desired duration"
          />
          <div className={"calc-area"}>
            <div className={"calc-two"} id={"calc"}>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Interest
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={e => setInterestCalcTwo(e.target.value)}
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
              <Calculator
                total={total}
                duration={duration}
                interestCalcOne={interestCalcOne}
                interestCalcTwo={interestCalcTwo}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default EntryForm;
