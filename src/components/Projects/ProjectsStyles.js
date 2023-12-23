import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px; /* Adjust the height as needed */
  object-fit: cover;
  border-radius: 10px 10px 0 0; /* Rounded corners only at the top */
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  gap: 2rem;
  place-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2rem;
    padding-bottom: 0;
  }
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  max-width: 300px;
  margin: 2rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.background2}; /* Use theme background color */
  color: ${(props) => props.theme.colors.primary1}; /* Use theme text color */
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Add a subtle scaling effect on hover */
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin: 1rem 0;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.accent1}; /* Use theme accent color */
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '2.5rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 1rem;
  color: ${(props) => props.theme.colors.primary1}; /* Use theme text color */
  font-size: 1.6rem;
  line-height: 24px;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.colors.primary1}; /* Use theme text color */
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme.colors.button}; /* Use theme button color */
  border-radius: 15px;
  transition: 0.5s;

  &:hover {
    background: ${(props) => props.theme.colors.accent1}; /* Use theme accent color on hover */
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center; /* Center tags horizontally */
  padding: 1rem; /* Adjusted padding for better spacing */
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  background-color: #333; /* Added background color for better visibility */
  padding: 0.5rem 1rem; /* Adjusted padding for better spacing */
  border-radius: 5px; /* Added border-radius for rounded corners */
  margin: 0.5rem; /* Added margin for better spacing between tags */
`;


