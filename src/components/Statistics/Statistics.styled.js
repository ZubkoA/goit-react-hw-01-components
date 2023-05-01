import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSize(12)};
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.5px;
  margin-top: ${props => props.theme.spacing(7)};
  margin-bottom: ${props => props.theme.spacing(7)};
  text-align: center;
`;

export const StatList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${props => props.theme.spacing(3)};
`;

export const Item = styled.li`
  list-style: none;
  background-color: ${props => props.theme.bgc.mainBgc};
  color: ${props => props.theme.colors.secondColor};
  font-weight: 700;
  font-size: ${props => props.theme.fontSize(10)};
  padding: ${props => props.theme.spacing(2)};
  box-shadow: 0 0 2px 0 #000;
  text-align: center;
`;

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
