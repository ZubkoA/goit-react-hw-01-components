import styled from '@emotion/styled';

export const Card = styled.div`
  width: 380px;
  height: 450px;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  overflow: hidden;
  transition: all 0.4s;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 15px 15px 15px;
`;
export const Img = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.5px;
  margin-top: 32px;
  margin-bottom: 6px;
`;
export const Tag = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: dimgray;
  margin-bottom: 6px;
`;
export const Location = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: dimgray;
  margin-bottom: 32px;
`;

export const States = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: auto;
  padding: 0;
  & li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f3ecec;
    border: 2px solid dimgray;
    padding: 8px;
  }
`;
export const Label = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: dimgray;
`;
export const Quantity = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.5px;
`;
