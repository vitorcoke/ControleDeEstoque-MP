import InsertUsers from '../shared/components/SaoPaulo/InsertUsers/InsertUsers';
import BaseLayout from '../shared/layouts/BaseLayout';


const NewUser = () => {
  return (
    <BaseLayout title="Novo Usuario">
      <InsertUsers/>
    </BaseLayout>
  );
};

export default NewUser;