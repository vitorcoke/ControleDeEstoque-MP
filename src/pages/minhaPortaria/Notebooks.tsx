import { useContext } from "react";
import NotebooksSPList from "../../shared/components/SaoPaulo/NotebooksList/NotebooksSPList";
import ToolbarDetail from "../../shared/components/Toolbar-Detail/ToolbarList";
import { AuthContext } from "../../shared/contexts/AuthContext";
import { UseDeleteContext } from "../../shared/contexts/DeleteContext";
import BaseLayout from "../../shared/layouts/BaseLayout";

const Notebooks = () => {
  const { checkbox } = UseDeleteContext();

  const ButtonDelete = checkbox.length >= 1 ? true : false;

  return (
    <BaseLayout
      toolbar={
        <ToolbarDetail
          mostrarBotaoExcluirPesquisarAlterarNotebooks={ButtonDelete}
          mostrarBotaoNovoNotebooks
        />
      }
      title="Notebooks"
    >
      <NotebooksSPList />
    </BaseLayout>
  );
};

export default Notebooks;
