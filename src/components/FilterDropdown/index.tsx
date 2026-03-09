import { useState, useRef, useEffect } from 'react'
import {
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  MenuItem,
} from './styles'

interface Option {
  id: string
  name: string
}

export interface FilterDropdownProps {
  label: string
  options: Option[]
  onSelectionChange?: (selectedIds: string[]) => void
}

export function FilterDropdown({
  label,
  options,
  onSelectionChange,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (option: Option) => {
    let newSelectedIds: string[]

    if (selectedIds.includes(option.id)) {
      newSelectedIds = selectedIds.filter((id) => id !== option.id)
    } else {
      newSelectedIds = [...selectedIds, option.id]
    }

    setSelectedIds(newSelectedIds)
    setIsOpen(false)

    if (onSelectionChange) {
      onSelectionChange(newSelectedIds)
    }
  }

  const getDisplayLabel = () => {
    if (selectedIds.length === 0) return label

    const selectedNames = options
      .filter((opt: Option) => selectedIds.includes(opt.id))
      .map((opt: Option) => opt.name)

    return selectedNames.join(', ')
  }

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span>{getDisplayLabel()}</span>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </DropdownButton>

      {isOpen && (
        <DropdownMenu>
          {options.map((opt: Option) => {
            const isSelected = selectedIds.includes(opt.id)
            return (
              <MenuItem
                key={opt.id}
                selected={isSelected}
                onClick={() => handleSelect(opt)}
              >
                {opt.name}
              </MenuItem>
            )
          })}
        </DropdownMenu>
      )}
    </DropdownContainer>
  )
}
