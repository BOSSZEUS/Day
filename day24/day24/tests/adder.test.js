const adder = require('../adder.js')

describe('Adder Testing Suite', () => {
  test('1 + 1 = 2', () => {
    expect(adder(1, 1)).toBe(2)
  })
})



const sub = require('../adder.js')

describe('sub testing suite', ()=>{
  test('11 - 2 = 9', () =>{
    expect(sub(11,2)).toBe(9)
  })
})