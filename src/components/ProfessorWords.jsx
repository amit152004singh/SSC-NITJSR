
const ProfessorWords = () => {
  return (
    <>
      <h1 className="mt-[40px] text-4xl font-bold ml-[40px] mb-8">Words by Professor</h1>
      <div 
        className="w-full max-w-screen-lg mx-auto mt-11 p-4 flex flex-col lg:flex-row items-start bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <img 
          src="/rajiv_bhushan.jpeg" 
          alt="Professor" 
          className="w-full lg:w-1/3 h-64 lg:h-auto object-cover rounded-lg mb-4 lg:mb-0 lg:mr-4"
        />
        <div className="flex flex-col gap-4 lg:gap-8 w-full">
          <p className="font-serif text-md lg:text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, sed. Deserunt neque architecto, nobis eum a explicabo provident excepturi natus enim laborum voluptatum iste aperiam nesciunt blanditiis ex numquam maiores accusamus fugiat sapiente dolorem nam autem debitis fugit ratione. Harum labore ipsum eligendi sed eius rem dolore deserunt, repellendus tenetur, sit voluptas atque ad, similique non neque? Vitae nulla sequi, exercitationem molestias voluptatibus sunt repellat! Velit magnam quibusdam a unde rerum nostrum, aperiam nemo soluta repudiandae odit. Ab nisi temporibus obcaecati, ut saepe illo! Aperiam ratione reiciendis velit rem aut impedit. Sed pariatur amet dolorem debitis dolor eaque, placeat eum beatae eligendi, esse quos molestias ex! Sit, consectetur ullam corporis nulla, omnis blanditiis sunt fugit aspernatur atque dolore maxime ex amet odio nesciunt sed iste sequi doloribus minus.
          </p>
          <h1 className="text-md lg:text-2xl font-bold text-blue-900 self-end lg:mt-auto">
            Dr. Rajiv Bhushan
          </h1>
        </div>
      </div>
      <hr className="mx-auto my-8 w-full max-w-screen-lg border-t border-gray-300" />
    </>
  );
}

export default ProfessorWords;
