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

const setBgColor = ({ children, theme }) => {
  return children ? theme.bgc.accentGreen : theme.bgc.accentRed;
};

export const Status = styled.span`
  height: ${props => props.theme.spacing(12)};
  width: ${props => props.theme.spacing(12)};
  background-color: ${setBgColor};
  border-radius: 50%;
`;

export const AvatarWrap = styled.div`
  position: relative;
  width: ${props => props.theme.spacing(35)};
  height: ${props => props.theme.spacing(35)};
  border-radius: ${props => props.theme.spacing(3)};
  transform: scale(1.5);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 25);
  background-color: ${props => props.theme.bgc.white};
`;

export const Avatar = styled.img`
  position: absolute;
  left: 25%;
  bottom: 25%;
  width: ${props => props.theme.spacing(20)};
  height: ${props => props.theme.spacing(20)};
  border-radius: ${props => props.theme.spacing(3)};
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSize(9)};
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: ${props => props.theme.spacing(6)};
  color: ${props => props.theme.colors.secondColor};
`;
