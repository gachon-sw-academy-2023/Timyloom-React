import { useEffect, useState } from 'react';
import * as S from '@/pages/Onboarding/indexStyle';
import { movePage } from '@/utils/movePage';
import dodge from '@/assets/images/dodge.jpg';
import trello from '@/assets/images/Trello.png';
import MainVideo from '@/assets/video/landing.mp4';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';
import { fieldData } from '@/pages/Onboarding/colorData';
import { AiOutlineWindows } from 'react-icons/ai';

function Onboarding() {
  const [fields, setFields] = useState(fieldData);
  const [gradationColor, setGradationColor] = useState('');

  const handleField = (fieldIndex: number) => {
    const tempFields = fields;
    tempFields[fieldIndex].select = !tempFields[fieldIndex].select;
    setFields((prev) => [...tempFields]);

    let colorArr = gradationColor.split(', ');
    if (colorArr[0] === '') {
      colorArr.pop();
    }

    if (colorArr.indexOf(tempFields[fieldIndex].color) >= 0) {
      colorArr.splice(colorArr.indexOf(tempFields[fieldIndex].color), 1);
      let newGradationColor = colorArr.join(', ');
      setGradationColor((prev) => newGradationColor);
    } else {
      colorArr.push(tempFields[fieldIndex].color);
      let newGradationColor = colorArr.join(', ');
      setGradationColor((prev) => newGradationColor);
    }
  };

  return (
    <div>
      <S.MainWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Slide direction="left" triggerOnce>
                {/* <S.MainImg /> */}
                <S.VideoContainer>
                  <S.Video src={MainVideo} autoPlay loop muted />
                </S.VideoContainer>
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <Slide direction="right" triggerOnce>
                <S.ContentsWrapper>
                  <S.MainTitle>What schedule will you manage?</S.MainTitle>
                  <S.MainTitle>With us, everything is possible.</S.MainTitle>
                  <S.FieldContainer>
                    {fields.map((field, index) => {
                      return (
                        <S.Field
                          key={field.index}
                          onClick={() => {
                            handleField(field.index);
                          }}
                          field={field}
                        >
                          <AiOutlineWindows size="50px" fill={field.color} />
                          <S.Title>{field.title}</S.Title>
                        </S.Field>
                      );
                    })}
                  </S.FieldContainer>
                  <S.BtnWrapper>
                    <S.StartBtn
                      gradationColor={gradationColor}
                      onClick={() => {
                        movePage('/workspace');
                      }}
                    >
                      START
                    </S.StartBtn>
                  </S.BtnWrapper>
                </S.ContentsWrapper>
              </Slide>
            </Grid>
          </Grid>
        </Box>
        {/* react-awesome-reveal 데모입니다. 추후에 코드 정리 필요 */}
      </S.MainWrapper>
    </div>
  );
}

export default Onboarding;
