import { useForm } from "react-hook-form";
import { useSupabaseAuth } from "../supabase";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  const {
      register,
      formState: { errors },
      handleSubmit,
      getValues,
    } = useForm();
  const { signUp } = useSupabaseAuth();
  const navigate = useNavigate()
  const onSubmit = (data) =>{
  alert(JSON.stringify(data))
  signUp({email: data.email, password: data.password, userData: data.name })&&navigate('/login');
  }

  return(
    <div className="flex h-dvh justify-center sm:items-center">

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:border rounded-2xl p-2 w-[350px] h-[500px]">
        <h1 className="text-3xl">회원가입</h1>
        <label htmlFor='email'>이메일 <span className="text-[0.7rem] text-gray-600 dark:text-white delay-100 duration-300">※올바른 이메일 형식 사용</span></label>
        <input {...register("email",{required: true, 
        pattern:{ 
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: <span className="text-red-600 text-[0.8rem]">올바른 이메일을 입력해 주세요.</span>} })} 
          type="email" id="email" className="border"/>
        {errors.email?.message && (
          <p>{errors.email?.message}</p>
          
        ) || <br />}


        <label htmlFor='name'>이름 <span className="text-[0.7rem] text-gray-600 dark:text-white delay-100 duration-300">※2~8글자 사이 한글,숫자,영어만 사용</span></label>
        <input {...register("name",{required: true,
          minLength: {
            value:2,
            message: <span className="text-red-600 text-[0.8rem]">너무 짧습니다. 2~8자 사이 숫자, 한글, 영어를 사용해주세요.</span>
          },
          maxLength: {
            value:8,
            message: <span className="text-red-600 text-[0.8rem]">너무 깁니다. 2~8자 사이 숫자, 한글, 영어를 사용해주세요.</span>
          },
          pattern: {
            value: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]*$/,
            message: <span className="text-red-600 text-[0.8rem]">숫자, 한글, 영어만 사용해 주세요.</span>
          }

        })}
        id='name' className="border"/>
        {errors.name?.message && (
          <p>{errors.name?.message}</p>
          
        ) || <br />}


        <label htmlFor='password'>비밀번호 <span className="text-[0.7rem] text-gray-600 dark:text-white delay-100 duration-300">※8~25글자 사이 영어 대문자/소문자, 숫자 조합 사용 </span></label>
        <input {...register("password",{required: true,
          minLength: {
            value:8,
            message: <span className="text-red-600 text-[0.8rem]">너무 짧습니다. 8자리 이상 입력해 주세요.</span>
          }, maxLength: {
            value:25,
            message: <span className="text-red-600 text-[0.8rem]">너무 깁니다. 25자리 이하로 입력해주세요.</span>
          },
          pattern:{
            value: /^[a-zA-Z0-9]*$/,
            message: <span className="text-red-600 text-[0.8rem]">영어, 숫자 조합을 사용해야 합니다.</span>
          }
        }
        )} className="border"
        type="password"
        />
        {errors.password?.message && (
          <p>{errors.password?.message}</p>
          
        ) || <br />}

        <label htmlFor='rePassword'>비밀번호 재입력</label>
        <input {...register("passwordCheck",{required: true,
          validate: (value) =>{
              const { password } = getValues();
              return password === value || '비밀 번호가 일치 하지 않습니다.'
            }
          

        })} type="password" id="rePassword" className="border"/>
        {errors.passwordCheck?.message && (
          <p className="text-red-600 text-[0.8rem] mt-0.5">{errors.passwordCheck?.message}</p>
          
        ) || <br />}
        {console.log(errors)}
        <br />


        <button type="submit" className="border">회원가입</button>
      </form>
    </div>
  )
}