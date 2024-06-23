import { expect, test, describe, beforeAll } from 'bun:test'

beforeAll(() => {})

describe('math', () => {
  test('2 + 2', () => {
    expect(2 + 2).toBe(4)
  })
})
