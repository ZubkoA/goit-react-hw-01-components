import styled from '@emotion/styled';

export const TransactionHistory = styled.table`
  width: 700px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border: 1px solid black;
`;

export const Header = styled.thead`
  background-color: grey;
`;

export const Head = styled.tr`
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  align-items: center;
  border: 1px solid black;
  & > td {
    text-align: center;
    /* background-color: grey; */
  }
`;
