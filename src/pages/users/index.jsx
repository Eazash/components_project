import axios from "axios";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { api_url } from "../../config";
import { getUsers, saveUsers } from "../../store/authSlice";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);
  useEffect(() => {
    async function getUsers() {
      const { data: users } = await axios.get(`${api_url}/users`);
      dispatch(saveUsers(users));
    }
    getUsers();
  }, [dispatch]);

  return (
    <div className="px-5 py-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
