
import './App.css';
import React, { useState } from "react"

function App() {
  const [data, setData] = useState([])
  React.useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => res.json())
      .then(res => {
        setData(res)
      })
      .catch((err) => console.log(err))
  }, [])

  const updateData = (id, item) => {
    const info = {
      ...item,
      first_name: "Raju",
      last_name: "nagri",
      age: "1",
      phoneNo: "9873214556"
    }
    fetch(`http://localhost:8000/user/${id}`, {
      method: "PUT",
      body: JSON.stringify(info),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        setData([...data, res])
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return <tr key={item._id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.age}</td>
                <td>{item.phoneNo}</td>
                <td><button onClick={() => updateData(item._id, item)}>Update</button></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
