import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../supabase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSucess } from "../RTK/slice";



export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) =>{
    // alert(JSON.stringify(data))
    setLoginData(data)
  }

  useEffect(()=>{
      const response = async () =>{
        const res = await login({email: loginData.email, password: loginData.password});
        if(res.user){
          dispatch(loginSucess(res.user))
          navigate('/')
        }
        else if(res.error){
          alert(res.error.message);
        }
      }

    if(Object.keys(loginData).length !==0){
      response()
    }
    
    
  },[loginData])

  const { login } = useSupabaseAuth();

  return(
    <div className="flex h-dvh justify-center sm:items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:border rounded-2xl p-2 w-[350px] h-[300px">
        <h1 className="text-3xl">Login</h1>
        <br/>
        <input {...register("email",{required: true, 
        pattern:{ 
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: '올바른 이메일을 입력해 주세요.'} })} type="email" className="border"/>
        {errors.email?.message && (
          <p>{errors.email?.message}</p>
        )}
        {console.log(errors)}

        <input {...register("password",{required: true,
          minLength: {
            value:8,
            message:'너무 짧습니다. 8자리 이상 입력해 주세요.'
          }, maxLength: {
            value:25,
            message:'너무 깁니다. 25자리 이하로 입력해주세요.'
          }, pattern:{
            value: /^[a-zA-Z0-9]*$/,
            message:'영어, 숫자 조합을 사용해야 합니다.'
          }
        }
        )} className="border"
        type="password"
        />
        {errors.password?.message}
        <br />
       
        <button type="submit" className="border">로그인</button>
        <Link to={"/SignUp"} className="border mt-2 text-center">회원가입</Link>
      </form>
    </div>
  )
}