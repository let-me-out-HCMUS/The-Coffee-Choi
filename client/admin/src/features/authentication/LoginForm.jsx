const fielStyle =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  focus:border-amber-400 focus:z-10 sm:text-sm  xl:text-xl";

export default function LoginForm() {
  return (
    <div className="flex flex-col">
      <div className="mb-10">
        <div className="flex justify-center">
          <img
            alt=""
            className="h-16 w-16 sm:h-32 sm:w-32"
            src="/public/coffee.svg"
          />
        </div>
        <h2 className="mt-6 text-center sm:text-3xl text-xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="my-5">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required="true"
          className={fielStyle}
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required="true"
          className={fielStyle}
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 mt-10"
      >
        Login
      </button>
    </div>
  );
}
