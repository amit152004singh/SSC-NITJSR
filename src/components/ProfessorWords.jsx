import { motion } from 'framer-motion';

const ProfessorWords = () => {
  return (
    <motion.div 
      className="w-[1200px] mt-11 ml-[220px] flex items-start bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img 
        src="/rajiv_bhushan.jpeg" 
        alt="Professor" 
        className="w-1/3 h-128 object-cover rounded-lg mr-4"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div className="flex flex-col gap-8" 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className=" ml-10 text-2xl font-bold text-blue-900 mb-2">Words by Professor Dr. Rajiv Bhushan</h2>
        <p className="ml-10 text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, sed. Deserunt neque architecto, nobis eum a explicabo provident excepturi natus enim laborum voluptatum iste aperiam nesciunt blanditiis ex numquam maiores accusamus fugiat sapiente dolorem nam autem debitis fugit ratione. Harum labore ipsum eligendi sed eius rem dolore deserunt, repellendus tenetur, sit voluptas atque ad, similique non neque? Vitae nulla sequi, exercitationem molestias voluptatibus sunt repellat! Velit magnam quibusdam a unde rerum nostrum, aperiam nemo soluta repudiandae odit. Ab nisi temporibus obcaecati, ut saepe illo! Aperiam ratione reiciendis velit rem aut impedit. Sed pariatur amet dolorem debitis dolor eaque, placeat eum beatae eligendi, esse quos molestias ex! Sit, consectetur ullam corporis nulla, omnis blanditiis sunt fugit aspernatur atque dolore maxime ex amet odio nesciunt sed iste sequi doloribus minus.</p>
      </motion.div>
    </motion.div>
  )
}

export default ProfessorWords