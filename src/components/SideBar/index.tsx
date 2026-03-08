import { useState, useEffect } from 'react'
import {
  SidebarContainer,
  SidebarHeader,
  Section,
  SectionTitle,
  FilterItem,
} from './styles'
import { Button } from '../Button'
import { categoryService, authorService } from '../../services/postService'

interface Category {
  id: string
  name: string
}

interface Author {
  id: string
  name: string
}

export const Sidebar = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [authors, setAuthors] = useState<Author[]>([])
  const [loading, setLoading] = useState(true)

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])

  useEffect(() => {
    async function loadFilters () {
      try {
        setLoading(true)
        const [categoriesData, authorsData] = await Promise.all([
          categoryService.getAll(),
          authorService.getAll(),
        ])
        setCategories(categoriesData)
        setAuthors(authorsData)
      } catch (error) {
        console.error('Erro ao carregar filtros:', error)
      } finally {
        setLoading(false)
      }
    }

    loadFilters()
  }, [])

  const toggleFilter = (
    id: string,
    setState: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setState((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    )
  }

  if (loading)
    return (
      <SidebarContainer>
        <p>Loading filters...</p>
      </SidebarContainer>
    )

  return (
    <SidebarContainer>
      <SidebarHeader>
        <h2>Filters</h2>
      </SidebarHeader>

      <Section>
        <SectionTitle>Category</SectionTitle>
        {categories.map((cat) => (
          <FilterItem
            key={cat.id}
            active={selectedCategories.includes(cat.id)}
            onClick={() => toggleFilter(cat.id, setSelectedCategories)}
          >
            {cat.name}
          </FilterItem>
        ))}
      </Section>

      <Section>
        <SectionTitle>Author</SectionTitle>
        {authors.map((author) => (
          <FilterItem
            key={author.id}
            active={selectedAuthors.includes(author.id)}
            onClick={() => toggleFilter(author.id, setSelectedAuthors)}
          >
            {author.name}
          </FilterItem>
        ))}
      </Section>

      <Button
        variant="primary"
        onClick={() => console.log({ selectedCategories, selectedAuthors })}
      >
        Apply filters
      </Button>
    </SidebarContainer>
  )
}
