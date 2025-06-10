import React, { useState, useRef } from 'react';
import {
  OrderContainer,
  AddressContainer,
  OptionPaymentSection,
  Background,
  ActionPaymentButton,
  ParagraphButton,
  Title,
  Form,
  InputSection,
  DivInput,
  SelectContainer,
  Select,
  SelectTop,
  OptionsContainer,
  OptionsSection,
  Option,
  CheckoutSection,
  Paragraph,
  ActionValue,
  ActionOrder,
} from './styles';
import {
  WhatsIcon,
  WhatsInputIcon,
  UserIcon,
  DeliveryIcon,
  PeopleIcon,
  ArrowSelectIcon,
} from '../../assets';

import { Line } from '../../styles/ComponentsStyles';
import Footer from '../../components/footer/index';

function Order() {
  const [nome, setNome] = useState('');
  const [whats, setWhats] = useState('');
  const [bairro, setBairro] = useState(null);
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [pagamento, setPagamento] = useState('');
  const [select, setSelect] = useState('entrega');
  const [onSelectPagamento, setOnSelectPagamento] = useState(false);
  const [onSelectBairro, setOnSelectBairro] = useState(false);

  const refs = {
    nome: useRef(null),
    whats: useRef(null),
    bairro: useRef(null),
    rua: useRef(null),
    numero: useRef(null),
    complemento: useRef(null),
    pagamento: useRef(null),
  };

  const selectMode = [
    { key: 'entrega', icon: DeliveryIcon, label: 'Entrega' },
    { key: 'retirada', icon: PeopleIcon, label: 'Retirada' },
  ];
  const optionsBairros = ['centro', 'casinhas', 'croatá', 'vila esperança'];
  const optionsPagamentos = ['pix', 'dinheiro'];

  function handleSubmit() {}

  return (
    <OrderContainer>
      <Line />
      <AddressContainer>
        <Title>Endereço</Title>
        <OptionPaymentSection>
          <Background $select={select}></Background>
          {selectMode.map(({ key, icon: Icon, label }) => (
            <ActionPaymentButton key={key} onClick={() => setSelect(key)}>
              <Icon />
              <ParagraphButton $select={select === key}>
                {label}
              </ParagraphButton>
            </ActionPaymentButton>
          ))}
        </OptionPaymentSection>

        <Form onSubmit={handleSubmit}>
          <InputSection>
            <DivInput onClick={() => refs.nome.current?.focus()}>
              <UserIcon width={12} height={16} />
              <input
                ref={refs.nome}
                type="text"
                placeholder="NOME"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
            </DivInput>

            <DivInput onClick={() => refs.whats.current?.focus()}>
              <WhatsInputIcon />
              <input
                ref={refs.whats}
                type="text"
                placeholder="WHATSAPP"
                value={whats}
                onChange={e => setWhats(e.target.value)}
              />
            </DivInput>
          </InputSection>

          <SelectContainer>
            <DivInput onClick={() => refs.bairro.current?.focus()}>
              <label htmlFor="bairro">bairro</label>
              <Select
                ref={refs.bairro}
                id="bairro"
                type="text"
                onClick={() => setOnSelectBairro(!onSelectBairro)}>
                <SelectTop>
                  <p>{bairro ? bairro : 'Seleção'}</p>
                  <ArrowSelectIcon />
                </SelectTop>
              </Select>
            </DivInput>

            <OptionsContainer $onSelect={onSelectBairro}>
              <OptionsSection $onSelect={onSelectBairro}>
                {optionsBairros.map(option => (
                  <Option
                    key={option}
                    onClick={() => {
                      setBairro(option);
                      setOnSelectBairro(false);
                    }}>
                    {option}
                  </Option>
                ))}
              </OptionsSection>
            </OptionsContainer>
          </SelectContainer>

          <InputSection>
            <DivInput onClick={() => refs.rua.current?.focus()}>
              <label htmlFor="rua">rua</label>
              <input
                ref={refs.rua}
                id="rua"
                type="text"
                value={rua}
                onChange={e => setRua(e.target.value)}
              />
            </DivInput>

            <DivInput onClick={() => refs.numero.current?.focus()}>
              <label htmlFor="numero">N°</label>
              <input
                ref={refs.numero}
                id="numero"
                type="text"
                value={numero}
                onChange={e => setNumero(e.target.value)}
              />
            </DivInput>
          </InputSection>

          <DivInput onClick={() => refs.complemento.current?.focus()}>
            <label htmlFor="complemento">complemento</label>
            <input
              ref={refs.complemento}
              id="complemento"
              type="text"
              value={complemento}
              onChange={e => setComplemento(e.target.value)}
            />
          </DivInput>

          <SelectContainer>
            <DivInput onClick={() => refs.pagamento.current?.focus()}>
              <label htmlFor="pagamento">forma de pagamento</label>
              <Select
                ref={refs.pagamento}
                id="pagamento"
                type="text"
                onClick={() => setOnSelectPagamento(!onSelectPagamento)}>
                <SelectTop>
                  <p>{pagamento ? pagamento : 'Forma de pagamento'}</p>
                  <ArrowSelectIcon />
                </SelectTop>
              </Select>
            </DivInput>

            <OptionsContainer>
              <OptionsSection $onSelect={onSelectPagamento}>
                {optionsPagamentos.map(option => (
                  <Option
                    key={option}
                    onClick={() => {
                      setPagamento(option);
                      setOnSelectPagamento(false);
                    }}>
                    {option}
                  </Option>
                ))}
              </OptionsSection>
            </OptionsContainer>
          </SelectContainer>
        </Form>

        <CheckoutSection>
          <Paragraph>Subtotal: </Paragraph>
          <Paragraph>Taxa de entrega: </Paragraph>
          <ActionValue>Valor a pagar:</ActionValue>
          <ActionOrder>
            <WhatsIcon />
            <p>Enviar pedido</p>
          </ActionOrder>
        </CheckoutSection>
      </AddressContainer>
      <Footer />
    </OrderContainer>
  );
}

export default Order;
