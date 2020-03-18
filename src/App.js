import React from 'react';
import Counter from './components/Counter';
import './App.css';


export const Title = () => (<h1>Introduccion a Unit Testing</h1>);

function App() {
  return (
    <section>
     <Title />
     <div className='container'>
       <span num={3} active={false}>Primero</span>
       <span num='3' active='false'>Segundo</span>
     </div>
     <input type='text' />
     <Counter />
    </section>
  );
}

export default App;
