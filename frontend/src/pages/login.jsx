import loginIcons from "../assest/login.jpg";

const Login = () => {
  return (
    <section id="login">
      <div className="mx-auto container p-4 ">
        <div className="bg-white p-2 py-5 w-full max-w-md mx-auto rounded">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-100 p-4 rounded-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full outline-none "
                />
              </div>
            </div>
            <div>
              <label>password :</label>
              <div className="bg-slate-100 p-4 rounded-full ">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-full outline-none"
                />
              </div>
            </div>
            <button>login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
