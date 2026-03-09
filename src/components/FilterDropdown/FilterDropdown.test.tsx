import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/default'
import { FilterDropdown, type FilterDropdownProps } from '.'

const renderComponent = (props: FilterDropdownProps) => {
  return render(
    <ThemeProvider theme={defaultTheme}>
      <FilterDropdown {...props} />
    </ThemeProvider>,
  )
}

describe('FilterDropdown', () => {
  const options = [
    { id: '1', name: 'React' },
    { id: '2', name: 'Vue' },
  ]

  it('should open dropdown when clicking the button', async () => {
    const user = userEvent.setup()

    renderComponent({
      label: 'Category',
      options,
    })

    const button = screen.getByRole('button', { name: 'Category' })

    await user.click(button)

    expect(screen.getByRole('button', { name: 'React' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Vue' })).toBeInTheDocument()
  })

  it('should select an option and call onSelectionChange', async () => {
    const user = userEvent.setup()

    const onSelectionChange = vi.fn()

    renderComponent({
      label: 'Category',
      options,
      onSelectionChange,
    })

    await user.click(screen.getByRole('button', { name: 'Category' }))

    await user.click(screen.getByRole('button', { name: 'React' }))

    expect(onSelectionChange).toHaveBeenCalledWith(['1'])
  })

  it('should update button label with selected option', async () => {
    const user = userEvent.setup()

    renderComponent({
      label: 'Category',
      options,
    })

    await user.click(screen.getByRole('button', { name: 'Category' }))
    await user.click(screen.getByRole('button', { name: 'React' }))

    expect(screen.getByRole('button', { name: 'React' })).toBeInTheDocument()
  })

  it('should close dropdown when clicking outside', async () => {
    const user = userEvent.setup()

    renderComponent({
      label: 'Category',
      options,
    })

    await user.click(screen.getByRole('button', { name: 'Category' }))

    expect(screen.getByRole('button', { name: 'React' })).toBeInTheDocument()

    await user.click(document.body)

    expect(
      screen.queryByRole('button', { name: 'React' }),
    ).not.toBeInTheDocument()
  })
})
