import axios from "axios";
import React, { useEffect } from "react";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function B6() {
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    let updateStudent: Student = {
      id: 7,
      student_name: "abc",
      email: "thecuong@gmail.com",
      address: "Hồ Chí Minh",
      phone: "0987654321",
      status: true,
      created_at: today,
    };
    axios
      .patch("http://localhost:8080/students/7", updateStudent)
      .then((res) => console.log("data", res))
      .catch((err) => console.log(err));
  }, []);
  return <div>B6</div>;
}
