const Footer = () => {
  return (
    <>
      <div
        className="mt-3 pt-2 d-grid justify-content-center position-fixed bottom-0 w-100"
        style={{ backgroundColor: "rgba(0, 0, 0,0.8)" }}
      >
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="#">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p className="copyright text-light text-center">
          Vikas Casino Game © 2022
        </p>
      </div>
    </>
  );
};

export default Footer;
