import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import List from './List';


configure({
    adapter: new Adapter()
  });

  describe('Probando componente <List />', () =>{
    const fruits = [
        {name: 'fresa', id: 1},
        {name: 'manzana', id: 2},
        {name: 'naranja', id: 3},
        {name: 'mango', id: 4}
    ];
    let wrapper;

    beforeEach(()=>{
        wrapper  = shallow(<List title='Frutas' list={fruits}/>);
    });

    test('Validar nodos', () => {
        // Validar si existe nodo
        expect(wrapper.find('h1').exists()).toBe(true);
        // Validar que tenga una clase css
        expect(wrapper.find('h1').hasClass('big')).toBe(true);
        // validar cantidad de elementos hijo
            //expect(wrapper.find('ul').children().length).toBe(4);

        // Validar contenido de texto
        console.log(wrapper.find('li').first().html());
        expect(wrapper.find('ul').childAt(2).text()).toBe('naranja');

        // Validar el tipo de nodo / elemento
        expect(wrapper.find('ul').childAt(2).type()).toBe('li');

    });
    test('Validar actualizacion de props', ()=>{
        expect(wrapper.find('li').length).toBe(4);

        wrapper.setProps({
            list: [
                { name: 'kiwi', id: 5 }
            ]
        });

        expect(wrapper.find('li').length).toBe(1);

    });
    test('Validar con snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
  });