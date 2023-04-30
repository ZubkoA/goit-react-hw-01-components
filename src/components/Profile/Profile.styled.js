import styled from '@emotion/styled';

export const Card = styled.div`
  width: 380px;
  height: 450px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.075);
  border-radius: 11px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing(4)};
  padding-top: ${props => props.theme.spacing(10)};
`;
export const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${props => props.theme.bgc.mainBgc};
`;
export const Name = styled.p`
  font-size: ${props => props.theme.fontSize(12)};
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.5px;
  margin-top: ${props => props.theme.spacing(7)};
  margin-bottom: ${props => props.theme.spacing(2)};
`;
export const Tag = styled.p`
  font-size: ${props => props.theme.fontSize(7)};
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.secondColor};
  margin-bottom: ${props => props.theme.spacing(6)};
`;
export const Location = styled.p`
  font-size: ${props => props.theme.fontSize(9)};
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.secondColor};
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const States = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: auto;
  padding: 0;
  & li {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.bgc.mainBgc};
    border: 2px solid dimgray;
    padding: ${props => props.theme.spacing(2)};
  }
`;
export const Label = styled.span`
  font-size: ${props => props.theme.fontSize(5)};
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.secondColor};
`;
export const Quantity = styled.span`
  font-size: ${props => props.theme.fontSize(7)};
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.5px;
`;
