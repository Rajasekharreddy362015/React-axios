import React, { Component } from 'react';
import axios from 'axios'
import { Button, Table } from 'semantic-ui-react'
class StudentHistory extends Component {
    constructor() {
        super();
        this.state = {
            HistoryData: []
        }
    }
    handlerClick = () => {
        axios.get("https://demo4788754.mockable.io/studenthistory")
            .then((res) => {
                this.setState({
                    HistoryData: res.data
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        const sData = this.state.HistoryData.map(sdt => {
            return (
                <tr key={sdt.student_id}>
                    <td>{sdt.student_id}</td>
                    <td>{sdt.student_name}</td>
                    <td>{sdt.student_subjects}</td>
                    <td>{sdt.student_marks}</td>
                </tr>
            )
        })
        return (
            <div>
                <Button onClick={this.handlerClick} className="ui primary button" style={{ width: 170, marginTop: 20 }}>StudentDetails</Button>
                <h3>Student Details:</h3>
                <Table className="ui celled table,ui grey inverted table" textAlign='center'>
                    <thead textAlign='center'>
                        <th>StudentId</th>
                        <th>StudentName</th>
                        <th>StudentSubjects</th>
                        <th>StudentMarks</th>
                    </thead>
                    <tbody>
                         {sData} 
                    </tbody>
                </Table>

            </div>
        );
    }
}

export default StudentHistory;
// import React, { Component } from 'react'

// class Student extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             "student":[
//                 {
//                     std_id:123,
//                     std_name:"Raja",
//                     std_place:"banglore"

//                 },
//                 {
//                     std_id:456,
//                     std_name:"Sekhar",
//                     std_place:"banglore"

//                 },
//                 {
//                     std_id:123,
//                     std_name:"Reddy",
//                     std_place:"andhra pradesh"

//                 }
//             ]

            
//         }
//     }
//   render() {
//       const stdt=this.state.student.map(std=>{
//           return(
//         <tr key={std.id} >
//         <td>{std.std_id}</td>
//         <td>{std.std_name}</td>
//         <td>{std.std_place}</td>
//         </tr>

        
//       )
//     })


    
//     return(
//         <div>
//             <h3> student details</h3>
//             <table>
//                 <thead>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>place</th>
//                 </thead>
//                 <tbody>
//                     {stdt}
//                 </tbody>
//             </table>
//         </div>
             
//     );
// }
// }
// export default Student;