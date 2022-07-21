import { Button, Table } from "antd";
import React from "react";
import UpdateUser from "../../components/admin/UpdateUser";
import { deleteUser, getAllUsers } from "../../services/users";

function ManageUsers() {
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState({});
  const [showUpdateVisible, setShowUpdateVisible] = React.useState(false);

  React.useEffect(() => {
    getAllUsersFromBackend();
  }, []);

  const deleteUserFromBacked = async (v) => {
    // console.log(v);
    await deleteUser(v._id);
    getAllUsersFromBackend();
  };
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Created At",
      dataIndex: "date",
      key: "data",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: "10px" }}
            onClick={() => {
              setSelectedUser(record);
              setShowUpdateVisible(true);
            }}
          >
            Update
          </Button>
          <Button type="default" onClick={() => deleteUserFromBacked(record)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const getAllUsersFromBackend = async () => {
    const res = await getAllUsers();
    console.log(res.data);
    if (res && res.data && res.data.data.Users.userList) {
      setUsers(res.data.data.Users.userList);
    }
  };

  return (
    <>
      <UpdateUser
        visible={showUpdateVisible}
        setVisible={setShowUpdateVisible}
        details={selectedUser}
        getAllUsers={getAllUsersFromBackend}
      />
      <Table dataSource={users} columns={columns} />
    </>
  );
}

export default ManageUsers;
