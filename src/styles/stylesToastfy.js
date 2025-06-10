import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    .Toastify__toast {
        width: 70% !important;
        min-height: 60px !important;
        border-radius: 12px !important;
        padding: 12px !important;
        background-color: #fff !important;
        margin-bottom: 5px !important;
  }

    .Toastify__toast-body {
        font-size: 160px !important;
        line-height: 1 !important;
    }
`;
