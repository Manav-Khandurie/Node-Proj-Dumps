import { describe , test , it , expect } from "vitest";
import {fizzBuzz, max} from '../src/intro'
describe("MAX" , ()=>{
    it('should return the first argument if it is greater' , ()=>{
        // AAA Aragnge ACt Assert
        const a=2,b=1;
        const result=max(a,b)
        expect(result).toBe(2);
        // expect(max(2,1)).toBe(2);
    })
    it('should return the second argument if it is greater' , ()=>{
        expect(max(1,2)).toBe(2);
    })
    it('should return the first argument if it is equal' , ()=>{
        expect(max(2,2)).toBe(2);
    })
})

describe('Fizz Number', ()=>{
    it('should return fizzbuzz' , ()=>{
        expect(fizzBuzz(15)).toEqual('FizzBuzz');
    })
    it('should return fizz' , ()=>{
        expect(fizzBuzz(9)).toEqual('Fizz');
    })
    it('should return buzz' , ()=>{
        expect(fizzBuzz(10)).toEqual('Buzz');
    })
})