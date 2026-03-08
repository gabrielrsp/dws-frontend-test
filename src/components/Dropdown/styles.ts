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
  width: auto;
  height: 32px;
  padding: 12px 12px 12px 16px;
  gap: 4px;

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

  &:hover {
    background: ${(props) => props.theme.colors.secondary.medium}0D;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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

export const MenuItem = styled.li`
  padding: 4px 0px;
  height: 28px;
  display: flex;
  align-items: center;
  border-radius: 4px;

  font-size: ${(props) => props.theme.typography.small.fontSize};
  font-weight: ${(props) => props.theme.typography.small.fontWeight};
  color: ${(props) => props.theme.colors.neutrals.darkest};
  line-height: ${(props) => props.theme.typography.small.lineHeight};

  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors.secondary.medium}0D;
    color: ${(props) => props.theme.colors.secondary.medium};
  }
`
