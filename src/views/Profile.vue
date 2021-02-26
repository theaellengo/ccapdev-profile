<template>
  <Navbar />
  <div class="container">
    <div class="profile">
      <br />
      <!--p>profile for id: {{ idNum }}</p-->
      <h3 class="page-title">Information</h3>
      <div id="profilecont">
        <div class="card">
          <div class="profileheader">
            <span>
              <h3>Chua, Unisse</h3>
            </span>
            <span>
              <div class="editbtn">
                <button
                  class="btn"
                  id="show-modal"
                  @click="showModal = !showModal"
                >
                  Edit Professor
                </button>
              </div>
            </span>
          </div>
          <div class="profilearea">
            <table class="table table-borderless">
              <thead>
                <h5></h5>
              </thead>
              <tbody>
                <tr>
                  <td>College:</td>
                  <td>CCS</td>
                </tr>
                <tr>
                  <td>Department:</td>
                  <td>Software Technology Dept.</td>
                </tr>
                <tr>
                  <td>Courses</td>
                  <td>CSSWENG, CCAPDEV, STSWENG</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td>
                    <i class="fa fa-star fa-fw"></i>
                    <i class="fa fa-star fa-fw"></i>
                    <i class="fa fa-star fa-fw"></i>
                    <i class="fa fa-star fa-fw"></i>
                    <i class="fa fa-star fa-fw"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div id="reviewsection">
      <div class="reviewbox">
        <div class="addreviewheader">
          <span><h4>Add Review</h4></span>
        </div>
        <div class="entry">
          <div class="ratingarea">
            <span>Rating: </span>
            <span class="rating">
              <!-- source: https://codepen.io/mmoradi08/pen/yLyYrGg-->
              <span class="rating-stars">
                <ul id="stars">
                  <li class="star" data-value="1">
                    <i class="far fa-star"></i>
                  </li>
                  <li class="star" data-value="2">
                    <i class="far fa-star"></i>
                  </li>
                  <li class="star" data-value="3">
                    <i class="far fa-star"></i>
                  </li>
                  <li class="star" data-value="4">
                    <i class="far fa-star"></i>
                  </li>
                  <li class="star" data-value="5">
                    <i class="far fa-star"></i>
                  </li>
                </ul>
              </span>
            </span>
          </div>
          <textarea
            id="reviewcomment"
            rows="10"
            placeholder="Put your comment here"
          ></textarea>
          <div style="text-align: right; padding-top: 1rem">
            <button type="button" class="btn btn-primary" id="submitReview">
              Submit Review
            </button>
          </div>
        </div>
      </div>

      <div class="reviews">
        <div class="reviewheader">
          <span><h4>Reviews</h4></span>
        </div>
        <!--{{#each Review}}-->
        <div class="card reviewcard">
          <div class="row">
            <div class="col-1">
              <img src="img/avatar.jpg" />
            </div>
            <div class="col-10">
              <p>Rating: ★★★★</p>
              <p>She is very nice and understanding!</p>
            </div>
            <div class="col-1">
              <a href="/" class="reportbtn">Report</a>
            </div>
          </div>
        </div>
        <!--{{/each}}-->
      </div>
    </div>
  </div>
  <div v-if="showModal" class="dark-overlay">
    <div class="editmodal">
      <ProfEdit :viewdata="showModal" @clickedItem="showModal = !showModal" />
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import ProfEdit from '@/components/ProfEdit.vue';
  export default {
    name: 'Profile',
    data: () => {
      return {
        idNum: 0,
        showModal: false
      };
    },
    components: {
      Navbar,
      ProfEdit
    },
    created() {
      this.idNum = this.$route.params.idNum;
    }
  };
</script>

<style scoped>
  .profilearea {
    padding-left: 1rem;
    padding-top: 1rem;
  }
  .profileheader {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;
    font-size: 1rem;
    border: none;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 2px 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
  button {
    margin: 0;
  }
  .ratingarea {
    display: flex;
  }
  ul li {
    display: inline;
  }
  #stars {
    padding-left: 1rem;
  }
  .input:focus {
    outline: none !important;
    border: 1px solid red;
    box-shadow: 0 0 10px #719ece;
  }
  .star:hover {
    color: #3b87ca;
  }
  .card {
    margin-bottom: 2rem;
  }
  .reviewcard {
    padding: 1rem;
  }
  .reportbtn {
    color: #999;
  }
  .reportbtn:hover {
    color: #3b87ca;
  }
  img {
    width: 50%;
    border-radius: 50%;
  }
  .editbtn {
    float: right;
  }
  .editmodal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
  }
  .dark-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
