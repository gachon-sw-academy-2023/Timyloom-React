import * as S from './OnboardingStyle';

import onboardingMain from '../../assets/onboardingMain.png';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Onboarding() {
  return (
    <div>
      <S.MainWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={7}>
              <S.ImgWrapper>
                <img width="80%" src={onboardingMain} />
              </S.ImgWrapper>
            </Grid>
            <Grid item xs={12} md={5}>
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
            </Grid>
          </Grid>
        </Box>
      </S.MainWrapper>
    </div>
  );
}

export default Onboarding;
