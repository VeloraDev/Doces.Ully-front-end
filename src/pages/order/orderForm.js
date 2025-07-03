import { Form } from './styles';
import { InputSection } from '../../styles/ComponentsStyles';
import CustomSelect from '../../components/form/customSelect';
import InputOrder from '../../components/form/inputOrder';

function OrderForm({
  handleSubmit,
  onSubmit,
  onError,
  is_pickup,
  register,
  setValue,
  watch,
}) {
  const neighborhood = watch('neighborhood');
  const payment_method = watch('payment_method');

  const neighborhoods = ['centro', 'casinhas', 'croatá', 'vila esperança'];
  const payment_methods = ['pix', 'dinheiro'];

  return (
    <Form id="orderForm" onSubmit={handleSubmit(onSubmit, onError)}>
      {!is_pickup && (
        <>
          <CustomSelect
            label="bairro"
            options={neighborhoods}
            selectLabel={neighborhood}
            onSelect={neigh => {
              setValue('neighborhood', neigh);
            }}
          />

          <InputSection>
            <InputOrder label="rua" register={register} field="street" />
            <InputOrder label="N°" register={register} field="number" />
          </InputSection>
          <InputOrder
            label="complemento"
            register={register}
            field="landmark"
          />
        </>
      )}

      <CustomSelect
        label="forma de pagamento"
        options={payment_methods}
        selectLabel={payment_method}
        onSelect={method => setValue('payment_method', method)}
      />
      <input type="hidden" {...register('neighborhood')} />
      <input type="hidden" {...register('payment_method')} />
      <input type="hidden" {...register('is_pickup')} />
    </Form>
  );
}

export default OrderForm;
