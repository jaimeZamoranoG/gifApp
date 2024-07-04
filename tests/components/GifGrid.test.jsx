import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//hacer un mock de este path
jest.mock('../../src/hooks/useFetchGifs');

describe("Pruebas en GifGrid",()=>{

    const category="Hello";

    test("debe mostrar el loading al inicio",()=>{

        //Suponer lo que retorna el mock
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>)
        //screen.debug();
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect ( screen.getByText(category)).toBeTruthy();
    });

    test("se deben mostrar items cuando se cargan las imagenes con useFetchGifs",()=>{

        const gifs = [{
            id:'abc',
            title:'Hello1',
            url: '83qjf8qwdawfm9q2q'
        },
        {
            id:'gad',
            title:'Hello2',
            url: '83qjf8qwdmdgq9q2q'
        }];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    });

})