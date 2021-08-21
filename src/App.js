import React, { useState, useReducer } from 'react';

import { reducer, initialState } from './context/reducer';

import { Modal } from './components/Modal';
import { ManageTask } from './components/ManageTask';
import { Board } from './components/Board';

import './App.css';
import { Btn } from './Styled';

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();


function App() {

  const [update, setUpdate] = useState();

  const [state, dispatch] = useReducer(reducer, initialState);

  const { showModal } = state;

  return (
    <DispatchContext.Provider value={dispatch}>
    <StateContext.Provider value={state}>
      <div className='App'>
        
        <Btn
          btnMargin='0 0 0 10px'
          onClick={() => dispatch({type: 'TASK_MODAL', payload: {show: true, type: 'create'}})}
        >
          Create new
        </Btn>

        <div className='boards'>
          <Board 
            type='todo'
            update={setUpdate}
          />
          <Board 
            type='in_progress'
            update={setUpdate}
          />
          <Board 
            type='done'
            update={setUpdate}
          />
        </div>

        {showModal &&
          <Modal>
            <ManageTask/>
          </Modal>
        }

      </div>
    </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
