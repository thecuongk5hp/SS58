import axios from "axios";
import React from "react";

export default function B3() {
  const getStudentById = (id: number) => {
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((res) => {
        if (res.data) {
          console.log("Thông tin sinh viên:", res.data);
        } else {
          console.log("Không tìm thấy bản ghi");
        }
      })
      .catch((err) => console.error(err));
  };

  getStudentById(123);

  return <div>B3</div>;
}
