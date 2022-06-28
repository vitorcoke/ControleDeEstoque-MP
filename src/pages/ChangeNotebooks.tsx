import ModifyNotebooks from '../shared/components/SaoPaulo/ModifyNotebook/ModifyNotebooks';
import BaseLayout from '../shared/layouts/BaseLayout';



const ChangeNotebooks = () => {
  return(
    <BaseLayout title="Alterar Notebook">
      <ModifyNotebooks/>
    </BaseLayout>
  );
};

export default ChangeNotebooks;