import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const login = () => {
  return (
  <form
    style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}
  >
    <h2 className="mb-3 text-center">Đăng nhập</h2>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Nhập email"
      />
    </div>

    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Mật khẩu
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Nhập mật khẩu"
      />
    </div>

    <button type="submit" className="btn btn-primary w-100">
      Đăng nhập
    </button>
  </form>
);

};

export default login;
