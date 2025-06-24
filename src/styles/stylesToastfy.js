import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    .Toastify__toast {
        width: 60% !important;
        min-height: 50px !important;
        border-radius: 12px !important;
        padding: 10px !important;
        background-color: #fff !important;
        margin-bottom: 5px !important;
        font-size: 15px !important;
  }

    .Toastify__toast-body {
        line-height: 1 !important;
    }
`;
