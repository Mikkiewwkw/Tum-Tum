<template>
  <div class="start_menu">
    <div class="header-content">
      <img src="../../assets/svg/journey/Begin_Your_Journey.svg" />
    </div>
    
    </div class="inputs">
	    <input v-model="first_name"  placeholder="FIRST NAME" @input="firstname()">
		<!--<p>Message is: {{ message }}</p>?????????-->
	
		<input v-model="last_name" placeholder="LAST NAME">
		<input v-model="email" placeholder="EMAIL ADDRESS">
		<input v-model="psw" placeholder="PASSWORD(8+CHARACTERS)">
	</div>
	
	</div class="agreements">
		BY CONTINUING, YOU AGREE TO TUMTUM'S <div @click="terms_and_comditions" id="t&c"> TERMS AND CONDITIONS </div>
		AND 	<div @click="PRIVACY_POLICY" id="PP"> PRIVACY POLICY
		OR
		</div>
	</div>
	
	
	
    <div class="login_button">SIGN UP WITH
    	
    </div>
    
    <div class="begin_button" @click="beginClick">BEGIN</div>
    
    
    
  </div>
</template>

<script>
export default {
  name: "imgButton",
  data(){
  	return{first_name}
  }
  methods: {
  	firstname(){
  		
  		let fn= this.first_name
//		let fn=document.getElementsByClassName("first_name").value
//router pass
  		
  		
  	}
  	
    begin_button() {
      this.$router.push("/begin");
    },
//  userLogin() {
//    this.$router.push("/userlogin");  
//  }
  },
};
</script>

<style scoped>
@import imgButton from "../../assets/svg/wechat_icon/Vector.svg"
  .header-content {
    position: absolute;
    width: 91%;
    height: auto;
    left: 9%;
    top: 15%;
  }
  

 
</style>