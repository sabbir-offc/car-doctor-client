const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/images/banner/1.jpg" className="w-screen rounded-lg " />
          <div className="absolute flex gap-5 transform -translate-y-1/2 left-5 right-5 top-1/2">
            <div className="text-white">
              <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-5">
                <button className="bg-[#FF3811] px-4 py-3 font-semibold rounded text-white">
                  Discover More
                </button>
                <button className="bg-transparent border-white border-2 px-4 py-3 font-semibold rounded text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5  bottom-10 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="/images/banner/2.jpg" className="w-full" />
          <div className="absolute flex justify-end gap-5  bottom-10 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/images/banner/3.jpg" className="w-full" />
          <div className="absolute flex justify-end gap-5  bottom-10 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="/images/banner/4.jpg" className="w-full" />
          <div className="absolute flex justify-end gap-5  bottom-10 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src="/images/banner/5.jpg" className="w-full" />
          <div className="absolute flex justify-end gap-5  bottom-10 transform -translate-y-1/2  right-5">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src="/images/banner/6.jpg" className="w-full" />
          <div className="absolute flex justify-end gap-5  bottom-10 transform -translate-y-1/2 left-5 right-5">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
