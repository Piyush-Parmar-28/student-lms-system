import React from "react";

function Footer() {
  return (
    <footer className="pb-3 pt-4 bg-dark">
      <p
        className="text-center text-white border-bottom mx-5 pb-3"
        style={{fontSize: "larger", fontFamily: 'Times New Roman, Times, serif'}}
      >
        This Website is a copyright property <i className="far fa-copyright"></i> of
        Piyush Parmar.
      </p>

      <p
        className="text-center text-white mb-0"
        style={{fontSize: 'larger', fontFamily: 'Times New Roman, Times, serif'}}
      >
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
