import PerifericosList from "../../shared/components/SaoPaulo/PerifericosList/PerifericosList";
import ToolbarList from "../../shared/components/Toolbar-Detail/ToolbarList";
import BaseLayout from "../../shared/layouts/BaseLayout";

const Perifericos = () => {
  return (
    <BaseLayout title="Perifericos" toolbar={<ToolbarList />}>
      <PerifericosList />
    </BaseLayout>
  );
};

export default Perifericos;
