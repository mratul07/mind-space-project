import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      {/* <!-- ====== Error 404 Section Start --> */}
      <section className="bg-violet-500 relative z-10">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="mx-auto max-w-[400px] text-center content-center ">
            <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
              404
            </h2>
            <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
              Oops! That page can’t be found
            </h4>
            <p className="mb-8 text-lg text-white">
              The page you are looking for it maybe deleted
            </p>
            <Link to="/" className="hover:text-violet-500 inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white">
              Go To Home
            </Link>
          </div>
        </div>

        <div className="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
        </div>
      </section>

      {/* <!-- ====== Error 404 Section End --> */}
    </>
  )
}

export default NotFound
