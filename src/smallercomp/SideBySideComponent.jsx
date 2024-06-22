import React from 'react';

const SideBySideComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start shadow-lg rounded-lg overflow-hidden">
      <div className="md:w-1/2 w-full h-3/4 p-6">
        <img 
          src="https://via.placeholder.com/400" 
          alt="Sample" 
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="md:w-2/6 w-full p-6 pl-10">
        <h2 className="text-4xl font-serif mb-6">LEADER NAME</h2>
        <p className="text-2xl font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim. Donec vel ligula non nulla finibus convallis. 
          Proin id orci vel arcu gravida elementum. Integer facilisis, nibh eget ultrices interdum, nulla sapien fermentum nulla, 
          ac vulputate est felis at metus. Morbi auctor, lorem a ullamcorper accumsan, risus risus scelerisque nisi, nec tincidunt dui dolor eu est.
        </p>
      </div>
    </div>
  );
};

export default SideBySideComponent;
