import { useEffect, useState, useContext } from 'react'
import {
  PageHeaderContainer,
  Title,
  HeaderActions,
  FilterGroup,
} from './styles'
import { SortBy } from '../SortBy'
import { FilterDropdown } from '../FilterDropdown'
import { PostContext } from '../../contexts/PostContext'
import { categoryService, authorService } from '../../services/postService'
import type { Category, Author } from '../../types/Posts'

export function PageHeader() {
  const { state, dispatch } = useContext(PostContext)

  const [categories, setCategories] = useState<Category[]>([])
  const [authors, setAuthors] = useState<Author[]>([])

  useEffect(() => {
    async function loadFilters() {
      try {
        const [categoriesData, authorsData] = await Promise.all([
          categoryService.getAll(),
          authorService.getAll(),
        ])
        setCategories(categoriesData)
        setAuthors(authorsData)
      } catch (error) {
        console.error('Erro ao carregar filtros no Header:', error)
      }
    }
    loadFilters()
  }, [])

  const handleInstantApply = (
    type: 'categories' | 'authors',
    values: string[],
  ) => {
    console.log(values)
    dispatch({
      type: 'SET_FILTERS',
      payload: {
        categories: type === 'categories' ? values : state.selectedCategories,
        authors: type === 'authors' ? values : state.selectedAuthors,
      },
    })
  }

  return (
    <PageHeaderContainer>
      <Title>DWS blog</Title>

      <HeaderActions>
        <FilterGroup>
          <FilterDropdown
            label="Category"
            options={categories.map((c) => ({ id: c.id, name: c.name }))}
            onSelectionChange={(ids: string[]) =>
              handleInstantApply('categories', ids)
            }
          />

          <FilterDropdown
            label="Author"
            options={authors.map((a) => ({ id: a.id, name: a.name }))}
            onSelectionChange={(ids: string[]) =>
              handleInstantApply('authors', ids)
            }
          />
        </FilterGroup>

        <SortBy />
      </HeaderActions>
    </PageHeaderContainer>
  )
}
