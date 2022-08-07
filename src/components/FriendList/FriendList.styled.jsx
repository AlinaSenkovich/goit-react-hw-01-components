import styled from 'styled-components';

export const FriendListItem = styled.li`
display: flex;
align-items: baseline;
margin-right: ${p=> p.theme.space[3]}px;
`;

export const FriendItem = styled.li`
display: flex;
align-items: center;
margin-bottom: ${p=> p.theme.space[3]}px;
padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
border-radius: ${p => p.theme.normal};
border: ${p => p.theme.borders.normal}, ${p => p.theme.colors.Grey};
box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
`;

export const OnlineStatus = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: ${p => `${p.theme.radii.round}`};
background-color: ${({ isOnline}) => {
  return isOnline ? 'green' : 'red';
}};
`;