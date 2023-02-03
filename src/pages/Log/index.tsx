import * as S from '@/pages/Log/indexStyle';
import { LogsInterface } from '@/type';

interface LogProps {
  logs: LogsInterface[];
}

function Log({ logs }: LogProps) {
  return (
    <S.LogWrapper>
      <b>로그 임시공간!!!!</b>
      {logs.map((log, index) => (
        <li key={index}>{`${log.logName}, ${Math.floor((new Date().getTime() - log.date) / 60000)}분전`}</li>
      ))}
    </S.LogWrapper>
  );
}
export default Log;
