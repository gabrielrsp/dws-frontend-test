import { useState, useEffect, useContext } from 'react'
import {
  SidebarContainer,
  SidebarHeader,
  Section,
  SectionTitle,
  FilterItem,
} from './styles'
import { Button } from '../Button'
import { PostContext } from '../../contexts/PostContext'
import { categoryService, authorService } from '../../services/postService'
import type { Category, Author } from '../../types/Posts'
import SlidersIcon from '../../assets/sliders.png'
export const Sidebar = () => {
  const { dispatch } = useContext(PostContext)

  const [categories, setCategories] = useState<Category[]>([])
  const [authors, setAuthors] = useState<Author[]>([])
  const [loading, setLoading] = useState(true)

  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const [selectedAuthors, setSelectedAuthors] = useState<Author[]>([])

  useEffect(() => {
    async function loadFilters() {
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

  const handleApplyFilters = () => {
    dispatch({
      type: 'SET_FILTERS',
      payload: {
        categories: selectedCategories,
        authors: selectedAuthors,
      },
    })
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
        <img src={SlidersIcon} alt="Filters icon" width={20} />

        <h2>Filters</h2>
      </SidebarHeader>

      <Section>
        <SectionTitle>Category</SectionTitle>
        {categories.map((category: Category) => (
          <FilterItem
            key={category.id}
            active={selectedCategories.includes(category.id)}
            onClick={() => toggleFilter(category.id, setSelectedCategories)}
          >
            {category.name}
          </FilterItem>
        ))}
      </Section>

      <Section>
        <SectionTitle>Author</SectionTitle>
        {authors.map((author: Author) => (
          <FilterItem
            key={author.id}
            active={selectedAuthors.includes(author.id)}
            onClick={() => toggleFilter(author.id, setSelectedAuthors)}
          >
            {author.name}
          </FilterItem>
        ))}
      </Section>

      <Button variant="primary" onClick={handleApplyFilters}>
        Apply filters
      </Button>
    </SidebarContainer>
  )
}
