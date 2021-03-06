import styled from 'styled-components';
import { Underline } from './styledElements/Underline';
import { SectionTitle } from './styledElements/Title';
import {
  headingStyles,
  maxWidthLg,
  sectionSpacingMd,
  textStyles,
} from '../abstracts/Mixins';
import featureIconOne from '../images/icon-snappy-process.svg';
import featureIconTwo from '../images/icon-affordable-prices.svg';
import featureIconThree from '../images/icon-people-first.svg';
import Responsive from '../abstracts/Responsive';

const Container = styled.div`
  ${maxWidthLg}
  padding: 30rem 2rem 0 2rem;

  ${Responsive.md`
    padding: 10rem 2rem 0 2rem; 
  `}

  .features {
    ${sectionSpacingMd}
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;

    ${Responsive.md`
      grid-template-columns: 1fr;
      text-align: center;
    `}
  }

  .feature {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .feature-icon {
    width: 10rem;

    ${Responsive.md`
      margin: 0 auto;
    `}
  }

  .feature-heading {
    ${headingStyles}
    font-size: var(--md);
  }

  .feature-desc {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--lightGray);
  }
`;

const Features = () => {
  return (
    <section>
      <Container>
        <Underline dark></Underline>
        <SectionTitle>We're different</SectionTitle>
        <div className='features'>
          <article className='feature' data-aos='fade-up'>
            <img
              src={featureIconOne}
              alt='icon of a lighting bolt'
              className='feature-icon'
            />
            <h4 className='feature-heading'>Snappy Process</h4>
            <p className='feature-desc'>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </article>
          <article className='feature' data-aos='fade-up' data-aos-delay='100'>
            <img
              src={featureIconTwo}
              alt='icon of a dollar sign'
              className='feature-icon'
            />
            <h4 className='feature-heading'>Affordable Prices</h4>
            <p className='feature-desc'>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </article>
          <article className='feature' data-aos='fade-up' data-aos-delay='200'>
            <img
              src={featureIconThree}
              alt='icon of a user'
              className='feature-icon'
            />
            <h4 className='feature-heading'>People First</h4>
            <p className='feature-desc'>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Features;
