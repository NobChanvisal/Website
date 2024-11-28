function Footer() {
  return (
    <footer className="relative w-full mt-20">
      <div className="w-full px-10 py-3 mx-auto border-t border-slate-200">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <h5 className="mb-6 text-xl font-semibold text-slate-800">
            <span className=" font-DM-Serif tracking-[2px] text-[12px] pr-2 sm:pl-2 sm:text-[20px]">
              NC-VISAL
            </span>
          </h5>
          <div className="grid justify-between grid-cols-1 sm:grid-cols-3 gap-4">
            <ul>
              <p className="block mb-1 text-base font-semibold  text-slate-800">
                Brand
              </p>
              <li>
                <a
                  href="/nike"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Nike
                </a>
              </li>
              <li>
                <a
                  href="/adidas"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Adidas
                </a>
              </li>
              <li>
                <a
                  href="/newbalance"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  New Balance
                </a>
              </li>
              <li>
                <a
                  href="/puma"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Puma
                </a>
              </li>
            </ul>

            <ul>
              <p className="block mb-1 text-base font-semibold text-slate-800">
                Resource
              </p>
              <li>
                <a
                  href="/blog"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/newsletter"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="helpcenter"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Help center
                </a>
              </li>
            </ul>
            <ul>
              <p className="block mb-1 text-base font-semibold text-slate-800">
                Promotions & Discounts
              </p>
              <li>
                <a
                  href="#"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Student
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  Teacher
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                >
                  First Responders & Medical Professionals
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
          <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0">
            Copyright © 2024
            <a href="https://github.com/NobChanvisal">chanvisalnob</a>. All
            Rights Reserved.
          </p>
          <div className="flex gap-4 text-slate-600 sm:justify-center">
            
              <a
                href="#"
                className="block transition-opacity text-inherit hover:opacity-80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
       
            <a
              href="#"
              className="block transition-opacity text-inherit hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            <a
              href="#"
              className="block transition-opacity text-inherit hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-messenger"
                viewBox="0 0 16 16"
              >
                <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
              </svg>
            </a>
            <a
              href="#"
              className="block transition-opacity text-inherit hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telegram"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
