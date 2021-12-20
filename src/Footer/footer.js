import { Typography } from "@material-ui/core";
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
Link,
} from "./FooterStyles";
import Twitter from "@mui/icons-material/Twitter";
import { Facebook, Instagram, YouTube } from "@material-ui/icons";

const Footer = () => {
return (
    
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-30px" }}>
	

	</h1>
    <br />
	<Container>
        
		<Row>
		<Column>
			<Heading>Sobre mi</Heading>
            <p style={{ color: "white",fontSize:"19px"
			
            
        }}>
	Soy un estudiante que ha terminado el ciclo superior de Desarrollo de Aplicaciones Web(DAW)

	</p>
    <br />
		</Column>
	
		<Column>
			<Heading>Contacto</Heading>
			<FooterLink href="#">+34 635191255</FooterLink>
			<FooterLink href="https://www.google.com/intl/es/gmail/about/" target="_blank">davidfdez10@gmail.com</FooterLink>
			
		</Column>
		<Column>
			<Heading>Redes sociales
            </Heading>
			<FooterLink href="https://www.facebook.com/" target="_blank">
				<Facebook>
				
			</Facebook>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/?hl=es" target="_blank">
			<Instagram>
				
		</Instagram>
			</FooterLink>
			<FooterLink href="https://twitter.com/?lang=es" target="_blank">
				<Twitter style={{
				
				}}>
				
			</Twitter>
		
			</FooterLink>
			<FooterLink href="https://www.youtube.com/" target="_blank">
			<YouTube>
				
			</YouTube>
			</FooterLink>
		</Column>
		
		<Column>
			<Heading>Gestion de usuarios</Heading>
			<FooterLink href="https://console.firebase.google.com/u/0/project/trabajodavidfdez/authentication/users?hl=es" target="_blank">Crud</FooterLink>
			</Column>
			
		</Row>
	
			<Heading></Heading>
			<Link href="https://www.linkedin.com/in/david-fernandez-seda-76b9991a4/" target="_blank">Copyright © by David Fernandez Seda</Link>
        <br />
	<Column>
    <Typography variant='p' color='white' align='center'>
        <br /> {"new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+ new Date().getDate()"}
      <br /> {new Date().getHours()+":"+new Date().getMinutes()+":"+ new Date ().getSeconds()}
</Typography>
</Column>
	</Container>
	</Box>
    
);
};
export default Footer;
