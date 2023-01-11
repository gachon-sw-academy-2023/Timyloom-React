import Sidebar from '../Sidebar/Sidebar';
import * as S from './WorkspaceStyle';

function Workspace() {
  return (
    <S.WorkspaceWrapper>
      <Sidebar />
      <S.ContentWrapper>
        <S.HeaderWrapper>
          <S.SearchWrapper>{/* <S.Search></S.Search> */}</S.SearchWrapper>
        </S.HeaderWrapper>
        <S.ArticleWrapper>dd</S.ArticleWrapper>
      </S.ContentWrapper>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
