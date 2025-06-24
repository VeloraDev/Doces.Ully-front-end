import React from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  ActionGroup,
  CancelButton,
  ConfirmButton,
  ConfirmContainer,
  ConfirmSection,
  ConfirmText,
} from './styled';
import { Line } from '../../styles/ComponentsStyles';

function ConfirmModal({ visible, onCancel, onConfirm, message, keyId }) {
  return (
    <AnimatePresence>
      {visible && (
        <ConfirmContainer
          key={keyId}
          initial={{ opacity: 0, scale: 0.98 }}
          exit={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          animation={visible ? 'fadeIn' : 'fadeOut'}
          onClick={onCancel}>
          <ConfirmSection onClick={e => e.stopPropagation()}>
            <ConfirmText>{message}</ConfirmText>
            <Line />
            <ActionGroup>
              <CancelButton onClick={onCancel}>Cancelar</CancelButton>
              <ConfirmButton onClick={onConfirm}>Sim</ConfirmButton>
            </ActionGroup>
          </ConfirmSection>
        </ConfirmContainer>
      )}
    </AnimatePresence>
  );
}

export default ConfirmModal;
