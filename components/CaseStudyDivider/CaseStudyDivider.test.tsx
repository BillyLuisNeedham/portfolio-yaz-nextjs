import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CaseStudyDivider from './CaseStudyDivider'

describe('<CaseStudyDivider />', () => {
  const testTitle = 'test title'
  const wrapper = <CaseStudyDivider title={testTitle} />

  test('it should mount', () => {
    render(wrapper)

    const caseStudyDivider = screen.getByTestId('CaseStudyDivider')

    expect(caseStudyDivider).toBeInTheDocument()
  })

  test('it should render text passed by props', () => {
    render(wrapper)

    const titleFinder = screen.getByText(testTitle)

    expect(titleFinder).toBeInTheDocument() 
  })
})
