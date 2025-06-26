import { CrumbContainer, CrumbList, CrumbItem, CrumbLink } from './styles';
import { Line } from '../../styles/ComponentsStyles';

function BreadCrumbs({ items, size }) {
  return (
    <CrumbContainer>
      <CrumbList $size={size}>
        {items.map((item, index) => {
          const isLast = index === items.lenght - 1;
          return (
            <CrumbItem key={item.label}>
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <CrumbLink to={item.to} $size={size}>
                  {item.label}
                </CrumbLink>
              )}
            </CrumbItem>
          );
        })}
      </CrumbList>
      <Line />
    </CrumbContainer>
  );
}

export default BreadCrumbs;
