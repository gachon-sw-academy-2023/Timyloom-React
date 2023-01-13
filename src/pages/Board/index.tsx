import Board from '@/components/Board/Board';
import { useParams } from 'react-router-dom';

function BoardPage() {
  let { boardId } = useParams();
  return <Board boardId={boardId} />;
}
export default BoardPage;
