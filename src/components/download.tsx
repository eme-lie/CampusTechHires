function Download() {
  return (
    <div className="download flex flex-wrap pt-8 pr-12 pb-12 pl-12 gap-y-8 lg:pt-16 lg:pr-20 lg:pb-12 lg:pl-20 lg:flex-nowrap">
      <div className="download-left flex flex-col gap-y-2">
        <h2 className="download-title text-2xl text-Neutral900_Text_main font-bold md:text-3xl lg:text-4xl">
          Download Our Latest App
        </h2>
        <p className="download-body text-lg font-regular w-full md:w-3/5">
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's
        </p>
        <div className="button-container flex gap-x-6 mt-3">
          <img
            src="src/assets/images/app store download.svg"
            alt="app store download button"
          />
          <img
            src="src/assets/images/google play download 1.svg"
            alt="google store download button"
          />
        </div>
      </div>

      <img
        src="src/assets/images/download-image.svg"
        alt="image of girls downloading app"
        className="download-image w-full rounded-xl lg:w-4/5 "
      />
    </div>
  );
}

export default Download;
