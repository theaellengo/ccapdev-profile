<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-m-8 col-xs-8">
        <br />
        <h3 class="page-title">
          <i class="fas fa-info-circle"></i> About (Prof)ile
        </h3>
        <div class="card border-white">
          <div class="card-body">
            <h4 class="card-title">What can you do?</h4>
            <ul class="card-content">
              <li>A user can view a professor’s profile.</li>
              <li>A user may add a review for a professor.</li>
              <li>
                A review will include a short comment and a rating (0-5 stars).
              </li>
              <li>
                A user may delete a review for a professor if the comment was
                made by the user.
              </li>
              <li>
                A user may edit a review for a professor if the review was made
                by the user.
              </li>
              <li>
                A user may view a list of all professors in the system. The user
                may choose to sort the professors alphabetically (ascending or
                descending order), or by department.
              </li>
              <li>
                A user may view professors per college. The user will pick a
                college, and will be presented a list of all the professors
                under that college.
              </li>
              <li>
                A user may search a professor by name. The user can input a
                string and will be presented with a list of professors whose
                name includes the inputted string.
              </li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              Confused about your role in this community?
            </h4>
            <h5>Visitor</h5>
            <ul class="card-content">
              <li>
                A visitor must register to be able to access the site and use
                its features.
              </li>
              <li>
                The visitor must enter their name, DLSU ID number, DLSU email
                address, a password, an avatar (optional; there will be a
                default avatar/icon), and a short description (can be left
                blank).
              </li>
              <li>
                A registered user must first be verified through the DLSU email
                they provided.
              </li>
              <li>
                The user will be redirected here immediately after registration
                and upon succeeding logins without being verified yet.
              </li>
              <li>
                A visitor must log-in using a verified account to be able to
                fully use the site and its features.
              </li>
              <li>
                Upon logging in, the user can start viewing professors and
                making comments.
              </li>
            </ul>
            <h5>Administrator</h5>
            <ul class="card-content">
              <li>
                An administrator must match the details of listed administrators
                in the system.
              </li>
              <li>An administrator must enter his/her credentials to login.</li>
            </ul>
          </div>
        </div>
        <br />
        <div class="footer">
          <hr />
          <div class="row">
            <div class="col-md-4">
              <h5>Developed By:</h5>
              <p>
                Buhion, Deborah Rose <br />
                Go, Thea Ellen <br />
                Intatano, Nick <br />
              </p>
            </div>
            <div class="col-md-4">
              <h5>Tech Stack:</h5>
              <p>
                Node, Express, Vue, <br />
                Mongodb, Vuetify
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-m-4 col-xs-4">
        <img src="img/about.png" />
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  export default {
    name: 'About',
    components: {
      Navbar
    }
  };
</script>

<style scoped>
  .card {
    padding: 1rem;
    border: none;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
  h1,
  h2,
  h3 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .footer {
    color: #777;
    font-size: 0.8rem;
  }
  .card-content {
    padding-left: 1rem;
  }
  ul {
    list-style-type: disc !important;
    padding-left: 1em !important;
    margin-left: 1em;
  }
  .page-title {
    color: #255075;
  }
</style>
