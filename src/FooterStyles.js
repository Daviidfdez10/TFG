import styled from 'styled-components';

export const Box = styled.div`
padding: 63px 0px;
height:100%;
bottom:0;
background-color:black;


@media (max-width: 1000px) {
	padding: 70px 30px;
	
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
    margin: 0 auto;
	
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 10px;
padding-top:-30px;
`;

export const Row = styled.div`

display: grid;

grid-template-columns: repeat(auto-fill,
						minmax(155px, 1fr));
grid-gap: 100px;
@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;
export const Typography = styled.p`
font-size: 24px;
color: white;
margin-bottom: 40px;
font-weight: bold;
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
`;
