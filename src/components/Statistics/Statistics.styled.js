import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  color: ${props => props.theme.colors.mainColor};
`;
