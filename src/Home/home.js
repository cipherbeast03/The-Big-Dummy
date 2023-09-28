import React from 'react';
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';

function Home() {
  return (
    <div>
      <Navbar />
      <center>
        <h1>Welcome to Big dummy</h1>
      </center>
      <p>
        The CSS lines "display: flex;" and "flex-direction: column;" are used to
        create a flexible layout for elements within a container. Let's break
        down what each line does: display: flex;: This CSS property is applied
        to a container element, and it turns the container into a flex
        container. When a container is set to display: flex;, its immediate
        child elements become flex items. Flex containers have a flexible
        layout, which means they can automatically adjust the size and position
        of their child items to fit the available space. flex-direction:
        column;: This CSS property is used to define the main axis along which
        the flex items should be laid out within the flex container. When you
        set flex-direction to "column," it means that the main axis runs
        vertically, from top to bottom. In this layout, the flex items will be
        stacked vertically within the container, one below the other. Here's a
        visual representation of what happens when you apply these CSS rules to
        a container
      </p>
      <Footer />
    </div>
  );
}

export default Home;
