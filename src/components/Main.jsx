import styled from "styled-components";

export const ContainerPage = styled.div`

text-align: center;


/* INICIO CSS PÁGINA ÁREA DE INTERESSES */

.wc-text {
    
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











    

    



`;

export const TittlePage = styled.h3`



`;