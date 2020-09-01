<template>
	
	
  <div class="start_menu">
    <div class="header-content">
      <!-- <img src="tumtum/src/assets/svg/byj/Begin_Your_Journey.svg"/> -->
	  <img :src="picture[0].url" />
      <!-- <img :src="picture[0].url"/> -->
    </div>
    <div class="blob">
    		<img :src="picture[1].url"/>
    </div>
    
    
   
    <div class="inputs">
	   		<input type="text" name="first_name" id="first_name"  @input="firstname()" placeholder="FIRST NAME" style="width: 332px; height: 41px;left: 21px;top: 220px;background: #F4F4F4;border-radius: 10px;margin-bottom:20px;"/>

	    		<!--<p>Message is: {{ message }}</p>?????????-->
	    		<input type="text" name="last_name" id="last_name"  @input="lastname()" placeholder="LAST NAME" style="width: 332px; height: 41px;left: 21px;top: 220px;background: #F4F4F4;border-radius: 10px;margin-bottom:20px;"/>
		    	<input type="text" name="email" id="email"  @input="email()" placeholder="EMAIL ADDRESS" style="width: 332px; height: 41px;left: 21px;top: 220px;background: #F4F4F4;border-radius: 10px;margin-bottom:20px;"/>
		    	<input type="text" name="pswd" id="pswd"  @input="pswd()" placeholder="PASSWORD(8+CHARACTER)" style="width: 332px; height: 41px;left: 21px;top: 220px;background: #F4F4F4;border-radius: 10px;margin-bottom:20px;"/>
		</div>
	
	
		<div class="agreements">
			BY CONTINUING, YOU AGREE TO TUMTUM'S <div @click="terms_and_conditions" id="t&c" style="color:#7C8D5F;"> TERMS AND CONDITIONS </div> AND <div @click="PRIVACY_POLICY" id="PP"style="color:#7C8D5F;"> PRIVACY POLICY
			</div>
		</div>
	
    		<div class="begin_button" @click="beginClick">BEGIN</div>
    </div>
    
    
  	
 
</template>

<script>
export default {
  name: "imgButton",
  data(){
  	return {
      picture: [
		{ pid: 0, url: require("/Users/Cholorophyll/Desktop/tum_tum/TumTum/tumtum/src/assets/svg/byj/Begin_Your_Journey.svg") },
		{ pid: 2, url: require("/Users/Cholorophyll/Desktop/tum_tum/TumTum/tumtum/src/assets/svg/cute_blob/cute_blob.svg") },

      ],
    }
  	
  },
  methods: {
  	firstname(){
  		
  		let fn= this.first_name
//		let fn=document.getElementsByClassName("first_name").value
//router pass
  		
  		
  	},
  	
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
	width: 299px;
	height: 109px;
	left: 32px;
	top: 55px;

	font-family: Bakso Sapi;
	font-style: normal;
	font-weight: normal;
	font-size: 48px;
	line-height: 58px;


	color: #533F22;
  }
  .blob{
  	position: absolute;
	width: 59px;
	height: 78px;
	left: 292px;
	top: 90px;
	margin-bottom: 20px;

  }
  .inputs{
  	display: flex;
	flex-direction: column;
    align-items: left;
    margin:50px;
  	
  }
  ::placeholder{
  	font-family: Bakso Sapi;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 22px;
	/* identical to box height */
	
	text-decoration-line: underline;

color: #848484;
  	
  }
  .first_name{
	width: 332px;
	height: 41px;
	left: 21px;
	top: 220px;
	background: #F4F4F4;
	border-radius: 10px;
	
  }
  
  .agreements{
  	position: absolute;
	width: 213px;
	height: 26px;
	left: 80px;
	top: 479px;
	
	font-family: Bakso Sapi;
	font-style: normal;
	font-weight: normal;
	font-size: 10px;
	line-height: 12px;
	
	color: #4A4A4A;
  }
  .begin_button{
  	position: absolute;
	width: 110px;
	height: 110px;
	left: 127px;
	top: 533px;
	background: #EABFA7;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 30px;

    font-family: Bakso Sapi;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 95px;
    text-align: center;
    text-transform: uppercase;

    color: #4a4a4a;
  }
  .t&c{
  	color: #7C8D5F;
  }
  .PP{
  	color: #7C8D5F;
  }
  
  
  

 
</style>