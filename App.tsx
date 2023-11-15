import { FC } from 'react';
import './style.css';
import ColorList from './ColorList';


export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <ColorList/>
    </div>
  );
};
