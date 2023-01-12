import ListLayout from '@/components/List/List';
import { useParams } from 'react-router-dom';

function List() {
  let { boardId } = useParams();
  console.log(boardId);
  return <ListLayout boardId={boardId} />;
}
export default List;
