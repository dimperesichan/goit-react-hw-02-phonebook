import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

Container.propTypes = {
  children: PropTypes.node,
};

const ContainerWrapper = styled.div`
  padding: 0 10px;
  margin: 0 auto;
`;

export default Container;
