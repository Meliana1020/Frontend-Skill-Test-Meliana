const ContentAbout = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="flex flex-row justify-center">
          <img src="/dog.svg" alt="Logo" className="lg:w-12 w-12 mb-4" />
          <h1 className="lg:text-5xl text-4xl font-bold text-white ">DOGGIPEDIA</h1>
        </div>
        <div className="text-white">
          <p className="mb-4 text-base ">
            Welcome to our app! This application provides complete information
            about various types of dog breeds in the world. By using the API
            from The Dog API, we can display detailed information about various
            dog breeds, starting from the name of the race, origin, body size,
            temperament, to the reference image for the race.
          </p>
          <p className="mb-4 text-base">
            The purpose of this application is to provide education and useful
            information for students dog lovers and people interested in knowing
            more about the world of dogs. You can search for information about
            dog breeds by name and view relevant details with pictures for each
            race.
          </p>
          <p className="text-base">
            If you have questions or need assistance, our customer service team
            is ready to help you. Don't hesitate to contact us via the contacts
            provided below.{" "}
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mt-4 text-cyan-700">
          <h2 className="text-xl font-semibold mb-2">
            Contact Customer Service
          </h2>
          <p className="text-sm">
            If you need assistance or have further questions, please contact us
            at:
          </p>
          <p className="text-sm mt-2 font-bold">Email: doggipedia@dogapp.com</p>
          <p className="text-sm mt-2">Telephone: +62-8571-8354-4228</p>
        </div>
      </div>
    </>
  );
};

export default ContentAbout;
