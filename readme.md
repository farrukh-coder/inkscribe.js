## Inkscribe.js

`Inkscribe.js` is a lightweight package that provides a typewriter effect for text elements on your website. The package allows you to create a dynamic and engaging text typing effect, which can be used to grab users' attention and add interactivity to your site.

### Installation

Install the `Inkscribe.js` package via npm:

    npm install inkscribe.js

### Usage

    // Import the Typewriter class from the Inkscribe.js package
    import Typewriter from 'inkscribe.js';
    
    // Create an instance of the Typewriter class for the element with the specified selector
    const typewriter = new Typewriter('.typewriter-text');
    
    // Clear the text of the element
    typewriter.clearText();
    
    // Start the typewriter effect
    typewriter.startTyping();


### API

#### `constructor(elementSelector)`

Creates an instance of the `Typewriter` class for the typewriter effect on the element with the specified selector.

**Parameters:**

-   `elementSelector` (string): The selector of the element to apply the typewriter effect to.

#### `clearText()`

Clears the text of the typewriter display element.

#### `startTyping()`

Starts the typewriter effect for the element specified in the constructor.



### Examples

Here's an example of using the `Inkscribe.js` package:

    import Typewriter from 'inkscribe.js';
    
    // Create an instance of the Typewriter class for the element with the class .typewriter-text
    const typewriter = new Typewriter('.typewriter-text');
    
    // Clear the text of the element
    typewriter.clearText();
    
    // Start the typewriter effect
    typewriter.startTyping();


### Dependencies

`Inkscribe.js` has no external dependencies and can be easily integrated into your existing projects.

### Author

`Inkscribe.js` is developed by Farrukh Nosirov.

### License

`Inkscribe.js` is licensed under the **MIT License**.
