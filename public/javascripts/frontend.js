  // register a new element called proto-element
  Polymer({
    is: "proto-element",
    // add a callback to the element's prototype
    ready: function() {
      this.textContent = "I'm a proto-element. Check out my prototype!"
    }
  });