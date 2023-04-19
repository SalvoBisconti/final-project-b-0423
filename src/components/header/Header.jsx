import SwitcherTheme from "../switcher-Theme";
import styles from "./index.module.scss";

import { FaUsers } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.Header}>
      <a className={styles.logo} href="/">
        Crypie
      </a>
      <a className={styles.logo__mobile} href="/">
        <svg
          id="logo-86"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="ccustom"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.5557 11.6853C23.9112 10.5865 21.9778 10 20 10V0C23.9556 0 27.8224 1.17298 31.1114 3.37061C34.4004 5.56823 36.9638 8.69181 38.4776 12.3463C39.9913 16.0008 40.3874 20.0222 39.6157 23.9018C38.844 27.7814 36.9392 31.3451 34.1421 34.1421C31.3451 36.9392 27.7814 38.844 23.9018 39.6157C20.0222 40.3874 16.0008 39.9913 12.3463 38.4776C8.69181 36.9638 5.56823 34.4004 3.37061 31.1114C1.17298 27.8224 0 23.9556 0 20H10C10 21.9778 10.5865 23.9112 11.6853 25.5557C12.7841 27.2002 14.3459 28.4819 16.1732 29.2388C18.0004 29.9957 20.0111 30.1937 21.9509 29.8078C23.8907 29.422 25.6725 28.4696 27.0711 27.0711C28.4696 25.6725 29.422 23.8907 29.8078 21.9509C30.1937 20.0111 29.9957 18.0004 29.2388 16.1732C28.4819 14.3459 27.2002 12.7841 25.5557 11.6853Z"
            fill="#ffffff"
          ></path>
          <path
            className="ccustom"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5.16562e-07C10 1.31322 9.74135 2.61358 9.2388 3.82683C8.73625 5.04009 7.99966 6.14248 7.07107 7.07107C6.14249 7.99966 5.0401 8.73625 3.82684 9.2388C2.61358 9.74134 1.31322 10 5.4439e-06 10L5.00679e-06 20C2.62644 20 5.22716 19.4827 7.65368 18.4776C10.0802 17.4725 12.285 15.9993 14.1421 14.1421C15.9993 12.285 17.4725 10.0802 18.4776 7.65367C19.4827 5.22715 20 2.62643 20 -3.81469e-06L10 5.16562e-07Z"
            fill="#ffffff"
          ></path>
        </svg>
      </a>
      <ul className={styles.list}>
        <li>
          <a href="../wallet">
            <span className={styles.svg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.714"
                height="20"
                viewBox="0 0 25.714 20"
              >
                <path
                  id="credit-card"
                  d="M22.857,34.143a.716.716,0,0,1,.714.714v1.429H2.143V34.857a.716.716,0,0,1,.714-.714Zm.714,6.429v8.571a.716.716,0,0,1-.714.714h-20a.716.716,0,0,1-.714-.714V40.571ZM2.857,32A2.86,2.86,0,0,0,0,34.857V49.143A2.86,2.86,0,0,0,2.857,52h20a2.86,2.86,0,0,0,2.857-2.857V34.857A2.86,2.86,0,0,0,22.857,32Zm2.5,13.571a1.071,1.071,0,1,0,0,2.143H7.5a1.071,1.071,0,1,0,0-2.143Zm5.714,0a1.071,1.071,0,1,0,0,2.143h5a1.071,1.071,0,1,0,0-2.143Z"
                  transform="translate(0 -32)"
                  fill="#f5f5f5"
                />
              </svg>
            </span>
            <span className={styles.pageName}>Wallet</span>
          </a>
        </li>
        <li>
          <a href="../allCrypto">
            <span className={styles.svg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                <path
                  id="coins"
                  d="M20,3.125c0,.7-.559,1.352-1.5,1.875a11.927,11.927,0,0,1-4.777,1.207c-.145-.07-.289-.137-.441-.2A15.42,15.42,0,0,0,7.5,5c-.324,0-.641.008-.957.023L6.5,5C5.559,4.477,5,3.828,5,3.125,5,1.4,8.359,0,12.5,0S20,1.4,20,3.125ZM6.277,6.293c.4-.027.809-.043,1.223-.043a13.083,13.083,0,0,1,5.957,1.227C14.426,8,15,8.66,15,9.375a1.312,1.312,0,0,1-.082.457,2.832,2.832,0,0,1-1.367,1.387h0s-.012,0-.016.008h0c-.012.008-.023.012-.035.02a13.021,13.021,0,0,1-6,1.25,13.437,13.437,0,0,1-5.789-1.137c-.074-.035-.145-.074-.215-.113C.559,10.727,0,10.078,0,9.375,0,8.016,2.086,6.855,5,6.43,5.41,6.371,5.836,6.324,6.277,6.293ZM16.25,9.375a2.949,2.949,0,0,0-.941-2.086,13.146,13.146,0,0,0,2.977-.8,6.765,6.765,0,0,0,1.715-1V6.875c0,.754-.645,1.449-1.711,1.988a9.463,9.463,0,0,1-2.047.723c0-.07.008-.137.008-.207ZM15,13.125c0,.7-.559,1.352-1.5,1.875-.07.039-.141.074-.215.113A13.406,13.406,0,0,1,7.5,16.25,13.021,13.021,0,0,1,1.5,15C.559,14.477,0,13.828,0,13.125V11.742a6.833,6.833,0,0,0,1.715,1A15.456,15.456,0,0,0,7.5,13.75a15.456,15.456,0,0,0,5.785-1.012,7.885,7.885,0,0,0,.875-.426,6.206,6.206,0,0,0,.672-.437c.059-.043.113-.09.168-.133v1.383Zm1.25,0V10.863a12.107,12.107,0,0,0,2.035-.625,6.765,6.765,0,0,0,1.715-1v1.383a1.726,1.726,0,0,1-.582,1.207,6.841,6.841,0,0,1-3.176,1.5C16.246,13.266,16.25,13.2,16.25,13.125ZM7.5,17.5a15.456,15.456,0,0,0,5.785-1.012,6.765,6.765,0,0,0,1.715-1v1.383C15,18.6,11.641,20,7.5,20S0,18.6,0,16.875V15.492a6.833,6.833,0,0,0,1.715,1A15.456,15.456,0,0,0,7.5,17.5Z"
                  fill="#f5f5f5"
                  opacity="0.999"
                />
              </svg>
            </span>
            <span className={styles.pageName}>All crypto</span>
          </a>
        </li>
        <li>
          <a href="../watchlist">
            <span className={styles.svg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.624"
                height="22.92"
                viewBox="0 0 23.624 22.92"
              >
                <path
                  id="star"
                  d="M35.82,0a1.071,1.071,0,0,1,.967.6l3.071,6.325,6.857,1.012a1.067,1.067,0,0,1,.864.73,1.079,1.079,0,0,1-.264,1.1L42.342,14.7l1.173,6.965a1.082,1.082,0,0,1-.43,1.052,1.069,1.069,0,0,1-1.132.076L35.82,19.516l-6.128,3.272a1.068,1.068,0,0,1-1.132-.076,1.085,1.085,0,0,1-.434-1.052L29.3,14.7,24.326,9.767a1.075,1.075,0,0,1,.6-1.826l6.857-1.012L34.854.6A1.076,1.076,0,0,1,35.82,0Zm0,3.536L33.47,8.379a1.085,1.085,0,0,1-.81.6l-5.3.779,3.845,3.809a1.077,1.077,0,0,1,.3.94l-.909,5.358,4.709-2.516a1.067,1.067,0,0,1,1.012,0l4.709,2.516-.9-5.354a1.065,1.065,0,0,1,.3-.94L44.28,9.758l-5.3-.783a1.082,1.082,0,0,1-.81-.6Z"
                  transform="translate(-24.008)"
                  fill="#f5f5f5"
                />
              </svg>
            </span>
            <span className={styles.pageName}>Watchlist</span>
          </a>
        </li>
        <li>
          <a href="../aboutUs">
            <span className={styles.svg}>
              <FaUsers className={styles.aboutIcon} />
            </span>
            <span className={styles.pageName}>About us</span>
          </a>
        </li>
      </ul>
      {/* <div className="switcher">light - dark</div> */}
      {/* <SwitcherTheme /> */}
    </div>
  );
};

export default Header;
