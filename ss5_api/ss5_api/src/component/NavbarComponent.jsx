import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page">
            Trang chủ
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            to="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Chức năng
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/list">
              Danh sách
            </Link>
            <Link className="dropdown-item" to="/add">
              Thêm mới
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};
export default NavbarComponent;
