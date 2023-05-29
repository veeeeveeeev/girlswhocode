import React from 'react';
import Header from './widgets/Header';

const About = () => {
  return (
    <div>
    <Header title="About this blog"/>
    <div className='flex flex-col md:flex-row gap-20 mx-auto pt-28 px-12 sm:px-24'>
      <p className='text-5xl leading-tight text-orange flex-none'>Where it <br /> all <span className='italic'> started</span></p>
      <p className='text-2xl text-justify'>Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Etiam tempor orci eu lobortis elementum nibh tellus. In dictum non consectetur a erat nam. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Vel risus commodo viverra maecenas accumsan. At urna condimentum mattis pellentesque id nibh tortor. Id faucibus nisl tincidunt eget nullam non nisi. Lectus magna fringilla urna porttitor rhoncus. Amet luctus venenatis lectus magna fringilla urna. Morbi tristique senectus et netus et malesuada fames.</p>
    </div>
    <div className='flex flex-col md:flex-row-reverse gap-20 mx-auto pt-28 px-12 sm:px-24'>
      <p className='text-5xl leading-tight text-green italic flex-none text-right'>Purpose</p>
      <p className='text-2xl text-justify'>Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Etiam tempor orci eu lobortis elementum nibh tellus. In dictum non consectetur a erat nam. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Vel risus commodo viverra maecenas accumsan. At urna condimentum mattis pellentesque id nibh tortor. Id faucibus nisl tincidunt eget nullam non nisi. Lectus magna fringilla urna porttitor rhoncus. Amet luctus venenatis lectus magna fringilla urna. Morbi tristique senectus et netus et malesuada fames.</p>
    </div>
    <div className='flex flex-col md:flex-row gap-20 mx-auto py-28 px-12 sm:px-24'>
      <p className='text-5xl leading-tight text-orange italic flex-none'>Creator</p>
      <p className='text-2xl text-justify'>Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Etiam tempor orci eu lobortis elementum nibh tellus. In dictum non consectetur a erat nam. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Vel risus commodo viverra maecenas accumsan. At urna condimentum mattis pellentesque id nibh tortor. Id faucibus nisl tincidunt eget nullam non nisi. Lectus magna fringilla urna porttitor rhoncus. Amet luctus venenatis lectus magna fringilla urna. Morbi tristique senectus et netus et malesuada fames.</p>
    </div>
    </div>
    
  )
}

export default About