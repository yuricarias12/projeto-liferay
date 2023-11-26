import styled from 'styled-components';

export const AreaHeader = styled.div`

    
        a {
            text-decoration: none;
        }
        
        ul {
            list-style: none;
        }
        
        .nav-bar {
            background-color: #0B63CE;
            height: 65px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0px 30px;;
        }

        .logo-img-search-box {
            display: flex;
            gap: 25px;

        }

        .liferay-img {
            cursor: pointer;
        }
        
        .search-box {
            margin-top: 2px;
            height: 45px;
            border-radius: 10px;
            background-color: #FFF;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .search-text {
            width: 400px;
            border: none;
            background: none;
            outline: none;
            font-size: 15px;
            padding-left: 10px;
        }
        
        .search-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        
        .nav-items-btn-user-img {
           width: 30%;
           height: 100%;
           display: flex;
           justify-content: space-between;
           align-items: center;
              
        }



        .nav-link {
            text-decoration: none;
            font-size: 1.15rem;
            font-weight: 400;
            color: #FFF;
        }

        .nav-link:hover {
            opacity: 0.7;
        }
 
    
        @media only screen and (max-width: 971px) {

            .nav-bar {
                height: 150px;
                display: grid;
                padding: 0px;
                gap: 0px;
            }

            .nav-items-btn-user-img {
                width: 100%;
                align-items: center;
            }


            .search-text {
                
                width: 450px;
               
            }
        }
        
        @media only screen and (max-width: 610px) {

            .nav-bar {
                padding: 0;
                height: 150px;
                display: grid;
            }


            .logo-img-search-box {
                display: flex;
                gap: 15px;
    
            }


            .search-text {
                
                width: 300px;
               
            }
        }


        /* MENU SUSPENSO CSS */

        #menuSuspenso {
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

        .menu-link {
            text-decoration: none;
            color: black;
        }
        
        
        .menu-link:hover{
            color:#0B63CE;
        
        }

        .menuItem img {
            max-width: 20px; 
            max-height: 20px; 
            margin-right: 10px; 
        }

        .btn-logout {
            border-radius: 10px;
            color: #fff;
            background: #0B63CE;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            width: 80px;
            height: 25px;
            margin-left: 40px;
            margin-top: 10px;
        }
            

        /* FIM MENU SUSPENSO CSS */

        @media only screen and (max-width: 400px) {

            .nav-bar {
                
                width: 425px;
                padding: 0;
                height: 150px;
                display: grid;
                
            }

            .nav-items-btn-user-img {
                max-width: 95%;
                padding-left: 5px;
                   
             }

             .user-img {
                
                margin-right: 10px;
             }

            .search-box {
                    
                width: 80%;
            }

            .nav-items-btn-user-img {
                width: 100%;
                align-items: center;
            }

            
            .search-text {
                
                width: 300px;
               
            }
        }
`;