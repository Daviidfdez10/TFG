import { Link, Typography } from "@material-ui/core";
import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

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
            <p style={{ color: "white",
            
        }}>
	Soy un estudiante que he terminado el ciclo superior de Desarrollo de Aplicaciones Web(DAW)

	</p>
    <br />
		</Column>
	
		<Column>
			<Heading>Contacto</Heading>
			<FooterLink href="#">+34 645191255</FooterLink>
			<FooterLink href="https://www.google.com/intl/es/gmail/about/">davidfdez10@gmail.com</FooterLink>
			
		</Column>
		<Column>
			<Heading>Redes sociales
            </Heading>
			<FooterLink href="https://www.facebook.com/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/?hl=es">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com/?lang=es">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com/">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		
		<Column>
			<Heading>Gestion de usuarios</Heading>
			<FooterLink href="https://console.firebase.google.com/u/0/project/trabajodavidfdez/authentication/users?hl=es">Crud</FooterLink>
			</Column>
		</Row>
        <br />
        <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © by "}
      <Link color='inherit' href='https://www.linkedin.com/in/david-fernandez-seda-76b9991a4/'>
          David Fernandez Seda
         

      </Link>{" "}
    
      {"."}
    </Typography>
    <Typography color='textSecondary' align='center'>
        <br /> {new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+ new Date().getDate()}
      <br /> {new Date().getHours()+":"+new Date().getMinutes()+":"+ new Date ().getSeconds()}
</Typography>
	</Container>
	</Box>
    
);
};
export default Footer;