
import { useEffect, useState } from "react";

import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
}

const FetchingAxios = () => {
  //we need a useState to help us hold the state of our users
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('')

  ///Create a function to helps us fetch our data with axios
  const FetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch(error => setError(error.message)
      )
  };

  //UseEffect to help us with our FetchingData

  useEffect(() => {
    FetchData();
  }, []);

  
  return (
    <>
      <h1 className="text-center">Fetching Data with apiClient</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
        { error && <p className="text-danger">{error}</p>}
      </ul>
    </>
  );
};

export default FetchingAxios;
