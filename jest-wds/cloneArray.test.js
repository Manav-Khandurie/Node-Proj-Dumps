const cloneArray=require('./cloneArray');

test('Testing cloneAeeay' , () => {
    const array = [1,2,3];
    //expect( cloneArray(array)).toBe(array)  PassByValue and PassByRefernce , compare by value noot refrence
    expect( cloneArray(array)).toEqual(array)
    expect( cloneArray(array)).not.toBe(array)
})