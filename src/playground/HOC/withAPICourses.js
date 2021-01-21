// import React, { Component } from 'react'; // trùng tên
import React from 'react';
import axios from "axios";

// withAPICourses là HOC: function nhận vào 1 component và return về 1 component mới
export default function withAPICourses(COMPONENT) {
  class WrapperComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        courseList: []
      }
    }
    componentDidMount(){
      axios.get('https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .then((result) => {
        this.setState({
          courseList: result.data
        })
      })
    }
    render() {
      return <COMPONENT courseList={this.state.courseList}  />;
    }
    
  }
  return WrapperComponent
}

