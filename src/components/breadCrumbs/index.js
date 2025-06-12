import React from 'react';
import { CrumbContainer, CrumbList, CrumbItem, CrumbLink } from './styles';
import { Line } from '../../styles/ComponentsStyles';

const BreadCrumbs = ({ items }) => {
  return (
    <CrumbContainer>
      <CrumbList>
        {items.map((item, index) => {
          const isLast = index === items.lenght - 1;
          return (
            <CrumbItem key={item.label}>
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <CrumbLink to={item.to}>{item.label}</CrumbLink>
              )}
            </CrumbItem>
          );
        })}
      </CrumbList>
      <Line />
    </CrumbContainer>
  );
};

export default BreadCrumbs;
