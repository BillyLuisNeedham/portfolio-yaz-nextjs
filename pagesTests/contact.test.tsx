import React from 'react'
import { render, screen, queryByAttribute } from '@testing-library/react'
import Contact from '../pages/contact'

const getById = queryByAttribute.bind(null, 'id')

describe('Contact', () => {
  it('renders', () => {
    const dom = render(<Contact />)
    const root = getById(dom.container, 'contact-root')
    expect(root).toBeInTheDocument()
  })
})
