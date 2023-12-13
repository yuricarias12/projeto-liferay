import styled from "styled-components";

export const ContainerPage = styled.div`

text-align: center;


/* INICIO CSS PÁGINA ÁREA DE INTERESSES */

.wc-text {
  width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 35px;
}


.areas {
  display: flex;
  justify-content: center;
  gap: 6rem;
  padding-top: 5rem;
}

.opcoes {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.opcoes img {
  max-width: 100px;
  margin: 0 auto 10px;

}


/*Inicio Estilo do Checkbox*/

.container {
  display: flex;
  justify-content: center;

}

.container h2 {
  font-size: 25px;
  color: #888;
  text-align: center;
}

.container .list {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 800px;
}

.form-element {
  position: relative;
  width: 200px;
  height: 200px;
}

.form-element input {
  display: none;
}

.form-element label {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  border: 2px solid #ddd;
  background: #fff;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 200ms ease-in-out;
  border-radius: 5px;
}

.form-element .icon {
  margin-top: 10px;
  font-size: 30px;
  color: #555;
  transition: all 200ms ease-in-out;
}

.form-element .title {
  font-size: 15px;
  color: #555;
  padding: 5px 0px;
  transition: all 200ms ease-in-out;
}

.form-element label:before {
  content: "✓";
  position: absolute;
  width: 18px;
  height: 18px;
  top: 8px;
  left: 8px;
  background: #0B5FFF;
  color: #fff;
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0.5);
  transition: all 200ms ease-in-out;
}

.form-element input:checked+label:before {
  opacity: 1;
  transform: scale(1);
}


.form-element input:checked+label .title {
  color: #0B5FFF;;
}

.form-element input:checked+label {
  border: 2px solid #0B5FFF;;
}

.img-icon {
  width: 85px;
  height: 85px;
  margin-left: 29%;
}

label img {
  filter: grayscale(100%);
}

input[type="checkbox"]:checked + label img {
  filter: grayscale(0%);
}

/* Fim do Estilo do Checkbox */

.buttons {
    
    
  width: 200px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding-right: 25px;
  background-color: #0B63CE;
  color: #FFF;
  border-radius: 20px;
  border-color: transparent;

}

#btnNext {
  padding-left: 50px;
}

.actions {
   
   margin-top: 25px;
   display: flex;
   justify-content: center;
   gap: 30px;
   
}

/* FIM CSS PÁGINA ÁREA DE INTERESSES */



/* INICIO CSS PÁGINA ÁREA DE COMPETENCIAS */



::selection{
  color: #fff;
  background: #4285f4;
}
.wrapper{
  width: 370px;
  margin: 85px auto 0;
}

#lista-competencias {

  margin-top: 25px;
}

/* FIM CSS PÁGINA ÁREA DE COMPETENCIAS */




/* INICIO CSS PÁGINA DE NIVELAMENTO */

#btnFinalizar{

  padding-left: 50px;

}

/* FIM CSS PÁGINA DE NIVELAMENTO */




/* INICIO CSS PÁGINA DE FILTRAR EVENTOS */

#filter {
  width: 82%;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 25px;
}

#btn-filter {
  background: transparent;
  border-style: none;
}


.lista-eventos1 {
  
  display: flex;
  flex-wrap: wrap;
  padding-left: 10%;
  gap: 3rem;
}


.lista-eventos2 {
  
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 10%;
  gap: 3rem;
}


.card {
  width: 190px;
  background: white;
  padding: .4em;
  border-radius: 6px;
}

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 130px;
  border-radius: 6px 6px 0 0;
}

.card-image:hover {
  transform: scale(0.98);
}

.category {
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
  color: rgb(63, 121, 230);
  padding: 10px 7px 0;
}

.category:hover {
  cursor: pointer;
}

.heading {
  font-weight: 600;
  color: rgb(88, 87, 87);
  padding: 7px;
}

.heading:hover {
  cursor: pointer;
}

.author {
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-top: 20px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}


/* FIM CSS PÁGINA DE FILTRAR EVENTOS */


/* INICIO CSS PÁGINA DE CONFIGURAÇÕES */

.body-page {
  text-align: left;
  margin-left: 20px;
}


.tittle-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-div {
  margin-top: 10px;
}

.config-areas-interesse {
  
  display: flex;
  gap: 25px;
}

.buttons-pg-config {
  border-radius: 16px;
  color: #FFF;
  background: #0B63CE;
  border: 1px solid #0B63CE;
  margin-top: 20px;
}

.config-competencias {
  margin-top: 20px;
  display: flex;
  gap: 25px;
}

.competencias-text {
  margin-top: 10px;
}

label img {
  filter: grayscale(100%);
}



.competencias-config {
  width: 150px;
  height: 150px;
  box-shadow: 0px 2px 8px 0px rgba(99, 99, 99, 0.2);
  border-radius: 16px;
}

.img-competencias-config {
  width: 150px;
  height: 150px;
}



/* FIM CSS PÁGINA DE CONFIGURAÇÕES */



/* INICIO CSS PÁGINA DE CONQUISTAS */

.tittle-page-conquista {
 
  
}

.text-h2 {
  float: left;
  margin-left: 20px;
  margin-top: 50px;
}

.certificados-usuario {
  width: 95%;
  margin-left: 20px;
  margin-top: 100px;
  
}

.acoes {
  display: flex;
  justify-content: flex-end;
  gap: 35px;
  
}

.acoes-evento {
  text-decoration: underline;
  color: #0B63CE;

}

.nome-certificado {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-left: 5px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  
}

.acoes-usuario {
  width: 20%;
  display: flex;
  justify-content: flex-end;
  margin-right: 25px;
  margin-top: 15px;
  height: 16px;
  gap: 96px;
  
  
}

.btn-imgs {
  cursor: pointer;
}

/* FIM CSS PÁGINA DE CONQUISTAS */


/* INICIO CSS TELA INICIAL */

/* TEMAS */

#text {
    margin-top: 20px;
    margin-left: 10px;;
}

.temas{
   
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    margin-left: 16rem;
    margin-right: 20rem;
    
}

.tema-box{
    padding-top: 1rem;
    
}

.tema-img{
    display: flex;
    justify-content: space-evenly;
    padding: 1.5rem;
}

.tema-img img {
    max-width: 105px;
    max-height: 105px;
    object-fit: cover;
    cursor: pointer;
}

.tema-text{
    text-align: center;
    color: #4C576C;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
    cursor: pointer;
}

/* EVENTOS */

.eventos{
    display: grid;
    padding-left: 3%;
    padding-top: 2rem;
    grid-gap: 1rem;
    row-gap: 2rem;
    grid-template-columns: repeat(4, 20%);
    justify-content: center;
    gap: 50px;
}

.eventos-box{
    padding-bottom: 0.8rem;
    background-color: #ffffff;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
}

.eventos-box-img img {

       width: 100%;
}

.eventos-box-text {
  margin-top: 15px;
}

.data {
    color: #0B63CE;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-align: center;
}

.apresentacao {
    color: #191F28;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
    padding-top: 2px;
    text-align: center ;
}

.palestrante {
    color: #4C576C;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-align:center;
    margin-top: 1rem;
}

/* FIM CSS TELA INICIAL */




@media only screen and (max-width: 600px) {

  .container {
    width: 55%;
 }

 .wc-text {
   margin-left: 10px;
 }

 .acoes-usuario {
  width: 20%;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
  margin-top: 5px;
  height: 16px;
  gap: 30px;
}

.acoes {
  display: none;
}
}



@media only screen and (max-width: 400px) {

  .container {
    width: 55%;
 }

 .wc-text {
   margin-left: 10px;
 }

 .acoes-usuario {
  width: 20%;
  display: flex;
  justify-content: flex-end;
  margin-right: 0px;
  margin-top: 10px;
  height: 16px;
  gap: 15px;
}

.acoes {
  display: none;
}

.nome-certificado {

  padding-left: 0px;
  display: flex;
}

.certificados-usuario {

  margin-left: 5px;
}

.certificados {
  margin-top: 4px;
    text-align: center;

}
}


/* INICIO CSS TELA INICIAL */

/* TEMAS */

.temas{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    margin-left: 16rem;
    margin-right: 20rem;
}

.tema-box{
    padding-top: 1rem;
    
}

.tema-img{
    display: flex;
    justify-content: space-evenly;
    padding: 1.5rem;
}

.tema-img img {
    max-width: 105px;
    max-height: 105px;
    object-fit: cover;
    cursor: pointer;
}

.tema-text{
    text-align: center;
    color: #4C576C;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
    cursor: pointer;
}

/* EVENTOS */

.eventos{
    display: grid;
    padding-left: 3%;
    padding-top: 2rem;
    grid-gap: 1rem;
    row-gap: 2rem;
    grid-template-columns: repeat(4, 20%);
    justify-content: center;
}

.eventos-box{
    padding-bottom: 0.8rem;
    background-color: #ffffff;
    border-radius: 25px;
    cursor: pointer;
}

.eventos-box-img img {
 width: 100%;
}

.data {
    color: #0B63CE;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-align: center;
}

.apresentacao {
    color: #191F28;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.28px;
    padding-top: 2px;
    text-align: center ;
}

.palestrante {
    color: #4C576C;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.24px;
    text-align:center;
    margin-top: 1rem;
}

/* MENU SUSPENSO*/

#menuSuspenso {
    display: none;
    position: absolute;
    margin-top: 12px;
    margin-right: 10px;
    padding-bottom: 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 150px;
    right: 0; 
    left: auto;
    top: 61px; 
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}




.menuItem {
    display: flex;
    align-items: center;
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
    color:black;
}



#menu-link {
    text-decoration: none;
    color: black;
}


#menu-link:hover{
    color:#0B63CE;

}
.menuItem img {
    max-width: 20px; 
    max-height: 20px; 
    margin-right: 10px; 
}

/* BUTTON DO MENU SUSPENSO */

button[name="Logout"] {
    border-radius: 10px;
    color: #fff;
    background: #0B63CE;
    cursor: pointer;
    width: 75px;
    height: 25px;
    margin-left: 40px;
    margin-top: 10px;
    
}


button[name="Logout"]:hover {
    background-color: #0B63CE;
}

.link-logout {
  text-decoration: none;
  color: red;
  border: 2px solid red;
}

@media screen and (max-width: 970px) {
  .user-img #menuSuspenso {

                  margin-top: 98px;
        }

        .temas {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          justify-content: center;
          
      }
  
      #text {
          margin-left: 150px;
      }
  }


/* FIM CSS TELA INICIAL */














    

    



`;

export const TittlePage = styled.h3`



`;