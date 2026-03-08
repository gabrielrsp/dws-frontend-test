import { useState } from 'react'
import {
  SidebarContainer,
  SidebarHeader,
  Section,
  SectionTitle,
  FilterItem,
} from './styles'
import { Button } from '../Button'

export const Sidebar = () => {
  const mockCategories = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ]
  const mockAuthors = [
    'Author Lastname1',
    'Author Lastname2',
    'Author Lastname3',
  ]

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])

  const toggleFilter = (
    item: string,
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setState((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    )
  }

  return (
    <SidebarContainer>
      <SidebarHeader>
        <h2>Filters</h2>
      </SidebarHeader>

      <Section>
        <SectionTitle>Category</SectionTitle>
        {mockCategories.map((cat, index) => (
          <FilterItem
            key={index}
            active={selectedCategories.includes(cat)}
            onClick={() =>
              toggleFilter(cat, selectedCategories, setSelectedCategories)
            }
          >
            {cat}
          </FilterItem>
        ))}
      </Section>

      <Section>
        <SectionTitle>Author</SectionTitle>
        {mockAuthors.map((author, index) => (
          <FilterItem
            key={index}
            active={selectedAuthors.includes(author)}
            onClick={() =>
              toggleFilter(author, selectedAuthors, setSelectedAuthors)
            }
          >
            {author}
          </FilterItem>
        ))}
      </Section>

      <Button variant="primary" onClick={() => console.log('Applied!')}>
        Apply filters
      </Button>
    </SidebarContainer>
  )
}
