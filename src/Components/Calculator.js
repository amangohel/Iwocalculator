import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Moment from "react-moment";
// import "moment-timezone";

const Calculator = data => {
  const [principle, setPrinciple] = useState(0);
  const [calcOneInterest, setCalcOneInterest] = useState(0);
  const [calcTwoInterest, setCalcTwoInterest] = useState(0);
  const [values, setValues] = useState([]);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [date] = useState(new Date());

  //Leaving the hooks above to show thought patterns. Later realised
  //that i could just do all of the processing within calculate interest
  //then simply put the result of that into an object/array

  function calculateInterest() {
    let value = [];
    let principle = Math.floor(data.total / data.duration);

    let total = data.total;
    value.push(total * data.interestCalcOne);
    for (var i = 0; i < data.duration; i++) {
      value.push(
        Math.round(parseInt(total) - principle) * data.interestCalcOne
      );
      total = total - principle;
    }
    console.log(value);
    setValues(value);
  }

  useEffect(() => {
    calculateInterest(data);
  }, [data]);

  return (
    <div className={"parent"}>
      <div className={"table-data"}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Repayment Date</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Total repayment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {/* <Moment format="DD/MM/YY" add={{ M: data.duration }}>
                  {date}
                </Moment> */}
              </td>
              <td>value</td>
              <td>value</td>
              <td>@value</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Calculator;
