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
    font-size: ${props => props.theme.fontSize(5)};
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${props => props.theme.colors.secondColor};
  }

  & > th {
    font-size: ${props => props.theme.fontSize(6)};
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: ${props => props.theme.colors.mainColor};
  }
`;
