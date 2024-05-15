import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="col-start-2 border-t-2 mt-5">
      <div className="text-center p-5">
        <p className="text-center text-xs text-gray-400 tracking-wider ">
          Terms and Conditions Apply
        </p>
        <p className="text-sm text-gray-600">
          Copyright © 2020 All rights reserved | This application is made by
          &nbsp;
          <Link to="https://premierwebtech.com/" target="_blank">
            Premier Webtech
          </Link>
        </p>
      </div>
    </footer>
  );
}
