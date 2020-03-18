import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Title } from './App';

// describe('Grupo de pruebas', () => {
//   test('renders learn react link', () => {
//     const { getByText } = render(<App />);
//     const linkElement = getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });
//   test('Prueba de números', () => {
//     expect(10).toBe(10);
//   });
    
// })

configure({
  adapter: new Adapter()
});

describe('Probando componente App', () => {
  test('Probando renderizado de componente', () => {
    const wrapper = shallow(<App />);
    //console.log(wrapper.html());
    //console.log(wrapper.find('.container').html());
    //console.log(wrapper.find('div > p').html());
    //console.log(wrapper.find('[num=3]').html());

    //console.log(wrapper.find(Title).html());
    //expect(wrapper.find('h1').html()).toBe('<h1>Introduccion a Unit Testing</h1>');
  });
});