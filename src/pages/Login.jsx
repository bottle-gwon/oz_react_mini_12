import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../supabase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSucess } from "../RTK/slice";
import LoginLoading from "../loading/LoginLoading";



export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginData, setLoginData] = useState({});
  const [isLoading, setIsLoading] = useState(false); //작성완료 전은 로딩중 아님
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) =>{
    // alert(JSON.stringify(data))
    setLoginData(data)
  }

  // 로그인 valid 데이터를 받아오는동안 로딩창을 만들어두자
  useEffect(()=>{
      const response = async () =>{
        try{
          setIsLoading(true)
          const res = await login({email: loginData.email, password: loginData.password});
          if(res.error){
            throw new Error(`login fail`)
          }
          dispatch(loginSucess(res.user))
          navigate('/')
        }catch(e){
          alert(e.message);
          console.error(e)
        }finally{
          setIsLoading(false)
        }
        
      }

    if(Object.keys(loginData).length !==0){
      response()
    }
    
    
  },[loginData])

  const { login } = useSupabaseAuth();

  return(
    
    <div className="flex h-dvh justify-center sm:items-center">
      {isLoading? <LoginLoading /> : null}
      <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col ${isLoading? 'blur-sm pointer-events-none' : ''} sm:border rounded-2xl p-2 w-[350px] h-[300px]`}>
        <h1 className="text-3xl">Login</h1>
        <br/>
        <input {...register("email",{required: true, 
        pattern:{ 
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: <span className="text-red-600 text-[0.8rem]">올바른 이메일을 입력해 주세요.</span>} })} type="email" className="border placeholder-gray-400" placeholder="Email"/>
        {errors.email?.message && (
          <p>{errors.email?.message}</p>
        ) || <br /> }
        {console.log(errors)}

        <input {...register("password",{required: true,
          minLength: {
            value:8,
            message: <span className="text-red-600 text-[0.8rem]">너무 짧습니다. 8자리 이상 입력해 주세요.</span>
          }, maxLength: {
            value:25,
            message: <span className="text-red-600 text-[0.8rem]">너무 깁니다. 25자리 이하로 입력해주세요.'</span>
          }, pattern:{
            value: /^[a-zA-Z0-9]*$/,
            message: <span className="text-red-600 text-[0.8rem]">영어, 숫자 조합을 사용해야 합니다.'</span>
          }
        }
        )} className="border placeholder-gray-400"
        type="password"
        placeholder="Password"
        />
        {errors.password?.message &&
        <p> {errors.password?.message} </p> 
         || <br /> }
        
       
        <button type="submit" className="border">로그인</button>
        <Link to={"/SignUp"} className="border mt-2 text-center">회원가입</Link>
      </form>
    </div>
  )
}