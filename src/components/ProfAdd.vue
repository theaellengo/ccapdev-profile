<template>
  <div class="dark-overlay">
    <modal v-if="profOptionProp" class="editmodal">
      <div class="card">
        <div class="header">
          <span v-if="profOptionProp == 'Add'"><h1 class="large text-dark">Add Professor</h1></span>
          <span v-if="profOptionProp == 'Edit'"><h1 class="large text-dark">Edit Professor</h1></span>
          <span>
            <button class="btn exit" @click="close()">
              <i class="fas fa-times"></i>
            </button>
          </span>
        </div>
        <form class="form">
          <div class="form-group">
            <label class="control-label" for="username">Name: <span v-if="errors.nameError" class="alert alert-text">{{errors.nameErrorMsg}}</span></label>
            <input type="text" placeholder="Firstname MI Lastname" v-model="editProf.name" />
          </div>
          <div class="form-group">
            <label class="control-label" for="idno">IDNum: <span v-if="errors.idNoError" class="alert alert-text">{{errors.idNoErrorMsg}}</span></label>
            <input v-if="profOptionProp == 'Add'" type="number" placeholder="ID Number" id="idno" v-model="editProf.idNum"/>
            <input v-if="profOptionProp == 'Edit'" type="number" placeholder="ID Number" id="idno" v-model="editProf.idNum" disabled/>
          </div>
          <div class="form-group">
            <label class="control-label" for="college">College: <span v-if="errors.collegeError" class="alert alert-text">{{errors.collegeErrorMsg}}</span></label>
            <select name="college" id="college" v-model="editProf.college">
              <option value="BAGCED">BAGCED</option>
              <option value="CCS">CCS</option>
              <option value="COL">COL</option>
              <option value="CLA">CLA</option>
              <option value="COS">COS</option>
              <option value="GCOE">GCOE</option>
              <option value="RVRCOB">RVRCOB</option>
              <option value="SOE">SOE</option>
            </select>
          </div>
          <div class="form-group">
            <label class="control-label" for="email">Courses: <span v-if="errors.coursesError" class="alert alert-text">{{errors.coursesErrorMsg}}</span></label>
            <input type="text" placeholder="Courses" v-model="editProf.courses" />
          </div>
          <br />
          <input value="Cancel" class="btn" @click="close()"/>
          <input v-if="profOptionProp == 'Edit'" value="Save Changes" class="btn btn-primary" @click="editDone()"/>
          <input v-if="profOptionProp == 'Add'" value="Add Prof" class="btn btn-primary" @click="addNew()" />
        </form>
      </div>
    </modal>
  </div>
</template>

<script>
  import axios from 'axios';
  const url = 'http://localhost:3000'

  export default {
    name: 'ProfAdd',
    props: {
      profOptionProp: String,
      profData: Object,
    },
    data: () => ({
      editProf: {
        courses: "",
        college: "",
        idNum: "",
        name: "",
        rating: 0,
      },
      errors: {
          nameError: false,
          nameErrorMsg: "",
          idNoError: false,
          idNoErrorMsg: "",
          collegeError: false,
          collegeErrorMsg: "",
          coursesError: false,
          coursesErrorMsg: "",
        }
    }),
    methods: {
      async addNew(){
          if(await this.validate()){
            try{
              const response = await axios.post(url + '/profs/', this.editProf)
              this.close()
            }
            catch(err){
              let msg = err.response.data.message
              if(msg.localeCompare("ID number already taken!") == 0){
                this.errors.idNoError = true
                this.errors.idNoErrorMsg = "ID number already taken!"
              }
            }
          }
      },
      async editDone(){
          if(this.validate()){
            const response = await axios.put(url + '/profs/' + this.editProf._id, this.editProf)
            this.close()
          }
      },
      close(){
        this.reset()
        this.$emit('close')
      },
      async validate(){
        if(this.editProf.name == ""){
          this.errors.nameError = true
          this.errors.nameErrorMsg = "Please input a name"
        } else{
          this.errors.nameError = false
        }
        if(this.editProf.idNum == ""){
          this.errors.idNoError = true
          this.errors.idNoErrorMsg = "Please input an ID Number"
        }
        else{
          const res = await axios.post(`${url}/profs/checkID`, {idNum: this.editProf.idNum})
          if(res.data.message == "taken" && this.profOptionProp == 'Add'){
            this.errors.idNoError = true
            this.errors.idNoErrorMsg = "ID number already taken!"
          }
          else{
            this.errors.idNoError = false
          }
        }
        if(this.editProf.college == ""){
          this.errors.collegeError = true
          this.errors.collegeErrorMsg = "Please select a college"
        }
        else{
          this.errors.collegeError = false
        }
        if(this.editProf.courses == ""){
          this.errors.coursesError = true
          this.errors.coursesErrorMsg = "Please input some courses"
        }
        else{
          this.errors.coursesError = false
        }
        if(this.errors.nameError || this.errors.idNoError || this.errors.collegeError || this.errors.coursesError){
          return false
        }
        else {
          return true
        }
      },
      reset(){
        this.editProf._id = undefined
        this.editProf.courses = ""
        this.editProf.idNum = ""
        this.editProf.name = ""
      }
    },
    async created(){
      if(this.profOptionProp == 'Edit'){
        this.editProf = Object.assign({}, this.profData)
      }
    }
  };
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
  }
  .exit {
    background: transparent;
    border: none;
  }
  .exit:hover {
    color: #255075;
    background-color: #f7f7f7;
  }
  .dark-overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .editmodal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
  }
</style>
