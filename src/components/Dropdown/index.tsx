import { useState, useRef, useEffect } from 'react'
import {
  DropdownContainer,
  DropdownButton,
  IconWrapper,
  DropdownMenu,
  MenuItem,
} from './styles'

export function FilterDropdown({ label, options }: any) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState([])
  const dropdownRef = useRef(null) as any

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((i) => i !== option))
    } else {
      setSelected([...selected, option])
    }
  }

  return (
    <>
      <DropdownContainer ref={dropdownRef}>
        <DropdownButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span>{selected.length > 0 ? selected.join(', ') : label}</span>
          <IconWrapper isOpen={isOpen}>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </IconWrapper>
        </DropdownButton>

        {isOpen && (
          <DropdownMenu>
            {options.map((opt, index) => (
              <MenuItem key={index} onClick={() => handleSelect(opt)}>
                {opt}
              </MenuItem>
            ))}
          </DropdownMenu>
        )}
      </DropdownContainer>
    </>
  )
}

export default FilterDropdown
