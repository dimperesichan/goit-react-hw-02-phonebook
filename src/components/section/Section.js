import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};

Section.defaultProps = {
  title: 'Section title',
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const SectionWrapper = styled.section`
  padding: 0 20px;
  margin: 0;
`;

const SectionTitle = styled.h2`
  color: var(--yellow);
  font-size: 32px;
  font-family: var(--big);
  text-align: center;
`;

export default Section;
