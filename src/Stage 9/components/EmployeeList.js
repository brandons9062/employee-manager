import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          { 
            this.props.employees.map((employee) => {
                return (
                <li key={employee.id} onClick={() => {this.props.selectEmployee(employee)}} className="listText" >{employee.name}</li>
                    )
            })
          }
        </ul>
      </div>
    )
  }
}

export default EmployeeList;