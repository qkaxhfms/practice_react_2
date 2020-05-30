import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
        font-size:12px;
        background:rgba(121,85,72,1);
        color:#fff;
        padding:50px 0 0;
    }
`;

export default globalStyles;