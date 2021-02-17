<template>
  <div>
    <div class="row">
      <div class="col-lg-8 col-m-8 col-xs-8">
        <br />
        <h2>About (Prof)ile</h2>
        <h3>What can you do?</h3>
        <p class="info">
          A user can view a professor’s profile. <br />
          A user may add a review for a professor.<br />
          A review will include a short comment and a rating (0-5 stars). <br />
          A user may delete a review for a professor if the comment was made by
          the user. <br />
          A user may edit a review for a professor if the review was made by the
          user. <br />
          A user may view a list of all professors in the system. The user may
          choose to sort the professors <br />
          alphabetically (ascending or descending order), or by department.
          <br />
          A user may view professors per college. The user will pick a college,
          and will be presented a list of <br />
          all the professors under that college. <br />
          A user may search a professor by name. The user can input a string and
          will be presented with a list of <br />
          professors whose name includes the inputted string.
        </p>
        <h3>Confused about your role in this community?</h3>
        <h4>Visitor</h4>
        <p>
          A visitor must register to be able to access the site and use its
          features. The visitor must enter their name, DLSU ID number, DLSU
          email address, a password, an avatar (optional; there will be a
          default avatar/icon), and a short description (can be left blank). A
          registered user must first be verified through the DLSU email they
          provided. The user will be redirected here immediately after
          registration and upon succeeding logins without being verified yet. A
          visitor must log-in using a verified account to be able to fully use
          the site and its features. Upon logging in, the user can start viewing
          professors and making comments.
        </p>
        <h4>Administrator</h4>
        <p>
          An administrator must match the details of listed administrators in
          the system. An administrator must enter his/her credentials to login.
        </p>
        <br />
        <div class="devs">
          <hr />
          <h4>Developed By:</h4>
          <p class="devs">
            Buhion, Deborah Rose <br />
            Go, Thea Ellen <br />
            Intatano, Nick <br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1,
  h2 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .devs {
    color: #777;
    font-size: 0.8rem;
  }
</style>
