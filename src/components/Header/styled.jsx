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

        .nav-list {
            display: flex;
            margin-top: 15px;
            gap: 50px;

        }

        .nav-link {
            text-decoration: none;
            font-size: 1.15rem;
            font-weight: 400;
            color: #FFF;
        }

        .nav-list a:hover{
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

            .nav-items-btn-user-img {
                
                align-items: center;
            }

            .search-text {
                
                width: 300px;
               
            }
        }

    
        
           



`;