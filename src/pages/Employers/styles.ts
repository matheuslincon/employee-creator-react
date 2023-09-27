import styled from "styled-components";

export const EmployersContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 1.5rem;
`

export const EmployersTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme["gray-700"]};
    font-size: 1rem;
    font-style: normal;


    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface ContractHighlightProps {
  variant: 'contract' | 'permanent';
}

export const ContractHighlight = styled.span<ContractHighlightProps>`
  color: ${props => props.variant === 'permanent' ? props.theme["green-300"] : props.theme.orange};
`
