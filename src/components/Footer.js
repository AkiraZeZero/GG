import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footerBtn">
          <a href="https://github.com/AkiraZeZero" target="blank">
            <img className="footerImg" src="https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/kiara-ocasio-rosado-6263a0250/"
            target="blank"
          >
            <img className="footerImg" src="https://www.pngfind.com/pngs/m/101-1013043_download-linkedin-logo-round-png-transparent-png.png" />
          </a>
          <a href="https://docs.google.com/document/d/1DuCiktdiyHCWOEMx4VOCEyAqDwd3ok2MR1JLoUaNJTw/view#heading=h.1gj26w7s0slh" target="blank">
            <img className="footerImg" src="https://www.apkmirror.com/wp-content/uploads/2020/10/Gmail_round-384x384.png"/>
          </a>
        </div>
    </footer>
  );
};

export default Footer;
