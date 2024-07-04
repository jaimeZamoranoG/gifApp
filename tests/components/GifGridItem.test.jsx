import { render, screen } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"

describe("Pruebas en GifGridItem",()=>{

    const title = 'Cookie Monster Hello GIF by Sesame Street';
    const url = 'https://media2.giphy.com/media/GRPy8MKag9U1U88hzY/giphy.gif?cid=381d12a0louw4bwtfpmxgk57uw5jofj4sz5mkp4gke567sol&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test("Debe estar como el snapshot",()=>{
        const {container}  = render(<GifGridItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con url y alt indicado',()=>{
        render(<GifGridItem title={title} url={url} />);
        //screen.debug();
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe estar el titulo como texto',()=>{
        render(<GifGridItem title={title} url={url} />);
        expect(screen.findByText(title)).toBeTruthy();
    });

})