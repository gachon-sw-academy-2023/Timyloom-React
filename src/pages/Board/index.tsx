import { useState, useRef, useCallback, useEffect } from 'react';
import Board from '@/components/Board/Board';
import * as S from '@/pages/Board/indexStyle';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { boardsAtom } from '@/recoil/boards';
import Swal from 'sweetalert2';
import { BoardData } from '@/type';
import { MdDeleteForever, MdOutlineColorLens } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { temporaryBoardAtom } from '@/recoil/temporaryBoard';
import rgbHex from 'rgb-hex';
import { SketchPicker } from 'react-color';
import { useDidMountEffect } from '@/hooks/useDidMountEffect';
import axios from 'axios';

function BoardPage() {
  const { boardId } = useParams();
  const [boards, setBoards] = useRecoilState<BoardData[]>(boardsAtom);
  const [temporaryBoard, setTemporaryBoard] = useRecoilState(temporaryBoardAtom);
  const [board] = boards.filter((board) => board.boardId === boardId);
  const [boardTitle, setBoardTitle] = useState<string>(board.boardTitle);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(board.backgroundColor);
  const [brightness, setBrightness] = useState(255);

  useEffect(() => {
    setTemporaryBoard((prev) => []);
  }, []);

  useDidMountEffect(() => {
    if (!isColorPickerOpen) {
      const newBoard = { ...board, backgroundColor: backgroundColor, brightness: brightness };
      axios
        .post('/update/board', newBoard)
        .then((res) => {
          switch (res.status) {
            case 200:
              setBoards((prev) => res.data);
              break;
            default:
              break;
          }
        })
        .catch((error) => alert(error));

      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: 'success',
        title: 'Background color change',
      });
    }
  }, [isColorPickerOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBoardTitle((prev) => e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      removeFocus();
      e.preventDefault();
      handleSaveData();
    }
  };

  const removeFocus = () => {
    (document.activeElement as HTMLElement).blur();
  };

  const handleSaveData = () => {
    axios
      .post(`/update/board`, { ...board, boardTitle: boardTitle, lastUpdate: new Date().getTime() })
      .then((res) => {
        switch (res.status) {
          case 200:
            setBoards((prev) => res.data);
            break;
          default:
            break;
        }
      })
      .catch((Error) => {
        alert(Error);
      });
  };

  const handleGobackBoard = () => {
    if (temporaryBoard.length !== 0) {
      setBoards((prev) => temporaryBoard[temporaryBoard.length - 1]);
      const newTemporaryBoard = [...temporaryBoard];
      newTemporaryBoard.pop();
      setTemporaryBoard((prev) => newTemporaryBoard);
    }
  };

  const handleDeleteBoard = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        location.replace(`/remove/${boardId}`);
      }
    });
  };

  const handleColorPickerStatus = (e: React.MouseEvent<HTMLInputElement>) => {
    setIsColorPickerOpen((prev) => !isColorPickerOpen);
  };

  const handleColorChange = (sketchColor: { rgb: { r: number; g: number; b: number; a?: number | undefined } }) => {
    setBrightness((prev) => ((sketchColor.rgb.r + sketchColor.rgb.g + sketchColor.rgb.b) / 3) * sketchColor.rgb.a);
    setBackgroundColor('#' + rgbHex(sketchColor.rgb.r, sketchColor.rgb.g, sketchColor.rgb.b, sketchColor.rgb.a));
  };

  return (
    <S.BoardContainer backgroundColor={backgroundColor}>
      <S.BoardHeaderContainer>
        <S.BoardTitleContainer
          spellCheck="false"
          brightness={board.brightness}
          value={boardTitle}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => {
            handleSaveData();
          }}
        ></S.BoardTitleContainer>
        <S.BoardUtilContainer>
          <S.GoBackBtn isGoBackAvavailable={temporaryBoard.length !== 0} onClick={handleGobackBoard}>
            <RiArrowGoBackLine size="30px" color="#333333" />
          </S.GoBackBtn>
          <S.SettingBtn onClick={handleColorPickerStatus}>
            <MdOutlineColorLens size="30px" color="#333333" />
          </S.SettingBtn>
          <S.DeleteBtn onClick={handleDeleteBoard}>
            <MdDeleteForever size="30px" color="#333333" />
          </S.DeleteBtn>
          {isColorPickerOpen && (
            <S.PopOver>
              <SketchPicker color={backgroundColor} onChange={handleColorChange} />
            </S.PopOver>
          )}
        </S.BoardUtilContainer>
      </S.BoardHeaderContainer>
      <Board boards={boards} setBoards={setBoards} boardId={boardId} />
    </S.BoardContainer>
  );
}
export default BoardPage;
