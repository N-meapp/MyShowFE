import "./TrailerSection.css";

export default function TrailerSection() {
  return (
    <>
      <section className="trailer h-[100vh] w-full flex">
        {/* <img src='/client/src/assets/images/moana2.png' alt='moana2' className='w-full h-[100vh]'></img> */}
        <section className="trailer-outer h-[100vh] w-full flex">



          <div className="h-full w-full">
            <div className="w-full h-[50%]"></div>
            <div className="w-full h-[50%] px-[100px]">
              <h1 className="text-7xl font-bold major-font text-white">
                Moana2
              </h1>
              <p className="mt-5 text-[#e7e7e7]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="h-full w-full mt-5">
                <div className="w-fit items-center flex gap-5 m">
                  <button className="px-6 rounded-md py-2 h-fit font-semibold bg-white hover:bg-[#ffffff00] hover:border hover:text-white">
                    <h1>Watch trailer</h1>
                  </button>
                  <button className="text-white flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>

                    <h1 className="font-semibold">Get tickets</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className="h-full w-full">
          <div className="w-full h-[50%]"></div>
            <div className="w-full h-[50%] px-[100px]">
            <div className="w-[30%]">

            </div>
             
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
