import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
  transition: transform 0.3s ease-in-out;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding: 4rem;
  place-items: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    padding: 2rem;
  }
`;

export const BlogCard = styled.div`
  backdrop-filter: blur(10px); /* Glassmorphism effect */
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 350px;
  margin: 2rem;
  padding: 2rem;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-10px) rotate(1deg); /* 3D rotation effect */
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2); /* Enhanced shadow */
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
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colors.accent1};
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? '2.4rem' : '2rem')};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 1rem auto;
  border: 0;
  background: ${(props) => props.theme.colors.accent1};
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 1rem;
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.6rem;
  line-height: 1.6;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const ExternalLinks = styled.a`
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.6rem;
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.button}, ${(props) => props.theme.colors.accent1});
  border-radius: 10px;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.accent1};
    transform: translateY(-3px);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
`;

export const Tag = styled.li`
  color: white;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin: 0.3rem;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.button};
    transform: scale(1.1);
  }
`;