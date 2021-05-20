<template>
  <div class="container">
    <div class="profile">
      <br />
      <!--p>profile for id: {{ idNum }}</p-->
      <h3 class="page-title">Information</h3>
      <div id="profilecont">
        <div class="card">
          <div class="profileheader">
            <span>
              <h3>{{ prof.name }}</h3>
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
                  <td>{{ prof.college }}</td>
                </tr>
                <tr>
                  <td>Courses</td>
                  <td>{{ prof.courses }}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td v-if="prof.rating != 0">
                    {{ prof.rating }}
                  </td>
                  <td v-else>
                    Unrated
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
            <span>Rating</span>
            <span class="rating">
              <select
                class="col-2 custom-select"
                name="rating"
                id="rating"
                v-model="rating"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="none">Select a rating</option>
              </select>
            </span>
            <span v-if="ratingError" class="alert alert-text"
              >"Please select a rating from 1-5"</span
            >
          </div>
          <br />
          <textarea
            id="reviewcomment"
            rows="10"
            placeholder="Put your comment here"
            v-model="comment"
          ></textarea>
          <div style="text-align: right; padding-top: 1rem">
            <span v-if="commentError" class="alert alert-text"
              >"Please provide your comments. "</span
            >
            <button
              type="button"
              class="btn btn-primary"
              id="submitReview"
              @click="submitReview()"
            >
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
          <div class="row reviewItem" v-for="item in reviews">
            <br />
            <div class="col-3">
              <p>{{ item.authorname }}<br />{{ item.authorid }}</p>
            </div>
            <div class="col-8">
              <p>Rating: {{ item.rating }}</p>
              <p>
                {{ item.comment }}
              </p>
            </div>
            <div class="col-1">
              <span class="reportbtn" @click="reportReview(item)">Report</span>
            </div>
          </div>
        </div>
        <!--{{/each}}-->
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import axios from 'axios';

  const url = 'http://localhost:3000';

  export default {
    name: 'Profile',
    components: {
      Navbar
    },
    data: () => {
      return {
        prof: {
          name: '',
          idNum: '',
          college: '',
          courses: '',
          rating: 0
        },
        reviews: [],
        rating: 'none',
        comment: '',
        ratingError: false,
        commentError: false
      };
    },
    methods: {
      async submitReview() {
        if (this.validate()) {
          const review = {
            profid: this.prof._id,
            authorid: JSON.parse(localStorage.getItem('user')).idno,
            authorname: JSON.parse(localStorage.getItem('user')).name,
            comment: this.comment,
            rating: parseInt(this.rating),
            date: Date.now(),
            status: 'posted'
          };
          const response = await axios.post(`${url}/reviews/`, review);
          this.reviews.push(review);
          var ratingSum = 0;
          for (var i = 0; i < this.reviews.length; i++) {
            ratingSum += this.reviews[i].rating;
          }
          this.prof.rating = ratingSum / this.reviews.length;
          const editResponse = await axios.put(
            `${url}/profs/${this.prof._id}`,
            this.prof
          );
          this.reset();
          //this.$router.go()
        }
      },
      validate() {
        if (this.rating == 'none') {
          this.ratingError = true;
        } else {
          this.ratingError = false;
        }
        if (this.comment == '') {
          this.commentError = true;
        } else {
          this.commentError = false;
        }
        if (this.ratingError || this.commentError) {
          return false;
        }
        return true;
      },
      reset() {
        this.rating = 'none';
        this.comment = '';
        this.ratingError = false;
        this.commentError = false;
      },
      async reportReview(review) {
        console.log(review);
        const response = await axios.put(`${url}/reviews/report`, review);
        alert('Successfully reported ' + review.authorname + 'review!');
      }
    },
    async created() {
      if (this.$route.params.idNum) {
        const response = await axios.get(
          `${url}/profs/${this.$route.params.idNum}`
        );
        this.prof = response.data;
        const responseComments = await axios.get(
          `${url}/reviews/professor/${this.prof._id}`
        );
        this.reviews = responseComments.data;
      }
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
  .reviewItem:first-of-type {
    border-top: None;
    padding-top: 0px;
  }
  .reviewItem {
    border-top: 1px solid #999;
    padding-top: 1rem;
  }
  button {
    margin: 0;
  }
  .ratingarea {
    display: block;
    padding-bottom: 2px;
  }
  .card {
    margin-bottom: 2rem;
  }
  .reviewcard {
    padding: 2rem;
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
  .alert-text {
    padding-top: 0;
  }
  .rating {
    margin-left: 1rem;
  }
</style>
