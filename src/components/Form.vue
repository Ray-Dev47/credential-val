<template>
  <div >
      <form @submit.prevent="submitForm" v-if="!submittedResults">
        <label> Email: </label>
          <input v-model.lazy="email" type="email" required> 
          <label>Password:</label>
          <input v-model="password" type="password" required>
          <label>Role:</label>
          <select v-model="role">
            <option disabled>Please select one</option>
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer </option>       
          </select>
          <div class="terms">
            <input type="checkbox" v-model="terms" required>
            <label>I accept the given terms and conditions</label>
          </div>
          <!--<div>
            <label >Ray </label>
            <input type="checkbox" value="Ray" v-model="names">
          </div>
          <div>
            <label >Faith</label>
            <input type="checkbox" value="Faith" v-model="names">
          </div>
          <div>
            <label >Samuel</label>
            <input type="checkbox" value="Samuel" v-model="names">
          </div>
          <div>
            <label >Joy</label>
            <input type="checkbox" value="Joy" v-model="names">
          </div> -->
          <label >Skills</label>
          <input type="text" @keyup.alt="addSkill" v-model="tempSkills" >
          <div @click="deleteSkill(skill)" v-for="(skill,i) in skills" :key="i" class="pill">{{skill}}</div>
           <div class="submit">
              <button>Create an account</button>
           </div>
          
 
      </form>
               <div v-if="submittedResults">
            <h4>Form submitted details</h4>
            <ul>
                <li>{{email}}</li>
                <li>{{password}}</li>
                <li>{{role}}</li>
                <li>{{terms}}</li>
                <li>{{skill}}</li>
            </ul>
          </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            role: '',
            terms: false,
            // names: [] 
            tempSkills: '',
            skills: [],
            submittedResults: false        
        }
    },
    methods: {
        addSkill(e){
            // console.log(e)
            if(e.key === ',' && this.tempSkills){
                if (this.skills.includes(this.tempSkills)){
                    alert('Skill already included, please add a different one')
                    this.tempSkills = ''
                }else{
                    this.skills.push(this.tempSkills)
                    this.tempSkills = ''
                }                
            }
        },
        deleteSkill(skill){
                // this.skills.splice(this.skills.indexOf(e),1)  // works 
                // this.skills.splice(skill,1) // works
                this.skills = this.skills.filter((item) => {
                    return skill !== item
                })
              },

        submitForm(){
           this.submittedResults = true

        }
    }
}
</script>

<style>
form{
    max-width: 420px;
    background: white;
    margin: 30px auto;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input:focus {
  outline: none;
}
input[type=checkbox]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit{
    text-align: center;
}
</style>