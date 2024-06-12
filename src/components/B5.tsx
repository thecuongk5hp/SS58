import React from "react";
import axios from "axios";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function B5() {
  const createStudent = (studentData: Student) => {
    axios
      .post("http://localhost:8080/students", studentData)
      .then((res) => {
        console.log("Kết quả thêm mới sinh viên:", res.data);
      })
      .catch((err) => console.error(err));
  };

  const today = new Date().toISOString().slice(0, 10);
  const student: Student = {
    id: 7,
    student_name: "abc",
    email: "thecuong@gmail.com",
    address: "Hồ Chí Minh",
    phone: "0987654321",
    status: true,
    created_at: today,
  };
  createStudent(student);
  return <div>B5</div>;
}
