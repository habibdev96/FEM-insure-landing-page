import styled from 'styled-components';
import { BannerTitle } from './styledElements/Title';
import { Button } from './styledElements/Button';
import { maxWidthMd } from '../abstracts/Mixins';
import bgPatternRight from '../images/bg-pattern-intro-right-desktop.svg';
import Responsive from '../abstracts/Responsive';

const Container = styled.div`
  ${maxWidthMd}
  box-shadow: var(--mainShadow);
  background-color: var(--veryDarkViolet);
  padding: 8rem;
  margin: 10rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  position: relative;
  overflow: hidden;

  ${Responsive.sm`
    padding: 3rem;
  `}

  .bg-pattern {
    position: absolute;
    pointer-events: none;
  }
`;

const Cta = () => {
  return (
    <section data-aos='fade-in'>
      <Container>
        <img src={bgPatternRight} className='bg-pattern' alt='' />
        <BannerTitle>
          Find out more <br /> about how we work
        </BannerTitle>
        <Button secondary>How We Work</Button>
      </Container>
    </section>
  );
};

export default Cta;
