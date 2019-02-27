import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }    
    body{
        font-family:-apple-system;
        background-color:rgba(20,20,20,1);
        color:#fff;
        padding-top:50px;
        font-size:12px;
    }
`;

export default globalStyles;