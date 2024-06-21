import React from 'react';
import Blog from './Blog';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: ' Naivete Fiete',
      author: {
        name: 'Shivam Kumar',
        image: 'https://via.placeholder.com/150'
      }
    },
    {
      id: 2,
      title: 'Case Studies',
      author: {
        name: 'Amit Singh',
        image: 'https://via.placeholder.com/150'
      }
    },
    {
      id: 3,
      title: ' World War-2',
      author: {
        name: 'Amarjeet Kumar',
        image: 'https://via.placeholder.com/150'
      }
    }
  ];

  return (
    <div className="flex flex-col items-center">
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;