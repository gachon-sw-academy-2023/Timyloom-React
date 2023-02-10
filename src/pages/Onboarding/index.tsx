import React, { useEffect, useState } from 'react';
import * as S from '@/pages/Onboarding/indexStyle';
import MainVideo from '@/assets/video/landing.mp4';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Slide } from 'react-awesome-reveal';
import { fieldData } from '@/pages/Onboarding/fieldData';
import { useNavigate } from 'react-router-dom';

function Onboarding() {
  const [fields, setFields] = useState(fieldData);
  const [gradationColor, setGradationColor] = useState('');
  const navigate = useNavigate();

  const handleField = (fieldIndex: number) => {
    const tempFields = fields;
    tempFields[fieldIndex].select = !tempFields[fieldIndex].select;
    setFields((prev) => [...tempFields]);

    const colorArr = gradationColor.split(', ');
    if (colorArr[0] === '') {
      colorArr.pop();
    }

    if (colorArr.indexOf(tempFields[fieldIndex].color) >= 0) {
      colorArr.splice(colorArr.indexOf(tempFields[fieldIndex].color), 1);
      const newGradationColor = colorArr.join(', ');
      setGradationColor((prev) => newGradationColor);
    } else {
      colorArr.push(tempFields[fieldIndex].color);
      const newGradationColor = colorArr.join(', ');
      setGradationColor((prev) => newGradationColor);
    }
  };

  return (
    <S.MainWrapper>
      <Box sx={{ flexGrow: 1, my: 'auto' }}>
        <Grid container spacing={0} sx={{ my: 'auto' }}>
          <Grid item xs={12} md={12} lg={6}>
            <Slide direction="left" triggerOnce>
              <S.LeftContentsContainer>
                <S.Video src={MainVideo} autoPlay loop muted />
              </S.LeftContentsContainer>
            </Slide>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Slide direction="right" triggerOnce>
              <S.RightContentsContainer>
                <S.MainTitle>What schedule will you manage?</S.MainTitle>
                <S.MainTitle>With us, everything is possible</S.MainTitle>
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
                        <div>{field.icon}</div>
                        <S.Title>{field.title}</S.Title>
                      </S.Field>
                    );
                  })}
                </S.FieldContainer>
                <S.BtnWrapper>
                  <S.StartBtn
                    gradationColor={gradationColor}
                    onClick={() => {
                      navigate('/workspace/boards');
                    }}
                  >
                    START
                  </S.StartBtn>
                </S.BtnWrapper>
              </S.RightContentsContainer>
            </Slide>
          </Grid>
        </Grid>
      </Box>
    </S.MainWrapper>
  );
}

export default Onboarding;
