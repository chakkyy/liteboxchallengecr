import styled, { keyframes } from 'styled-components';
import { Modal } from 'react-bootstrap';

const loading = keyframes`
 0% {
    width: 0%;
  }

  100% {
    width: 100%;
  }
`;

const loaderHide = keyframes`
 0% {
    visibility: visible;
  }

  100% {
    visibility: hidden;
  }
`;

export const LiteModal = styled(Modal).attrs(() => ({
  className: 'wow slideInUp',
}))`
  .modal-open {
    padding-right: 0 !important;
  }

  .modal-content {
    border-radius: 0;
    background-color: #242424;
    border: none;
  }

  .modal-header {
    border: none;

    .btn-close {
      color: #fff;
      background: transparent url('assets/icons/cerrar.svg') center/1em auto no-repeat;
      outline: none !important;
      border: none !important;
      box-shadow: none !important;
    }
  }

  .modal-title {
    color: #64eebc;
    width: 100%;
    text-align: center;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 4px;
    margin-top: 20px;
    margin-left: 25px;
  }

  .modal-body {
    .input-title {
      width: 210px;
      margin: 0 auto !important;

      input {
        text-align: center;
        color: #fff;
        letter-spacing: 4px;
        font-size: 16px;
        line-height: 19px;
        border-radius: 0;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
        background-color: #242424;
        border-bottom: solid 1px #fff !important;
        ::placeholder {
          color: #fff !important;
          opacity: 1;
        }
      }
    }

    .container-drag-drop {
      position: relative;
      border: dashed #fff 2px;
      width: 85%;
      height: 150px;
      margin: 0 auto;
      margin-top: 25px;
      margin-bottom: 35px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      h6 {
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 0;
        letter-spacing: 4px;
        text-align: center;
      }

      .text-add-file {
        font-weight: bold;
      }

      .drop-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 !important;
        opacity: 0 !important;
      }

      @media (max-width: 767px) {
        .text-drag-file {
          display: none;
        }
      }
    }

    .container-drag-drop.active,
    .container-drag-drop.active:hover {
      border: solid #64eebc 2px;
      transition: all 0.3s ease-in-out;
    }

    .container-btn-action {
      text-align: center;
      margin-top: 35px;
      margin-bottom: 20px;
    }

    .btn-action {
      background-color: #fff;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
      border-radius: 0;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 4px;
      color: #242424;
      padding: 16px 35px;
    }

    .modal-view-2 {
      height: 242px;
      width: 85%;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .loader {
        width: 100%;
        position: relative;
        animation: ${loaderHide} 4s ease-in-out forwards;
      }

      .loader-background {
        width: 100%;
        height: 4px;
        background-color: grey;
        position: relative;
      }

      .loader-fill {
        height: 10px;
        background-color: #64eebc;
        position: absolute;
        top: -3px;
        animation: ${loading} 4s ease-in-out forwards;
      }

      h4 {
        color: #fff;
        text-align: center;
        font-size: 24px;
        line-height: 26px;
        letter-spacing: 4px;
        font-weight: bold;
      }

      p {
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 4px;
      }
    }
  }
`;
