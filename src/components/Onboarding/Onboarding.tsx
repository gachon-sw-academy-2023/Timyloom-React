import * as S from './OnboardingStyle';

import onboardingMain from '../../assets/onboardingMain.png';
import dodge from '../../assets/dodge.jpg';
import trello from '../../assets/Trello.png';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import { HashRouter } from 'react-router-dom';

function Onboarding() {
  return (
    <div>
      <S.MainWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={7}>
              <Slide direction="left" triggerOnce>
                <S.ImgWrapper>
                  <img width="80%" src={onboardingMain} />
                </S.ImgWrapper>
              </Slide>
            </Grid>
            <Grid item xs={12} md={5}>
              <Slide direction="right" triggerOnce>
                <S.ContentsWrapper>
                  <S.MainContent fontSize="6vw">Creation</S.MainContent>
                  <S.MainContent fontSize="6vw">Passion</S.MainContent>
                  <S.MainContent fontWeight="none">With</S.MainContent>
                  <S.MainContent fontSize="6vw" color="#f38704">
                    TimyLoom
                  </S.MainContent>
                  <S.BtnWrapper>
                    <S.StartBtn>START</S.StartBtn>
                  </S.BtnWrapper>
                </S.ContentsWrapper>
              </Slide>
            </Grid>
          </Grid>
        </Box>
        <S.BlankDiv />
        <Slide direction="up" triggerOnce>
          <S.PhotoDiv>
            <S.TextWrapper style={{ width: '50%' }}>
              <Fade>
                <S.TextDiv style={{ fontSize: '100px', fontWeight: 'bold' }}>Life Should Be Easy.</S.TextDiv>
              </Fade>
              <Fade>
                <S.TextDiv style={{ fontSize: '30px', color: 'grey' }}>
                  Financial transactions remotely using a mobile device such as a smartphone or tablet.
                </S.TextDiv>
              </Fade>
            </S.TextWrapper>
            <S.PhotoWrapper>
              <S.DodgeImage src={dodge} />
            </S.PhotoWrapper>
          </S.PhotoDiv>
        </Slide>
        <S.BlankDiv />
        <S.ContextDiv>
          <strong>Bounce 효과</strong>
          <S.HorizontalLine />
          <Bounce direction="down" cascade triggerOnce>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
          </Bounce>
        </S.ContextDiv>
        <S.BlankDiv />
        <S.ContextDiv>
          <strong>Fade 효과</strong>
          <S.HorizontalLine />
          <Fade cascade triggerOnce>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
          </Fade>
        </S.ContextDiv>
        <S.BlankDiv />
        <S.ContextDiv>
          <strong>Flip 효과</strong>
          <S.HorizontalLine />
          <Flip cascade triggerOnce>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
          </Flip>
        </S.ContextDiv>
        <S.BlankDiv />
        <S.ContextDiv>
          <strong>Hinge 효과</strong>
          <S.HorizontalLine />
          <Hinge cascade triggerOnce>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
          </Hinge>
        </S.ContextDiv>
        <S.BlankDiv />
        <S.ContextDiv>
          <strong>JackInTheBox 효과</strong>
          <S.HorizontalLine />
          <JackInTheBox cascade triggerOnce>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
          </JackInTheBox>
        </S.ContextDiv>
        <S.BlankDiv />
        <S.ContextDiv>
          <strong>Roll 효과</strong>
          <S.HorizontalLine />
          <Roll cascade triggerOnce>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
          </Roll>
        </S.ContextDiv>
        <S.BlankDiv />
        <S.ContextDiv>
          <strong>Rotate 효과</strong>
          <S.HorizontalLine />
          <Rotate cascade triggerOnce>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
          </Rotate>
        </S.ContextDiv>
        <S.BlankDiv />
        <S.ContextDiv>
          <strong>Slide 효과</strong>
          <S.HorizontalLine />
          <Slide cascade triggerOnce>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
          </Slide>
        </S.ContextDiv>
        <S.BlankDiv />
        <S.ContextDiv>
          <strong>Zoom 효과</strong>
          <S.HorizontalLine />
          <Zoom cascade triggerOnce>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
            <S.ContextWrapperL>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperL>
            <S.ContextWrapperR>
              <S.ContextTitleBlock>
                <strong>Timyloom</strong>
                <span>팀 작업 기반의 워크스페이스</span>
              </S.ContextTitleBlock>
              <img src={trello}></img>
            </S.ContextWrapperR>
          </Zoom>
        </S.ContextDiv>
      </S.MainWrapper>
    </div>
  );
}

export default Onboarding;
