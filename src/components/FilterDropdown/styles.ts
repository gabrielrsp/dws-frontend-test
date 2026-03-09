import styled from 'styled-components'

interface DropdownButtonProps {
  isOpen: boolean
}

export const DropdownContainer = styled.div`
  position: relative;
`

export const DropdownButton = styled.button<DropdownButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  
  width: auto;
  max-width: 150px;
  height: 32px;
  padding: 0 12px 0 16px; 


  background: ${(props) =>
    props.isOpen
      ? `${props.theme.colors.secondary.medium}0D`
      : props.theme.colors.neutrals.lightest};
  border: 1px solid ${(props) => props.theme.colors.secondary.medium};
  border-radius: 42px;
  color: ${(props) => props.theme.colors.secondary.medium};


  font-size: ${(props) => props.theme.typography.caption.fontSize};
  font-weight: 700;
  line-height: ${(props) => props.theme.typography.caption.lineHeight};

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondary.medium}0D;
  }

  span {
    flex: 1;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
`

export const IconWrapper = styled.div<DropdownButtonProps>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 40px;
  left: 0;
  width: 282px;
  background: ${(props) => props.theme.colors.neutrals.lightest};
  border-radius: 16px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  padding: 16px;
  margin: 0;
  list-style: none;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const MenuItem = styled.button<{ selected: boolean }>`
  padding: 8px 12px;
  width: 100%;
  text-align: left;
  border: none;
  cursor: pointer;

  background: ${({ selected, theme }) =>
    selected ? `${theme.colors.secondary.medium}0D` : 'transparent'};

  &:hover {
    background: ${({ theme }) => `${theme.colors.secondary.medium}0D`};
  }
`
