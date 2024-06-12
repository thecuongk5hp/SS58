import axios from "axios";
import React, { useEffect, useState } from "react";

interface Student {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}

export default function ListStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState({
    student_name: "",
    email: "",
    address: "",
    phone: "",
  });

  // hàm lấy thông tin
  const getAllStudent = () => {
    axios
      .get("http://localhost:8080/students")
      .then((ress) => {
        setStudents(ress.data);
        console.log(ress);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllStudent();
  }, []);

  // hàm xóa sinh viên
  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có muốn xóa sinh viên này không?")) {
      axios
        .delete(`http://localhost:8080/students/${id}`)
        .then(() => {
          getAllStudent();
        })
        .catch((error) => console.log(error));
    }
  };

  // hàm thêm mới sinh viên
  const handleAddStudent = () => {
    axios
      .post("http://localhost:8080/students", newStudent)
      .then(() => {
        getAllStudent();
        // Reset form fields
        setNewStudent({
          student_name: "",
          email: "",
          address: "",
          phone: "",
        });
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mb-3 px-2 py-2 bg-secondary">
          <div className="fs-4 text-white">Quản lý sinh viên</div>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Thêm mới sinh viên
          </button>
        </div>
        <table className="table table-hover text-center table-bordered">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th scope="col">Tên sinh viên</th>
              <th scope="col">Email</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Số điện thoại</th>
              <th scope="col">Ngày tạo</th>
              <th scope="col">Lựa chọn</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{student.student_name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.phone}</td>
                <td>{student.created_at}</td>
                <td>
                  <button className="btn btn-warning me-2">Sửa</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(student.id);
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Thêm mới sinh viên
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="d-flex flex-column">
                <label htmlFor="student_name">Tên sinh viên</label>
                <input
                  type="text"
                  name="student_name"
                  value={newStudent.student_name}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={newStudent.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={newStudent.address}
                  onChange={handleInputChange}
                />
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  value={newStudent.phone}
                  onChange={handleInputChange}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddStudent}
                data-bs-dismiss="modal"
              >
                Thêm mới
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
