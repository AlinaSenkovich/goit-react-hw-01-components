import styled from 'styled-components';


export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: ${p => p.theme.space[3]}px;
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.normal} ${p => p.theme.colors.grey};
`;

export const Username = styled.p`
font-weight: ${p => p.theme.fontWeights.bold}
margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Avatar = styled.img`
width: 50px;
height: 50px;`;

export const StatsList = styled.ul`
display: flex;
justify-content: center;
padding: ${p => p.theme.space[3]}px;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;

$:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
}
`;

export const StatsQuantity = styled.span`
font-weight: ${p => p.theme.fontWeights.bold}`;