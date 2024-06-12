import axios from "axios";
import React, { useEffect } from "react";

export default function B2() {
  useEffect(() => {
    axios
      .get("http://localhost:8080/students")
      .then((res) => console.log("data", res))
      .catch((err) => console.log(err));
  }, []);

  return <div>B2</div>;
}
