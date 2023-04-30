import styled from '@emotion/styled';

export const TransactionHistory = styled.table`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(6)};
  border: 1px solid black;
`;

export const Header = styled.thead`
  background-color: ${props => props.theme.bgc.mainBgc};
`;

export const Head = styled.tr`
  padding: ${props => props.theme.spacing(2)};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${props => props.theme.spacing(6)};
  align-items: center;
  & > td {
    text-align: center;
    border: 1px solid black;
  }
`;
