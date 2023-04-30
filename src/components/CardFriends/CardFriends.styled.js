import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing(28)};
`;
export const Card = styled.li`
  background-color: ${props => props.theme.bgc.mainBgc};
  padding: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(18)};
  padding-right: ${props => props.theme.spacing(18)};

  margin-top: ${props => props.theme.spacing(20)};
  border-radius: ${props => props.theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing(21)};
`;
