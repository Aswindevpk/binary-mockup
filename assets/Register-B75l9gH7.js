import{u as p,r as c,J as m,j as e,F as h,A as d,a as u,b as g,c as x,d as b,L as f}from"./index-BPwmDDao.js";function y(s){const n=p(),[a,l]=c.useState({username:"",email:"",password:"",confirm_password:""}),[o,i]=c.useState({username:null,email:null,password:null,confirm_password:null});return{formData:a,setFormData:l,errors:o,handleSubmit:async t=>{t.preventDefault(),s("submitting"),i({username:null,email:null,password:null,confirm_password:null}),m.success("User registerd Successfully"),n(`/verify-otp/${a.username}`),m.success("Otp has sent to Email")}}}function j(){const[s,n]=c.useState("typing"),{formData:a,setFormData:l,errors:o,handleSubmit:i}=y(n);return e.jsx(e.Fragment,{children:e.jsxs("form",{onSubmit:i,children:[w.map(r=>e.jsx(h,{...r,value:a[r.name],onChange:t=>{l({...a,[t.target.name]:t.target.value})},status:s,error_message:o[r.name]},r.id)),e.jsxs(d,{className:"text-center mb-2",children:["By creating an account you agree with our",e.jsx(u,{className:"px-1 underline",children:"Terms of Service"}),",",e.jsx("br",{}),e.jsx(u,{className:"px-1 underline",children:"Privacy Policy"}),", and our default",e.jsx(u,{className:"px-1 underline",children:"Notification Settings."})]}),e.jsx(g,{disabled:s==="submitting",className:"auth__btn",type:"submit",children:"Create account"})]})})}const w=[{id:1,name:"username",type:"text",placeholder:"",pattern:"^[a-zA-Z0-9]{3,16}$",errorMessage:"Username must be alphanumeric and 3-16 characters long",label:"Username",required:!0},{id:2,name:"email",type:"email",placeholder:"",errorMessage:"Enter a valid email address.",label:"Email",required:!0},{id:3,name:"password",type:"password",placeholder:"",pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",errorMessage:"Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character",label:"Password",required:!0},{id:4,name:"confirm_password",type:"password",placeholder:"",pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",errorMessage:"password not matching.",label:"Confirm password",required:!0}],v=()=>e.jsxs(x,{children:[e.jsx(b,{children:"Register to Binary"}),e.jsx(j,{}),e.jsxs(d,{className:"text-center mt-2",children:["Already have an Account ?"," ",e.jsx(f,{className:"ml-1 cursor-pointer hover:text-primary",to:"/login",children:"Log In"})]})]});export{v as default};
