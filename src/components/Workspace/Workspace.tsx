import Sidebar from '../Sidebar/Sidebar';
import WorkspaceContent from './WorkspaceContent';
import * as S from './WorkspaceStyle';

function Workspace() {
  return (
    <S.WorkspaceWrapper>
      <Sidebar />
      <S.ContentWrapper>
        <S.HeaderWrapper>
          <S.SearchWrapper>{/* <S.Search></S.Search> */}</S.SearchWrapper>
        </S.HeaderWrapper>
        <WorkspaceContent />
      </S.ContentWrapper>
    </S.WorkspaceWrapper>
  );
}

export default Workspace;
