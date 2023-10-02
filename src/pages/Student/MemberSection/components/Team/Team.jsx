import React from 'react';
import styled from 'styled-components';
import TeamCard from './TeamCard';
import { Teams } from '../../../../../constants/Team/data';

function Team() {
  return (
    <Container data-scroll>
      <TopSection data-scroll data-scroll-speed="10">
        <Title style={{ display: 'inline' }}>
          Meet Our Extended Teams : &nbsp;
          <Red style={{ color: 'red', display: 'inline' }}>Building</Red>&nbsp;
          <Blue style={{ color: 'blue', display: 'inline' }}>Together</Blue>,&nbsp;
          <Green style={{ color: 'green', display: 'inline' }}>Growing</Green>&nbsp;
          <Yellow style={{ color: 'yellow', display: 'inline' }}>Together</Yellow>
        </Title>
      </TopSection>
      <BottomSection>
        <CardGrid>
          {Teams.map((team) => (
            <TeamCard key={team.id} name={team.name} department={team.department} position={team.position} gender={team.gender} profile={team.profile} linkedin={team.linkedin} />
          ))}
        </CardGrid>
      </BottomSection>
    </Container>
  );
}

export default Team;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 600vh; /* Total height of 300vh */
  width: 100vw;
/* //   ${({ theme }) => theme.tablet`
//   height: 600vh;
// `} */
`;

const TopSection = styled.div`
  flex: 0.5; /* Take up the first 100vh */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  text-align: center;
  padding: 50px;

  ${({ theme }) => theme.tablet`
    font-size: 30px;
  `}

  ${({ theme }) => theme.mobile`
    font-size: 20px;
  `}
`;

const BottomSection = styled.div`
  flex: 2; /* Take up the next 200vh */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
`;



const CardGrid = styled.div`
margin: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Show 4 cards in a row by default */
  gap: 15px; /* Adjust the gap between cards as needed */

  ${({ theme }) => theme.mobile`
    grid-template-columns: 1fr;
  `}
  
  ${({ theme }) => theme.tablet`
    grid-template-columns: repeat(2, 1fr); /* Show 2 cards in a row for tablets */
  `}
`;

const Title = styled.div`
  display: flex;
`;

const Red = styled.div`
color: red;
`;

const Blue = styled.div`
  color: blue;
`;

const Green = styled.div`
  color: green;
`;

const Yellow = styled.div`
  color: yellow;
`;

