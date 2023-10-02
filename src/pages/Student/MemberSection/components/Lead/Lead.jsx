import React, { useCallback, useContext } from 'react';
import { styled } from 'styled-components';
import { MouseContext } from '../../../../../context/MouseContext';
import { LeadData } from '../../../../../constants/Team/data';


function Lead() {
  const { cursorChangeHandler } = useContext(MouseContext);

  const cursorChangeLinkedInHandler = useCallback(() => {
    cursorChangeHandler('LinkedIn');
  }, [cursorChangeHandler]);

  const cursorChangeEmptyHandler = useCallback(() => {
    cursorChangeHandler('');
  }, [cursorChangeHandler]);

  return (
    <Container data-scroll>
      <TopSection>
        <TextSection data-scroll data-scroll-speed="-1.5">
          GDSC <br />LEAD 2023-24 MGMCET
        </TextSection>
      </TopSection>

      {LeadData.map((lead, idx) => (
        <ImageSection key={idx}>
          <a href={lead.linkedin} target='__blank'>
          <Photograph
            onMouseEnter={cursorChangeLinkedInHandler}
            onMouseLeave={cursorChangeEmptyHandler}
            >
            <NameSection>{lead.name}</NameSection>
            <TiltedImage
              src={`/assets/Profile/${lead.profile}`}
              alt="Lead's Image"
              />
          </Photograph>
          </a>
          <LeftTiltedCard color="blue" />
          <RightTiltedCard color="red" />
        </ImageSection>
      ))}

    </Container>
  );
}

export default Lead;

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: none;
  position: relative; /* Required for stacking */
`;

const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 100%;
  font-size: 60px;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  cursor: pointer;
`;

const ImageSection = styled.div`
  flex: 1;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

const Photograph = styled.div`
  height: 450px;
  width: 350px;
  background-color: #EA4435;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  color: white;

  ${({ theme }) => theme.mobile`
    height: 400px;
    width: 300px;
  `}
`;

const NameSection = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;

  ${({ theme }) => theme.mobile`
    font-size: 20px;
  `}
`;

const TiltedImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  // border: 5px solid #4285F4;
  border-radius: 10px;
  // transform: rotate(3deg);
  object-fit: contain;
`;

const TiltedCardBase = styled.div`
  position: absolute;
  top: 50%;
  width: 100px; /* Adjust the width as needed */
  height: 80px; /* Adjust the height as needed */
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: 0 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: -1; /* Behind the Photograph */
  ${({ theme }) => theme.mobile`
    height: 400px;
    width: 300px;
  `}
`;

const LeftTiltedCard = styled(TiltedCardBase)`
  height: 450px;
  width: 350px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  display: inline-block; 
  background-color: #34A853;
  transform: translateX(0) translateY(-50%) rotate(-4deg);
  ${({ theme }) => theme.mobile`
    height: 400px;
    width: 300px;
  `}
`;

const RightTiltedCard = styled(TiltedCardBase)`
  height: 450px;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  display: inline-block; 
  background-color: #FBBC05;
  transform: translateX(0) translateY(-50%) rotate(5deg);
  ${({ theme }) => theme.mobile`
    height: 400px;
    width: 300px;
  `}
`;
