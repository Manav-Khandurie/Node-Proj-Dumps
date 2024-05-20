const subtract=require('./subtract');

test('Sub two numbers' , ()=>{
    expect( 
        subtract(1,2)
    ).toBe(-1);
})