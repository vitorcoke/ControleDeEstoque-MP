import { Box } from "@mui/material";
import SeachNotebooksUsers from "../../shared/components/SaoPaulo/SeachNotebooksUsers/SeachNotebooksUsers";
import BaseLayout from "../../shared/layouts/BaseLayout";

const SeachNotebooks = () => {
  return (
    <Box>
      <BaseLayout title="Pesquisar">
        <SeachNotebooksUsers />
      </BaseLayout>
    </Box>
  );
};

export default SeachNotebooks;
