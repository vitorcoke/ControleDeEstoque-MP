import { Box, Paper } from "@mui/material";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useEffect, useState } from "react";
import { UseDeleteContext } from "../../../contexts/DeleteContext";
import NotebooksSPServices from "../../../services/sao_paulo/notebooks/NotebooksSPServices";

interface INotebooksGetAll {
  id: number;
  data: string;
  marca: string;
  modelo: string;
  mac: string;
  serial: string;
  patrimonio: number;
}

const NotebooksList = () => {
  const [notebooks, setNotebooks] = useState<INotebooksGetAll[]>([]);
  const { setCheckbox, checkbox } = UseDeleteContext();

  const columns = [
    { field: "col1", headerName: "Data", width: 280 },
    { field: "col2", headerName: "Marca", width: 280 },
    { field: "col3", headerName: "Modelo", width: 280 },
    { field: "col4", headerName: "MAC", width: 280 },
    { field: "col5", headerName: "N° Serial", width: 270 },
    { field: "col6", headerName: "Patrimônio", width: 160 },
  ];

  const rows =
    notebooks.length > 0
      ? notebooks.map((notebook) => ({
          id: notebook.id,
          col1: notebook.data,
          col2: notebook.marca,
          col3: notebook.modelo,
          col4: notebook.mac,
          col5: notebook.serial,
          col6: notebook.patrimonio,
        }))
      : [];

  useEffect(() => {
    NotebooksSPServices.getAll().then((res) => setNotebooks(res));
  }, []);

  return (
    <Box component={Paper}>
      <div style={{ height: "70vh", width: "100%", textAlign: "center" }}>
        <DataGridPro
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          selectionModel={checkbox}
          onSelectionModelChange={(e) => setCheckbox(e)}
        />
      </div>
    </Box>
  );
};

export default NotebooksList;
