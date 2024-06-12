import React from "react";
import axios from "axios";
export default function B4() {
  const removeById = (id: number) => {
    axios
      .delete(`http://localhost:8080/students/${id}`)
      .then((res) => {
        console.log("Kết quả xóa:", res.data);
      })
      .catch((err) => console.error(err));
  };
  removeById(1);
  return <div>B4</div>;
}
