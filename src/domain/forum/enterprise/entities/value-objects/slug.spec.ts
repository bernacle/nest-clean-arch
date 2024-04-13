import { expect, test } from 'vitest'
import { Slug } from './slug'

test('it should be able to create a slug from a string', () => {
  const slug = Slug.createFromText('A simple example')

  expect(slug.value).toBe('a-simple-example')
})
