import React, { Component } from 'react';
import withAPICourses from "./withAPICourses";

// kiểu 1:
//  class couserListA extends Component {
//   render() {
//     console.log("couserListA",this.props)
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
// export default withAPICourses(couserListA)

// kiểu 2:
class CourseListA extends Component {
  render() {
    console.log("CourseListA", this.props);
    return <div></div>;
  }
}

export const CourseList1 = withAPICourses(CourseListA);

class CourseListB extends Component {
  render() {
    console.log("CourseListB", this.props);
    return <div></div>;
  }
}

export const CourseList2 = withAPICourses(CourseListB);