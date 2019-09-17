import Product from '@/components/Product';
import myApi from '../../src/cartApi'
const product = new Product();

const fakeData = {
    name: "Notebook VAIO Fit 15S B1211B Intel Core i5 4GB",
    id: 4,
    price: 2599,
    quantity: 5,
    image: 'https://images-americanas.b2w.io/produtos/01/00/item/133252/7/133252789G1.jpg',
}


it("calls fetch with correct url", ()=>{
    const fakeFetch = url =>{
        expect(url).toBe(myApi.products);
        return new Promise(function(resolve){
        })
    }
    product.fetchResponse(fakeFetch, "4")
})

it("Check product name from the respponse", (done)=>{
    const fakeFetch = url => {
        return Promise.resolve({
            json: () => Promise.resolve(fakeData)
        })
    }
    product.fetchResponse(fakeFetch, "4")
        .then(result => {
            expect(result.name).toBe("Notebook VAIO Fit 15S B1211B Intel Core i5 4GB")
        })
    done();
})

// jest.mock('@/components/request');
//
// it('test mock module', () => {
//     return model.requestResponse("84102")
//         .then(result => {
//             expect(result.name).toBe("Salt Lake City")
//         })
// });
//
// describe("Kelvin to Fahrenheit converter", function() {
//     it("should convert Kelvin temperature to Fahrenheit", function() {
//         expect(model.convertToFahrenheit(270)).toBe(26);
//     })
// })
