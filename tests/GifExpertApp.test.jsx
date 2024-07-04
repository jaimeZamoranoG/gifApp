import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe("Pruebas en GifExpertApp",()=>{

    const inputValue = 'Hello';

    test("Al enviar categoria identica no se actualiza listado",()=>{
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        //se debe tener aria-label para que pueda ser encontrado
        const form = screen.getByRole('form');
        fireEvent.input(input,{
            target:{value: inputValue}
        });
        fireEvent.submit(form);
        fireEvent.input(input,{
            target:{value: inputValue}
        });
        fireEvent.submit(form);
        expect(screen.getAllByRole('heading',{level:3}).length).toBe(1);
    });

})