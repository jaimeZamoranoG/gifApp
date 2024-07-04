import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en AddCategory",()=>{

    test("debe cambiar el valor de la caja de texto",()=>{
        render(<AddCategory onNewCategory={ ()=>{} } />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{
            target:{value: 'Hola'}
        });
        expect(input.value).toBe('Hola');
    });

    test("debe llamar onNewCategory si input tiene valor valido",()=>{
        const inputValue='Hello';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        //se debe tener aria-label para que pueda ser encontrado
        const form = screen.getByRole('form');
        fireEvent.input(input,{
            target:{value: inputValue}
        });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test("no se debe llamar onNewCategory si input está vacio",()=>{
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory } />);
        //se debe tener aria-label para que pueda ser encontrado
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });

})