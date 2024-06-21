import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  }

  return (
    <div onClick={handleClick} className="mt-4 w-[400px] cursor-pointer border p-4 rounded-lg mb-4 bg-white shadow-md hover:shadow-lg hover:bg-blue-100 transform hover:scale-105 transition-all duration-300">
      <img src={blog.author.image} alt={blog.author.name} className="w-16 h-16 rounded-full mb-2" />
      <h2 className="text-xl text-blue-900">{blog.title}</h2>
      <p className="text-gray-600">By {blog.author.name}</p>
    </div>
  );
}

export default Blog;