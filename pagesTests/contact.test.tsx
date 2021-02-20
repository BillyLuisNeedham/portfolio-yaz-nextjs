import React, { ReactElement } from 'react'
import { render, queryByAttribute, queryByText, RenderResult } from '@testing-library/react'
import Contact from '../pages/contact'
import { contactStrings } from '../public/assets/strings/contact-strings'

const getById = queryByAttribute.bind(null, 'id')




describe('Contact', () => {
    let dom: RenderResult
    beforeEach(() => {
        dom = render(<Contact />)

    })


  it('renders', () => {
    const root = getById(dom.container, 'contact-root')
    expect(root).toBeInTheDocument()
  }),
    it('displays name error text if name is not filled out when submit button is clicked', () => {
      const nameError = dom.queryByText(contactStrings.nameError)


      expect(nameError).not.toBeInTheDocument()
    })
})
