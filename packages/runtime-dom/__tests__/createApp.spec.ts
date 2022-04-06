describe('jest do', () => {
  test('start', () => {
    function add (x: number, y: number) {
      return x + y
    }
    expect(add(1, 2)).toEqual(3)
    expect(add(2, 2)).toEqual(3)
  })
})
