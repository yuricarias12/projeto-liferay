import styled from "styled-components";


export const AreaFooter = styled.div`

    .footer-area {
        background-color: #0d2d67;
        margin-top: 30px;
        width: 100%;
    }
    


.footer-info {
    display: flex;
    color: #FFF;
    padding-top: 100px;
    padding-left: 40px;
}

.current-language {
    display: flex;
    align-items: center;
    position: relative;
    height: 20%;
    bottom: 70px;
    left: 100px;
    gap: 10px;
    cursor: pointer;
}

.footer-info ul {
    width: 25%;
    list-style: none;
}

.footer-info h3 {
    margin-bottom: 16px;
    font-size: 0.833125em;
    font-weight: 400;
    letter-spacing: 1px;
    margin-bottom: 0;
    text-transform: uppercase;
}

.footer-info ul>p {
    margin-bottom: 40px;
}

.footer-info li {
    margin: 10px 0;
}

.footer-info a {
    text-decoration: none;
    color: #FFF;
}

.redes-sociais {
    display: flex;
    align-items: center;
    position: relative;
    bottom: 80px;
    gap: 20px;
}

.contact {
    margin-top: 20px;
}


.footer-info a:hover {
    color: grey;
}

.by-lf {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 150px;
    padding-bottom: 50px;
    color: #FFF;
}

.by-lf a {
    color: #FFF;
    text-decoration: none;
}

.by-lf a:hover {
    color: black;
}

.call-center {
    width: 50%;
    position: relative;
    bottom: 40px;
    font-size: 25px;
}

@media only screen and (max-width: 926px) {
   

    .footer-info {
        flex-direction: column;
        padding-left: 0;
    }

    .footer-info ul {
        width: 100%;
        margin-bottom: 30px;
    }

    .by-lf {
        flex-direction: column;
    }

    .current-language {
        position: relative;
        width: 20%;
        left: 27px;
        bottom: 40px;

    }

    .redes-sociais {
        bottom: 0;
    }

    .call-center {
       
        bottom: 0;
    }

    #addRess {
        
        margin-top: 30px;
    }
}

@media only screen and (max-width: 400px) {

    .footer-area {
        
        width: 425px;
        
    }



`;