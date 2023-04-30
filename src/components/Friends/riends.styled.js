import styled from '@emotion/styled';

const setBgColor = ({ children, theme }) => {
  return children ? theme.bgc.accentGreen : theme.bgc.accentRed;
};

export const Container = styled.div`
  background-color: #e4e4e7;
  padding: 40px 60px 40px 60px;
  width: 800px;
  margin: 100px auto;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 86px;
`;

export const Status = styled.span`
  height: 45px;
  width: 45px;
  background-color: ${setBgColor};
  border-radius: 50%;
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 12px;
  transform: scale(1.5);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 25);
  background-color: #fff;
`;

export const Avatar = styled.img`
  position: absolute;
  left: 25%;
  bottom: 25%;
  width: 110px;
  height: 110px;
  border-radius: 12px;
`;

export const Name = styled.p`
  font-size: 42px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 32px;
  color: #52525b;
`;
