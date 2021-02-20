import React, { ReactElement } from 'react'
import {
  render,
  queryByAttribute,
  queryByText,
  RenderResult,
  MatcherOptions,
  fireEvent,
} from '@testing-library/react'
import Contact from '../pages/contact'
import { contactStrings } from '../public/assets/strings/contact-strings'

const getById = queryByAttribute.bind(null, 'id')

describe('Contact', () => {
  let dom: RenderResult
  let nameInput
  let emailInput
  let messageInput
  let submitButton

  beforeEach(() => {
    dom = render(<Contact />)
    nameInput = getById(dom.container, 'name')
    emailInput = getById(dom.container, 'email')
    messageInput = getById(dom.container, 'message')
    submitButton = getById(dom.container, 'submit-button')
  })

  it('renders', () => {
    const root = getById(dom.container, 'contact-root')
    expect(root).toBeInTheDocument()
  })
  it('renders a name input', () => {
    expect(nameInput).toBeInTheDocument()
  })
  it('renders an email input', () => {
    expect(emailInput).toBeInTheDocument()
  })
  it('renders a message input', () => {
    expect(messageInput).toBeInTheDocument()
  })
  it('displays name error text if name is not filled out when submit button is clicked', () => {
    const nameError = dom.queryByText(contactStrings.nameError)

    expect(nameError).not.toBeInTheDocument()

    fireEvent.click(submitButton)

    expect(nameError).toBeVisible()

    //TODO write code to satisfy test
  })
})
