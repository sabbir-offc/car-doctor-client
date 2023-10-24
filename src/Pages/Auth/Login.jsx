import { Link } from "react-router-dom";
import SocailLogin from "./SocailLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex h-fit flex-col md:flex-row justify-between items-center">
      <div className="flex-1">
        <img
          src="/public/images/login/login.svg"
          alt=""
          className="w-1/2 mx-auto md:w-fit"
        />
      </div>
      <div className="w-full flex-1  px-6 py-3">
        <div>
          <div className="mt-3 text-left sm:mt-5">
            <div className=" w-full">
              <h3 className="text-lg text-center font-bold text-neutral-600 l eading-6 lg:text-5xl">
                Login
              </h3>
            </div>
          </div>
        </div>

        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          <div>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-600 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-600 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col mt-4 lg:space-y-2">
            <button
              type="submit"
              className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#FF3811] rounded-xl hover:bg-[#da1717] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
        <div className=" divider">Or continue with</div>
        <SocailLogin></SocailLogin>
        <div className="flex mt-4 justify-center gap-3">
          <p className="text-lg">New Here?</p>
          <p>
            <Link to="/register" className="text-lg underline text-orange-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
