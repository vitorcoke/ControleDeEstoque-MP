import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import UsersSPServices from "../../../services/sao_paulo/users/UsersSPServices";
import { UseDeleteContext } from "../../../contexts/DeleteContext";

interface IUser {
  id: number;
  name: string;
  departament: string;
}

const UsersList = () => {
  const [Users, setUsers] = useState<IUser[]>([]);

  const { checkbox, setCheckbox } = UseDeleteContext();

  const columns = [
    { field: "col1", headerName: "Nome" },
    { field: "col2", headerName: "Departamento" },
  ];

  const rows = Users.map((user) => ({
    id: user.id,
    col1: user.name,
    col2: user.departament,
  }));

  useEffect(() => {
    UsersSPServices.getAll().then((users) => setUsers(users));
  }, []);

  return (
    <Box display="flex" width="100%" justifyContent="center">
      <Box component={Paper} sx={{ height: "70vh", width: "75%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          rowsPerPageOptions={[10]}
          selectionModel={checkbox}
          onSelectionModelChange={(e) => setCheckbox(e)}
        />
      </Box>
    </Box>
  );
};

export default UsersList;
