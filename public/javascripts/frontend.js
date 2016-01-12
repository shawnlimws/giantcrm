  // register a new element called proto-element
  Polymer({
    is: "proto-element",
    // add a callback to the element's prototype
    ready: function() {
      this.textContent = "I'm a proto-element. Check out my prototype!"
    }
  });

  $(document).ready(function() {
    var lock = new Auth0Lock(
        // These properties are set in auth0-variables.js
        AUTH0_CLIENT_ID,
        AUTH0_DOMAIN
    );

    var userProfile;

    document.getElementById('btn-login').addEventListener('click', function() {
      lock.show(function(err, profile, token) {
        if (err) {
          // Error callback
          console.error("Something went wrong: ", err);
          alert("Something went wrong, check the Console errors");
        } else {
          // Success calback

          // Save the JWT token.
          localStorage.setItem('userToken', token);

          // Save the profile
        //   userProfile = profile;
        //   console.log(userProfile)
		      // console.log('login')
          window.location.replace("/users");
        }
      });
    });


    // document.getElementById('btn-api').addEventListener('click', function() {
    //     // Just call your API here. The header will be sent
    // })


});
