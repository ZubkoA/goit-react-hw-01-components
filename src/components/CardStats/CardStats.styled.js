import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.5px;
  margin-top: 32px;
  margin-bottom: 6px;
  text-align: center;
`;

export const StatList = styled.ul`
  display: grid;
  grid: auto-flow 15vh / repeat(5, 17vw);
  grid-gap: 10px;
`;

export const Item = styled.li`
  list-style: none;
  background-color: #eee;
  color: #666;
  font-weight: 700;
  font-size: 4vw;
  padding: 10px;
  box-shadow: 0 0 2px 0 #000;
  text-align: center;
  padding-top: 13%;
`;
