<template>
  <AdminNav />
  <div class="container">
    <div class="profile">
      <br />
      <!--p>profile for id: {{ idNum }}</p-->
      <h3 class="page-title">Information</h3>
      <div id="profilecont">
        <div class="card">
          <div class="profileheader">
            <span>
              <h3>{{prof.name}}</h3>
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
                  <td>{{prof.college}}</td>
                </tr>
                <tr>
                  <td>Courses</td>
                  <td>{{prof.courses}}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td v-if="prof.rating != 0">
                    {{prof.rating}}
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
      <div class="reviews">
        <div class="reviewheader">
          <span><h4>Reviews</h4></span>
        </div>
        <!--{{#each Review}}-->
        <div class="card reviewcard">
          <div class="row reviewItem" v-for="item in reviews">
            <div class="col-3">
              <p>{{item.authorid}}</p>
              <p>{{item.authorname}}</p>
            </div>
            <div class="col-8">
              <p>Rating: {{item.rating}}</p>
              <p>{{item.comment}}</p>
            </div>
            <div class="col-1">
              <span class="reportbtn" @click="deleteReview(item)">Delete</span>
            </div>
          </div>
        </div>
        <!--{{/each}}-->
      </div>
    </div>
  </div>
  <ProfAdd :profOptionProp="editOption" :profData="prof" v-if="showModal" @close="closeModal()"/>
</template>

<script>
  import AdminNav from '@/components/AdminNav.vue';
  import ProfAdd from '@/components/ProfAdd.vue';
  import axios from 'axios';

  const url = 'http://localhost:3000'

  export default {
    name: 'AdminProfile',
    data: () => {
      return {
        idNum: 0,
        showModal: false,
        editOption: "Edit",
        prof: {
          name: "",
          idNum: "",
          college: "",
          courses: "",
          rating: 0,
        },
        reviews: [],
      };
    },
    components: {
      AdminNav,
      ProfAdd
    },
    methods: {
      closeModal(){
        this.$router.go();
      },
      async deleteReview(review){
        const delId = review._id
        const response = await axios.delete(`${url}/reviews/${review._id}`)
        alert("Successfully deleted " + review.authorname + "' review!")
        this.reviews = this.reviews.filter((x) => {
          return x._id != delId
        })
        var ratingSum = 0
        for(var i = 0; i < this.reviews.length; i++){
          ratingSum+= this.reviews[i].rating
        }
        this.prof.rating = ratingSum/this.reviews.length
        const editResponse = await axios.put(`${url}/profs/${this.prof._id}`,this.prof)
        this.$router.go()
      }
    },
    async created(){
      if(this.$route.params.idNum){
        const url = 'http://localhost:3000'
        const response = await axios.get(`${url}/profs/${this.$route.params.idNum}`)
        this.prof = response.data
        const responseComments = await axios.get(`${url}/reviews/professor/${this.prof._id}`)
        this.reviews = responseComments.data
        console.log(this.prof)
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
  button {
    margin: 0;
  }
  .ratingarea {
    display: flex;
  }
  .reviewItem:first-of-type{
    border-top: None;
    padding-top: 0px
  }
  .reviewItem{
    border-top: 1px solid #999;
    padding-top: 1px
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
