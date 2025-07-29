import { useForm } from "react-hook-form";


export default function SignUp() {
  const {
      register,
      formState: { errors },
      handleSubmit,
      getValues,
    } = useForm();
    const onSubmit = (data) =>{
    alert(JSON.stringify(data))
  }

  return(
    <div className="flex h-dvh justify-center sm:items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:border rounded-2xl p-2 w-[350px] h-[300px]">
        <h1 className="text-3xl">회원가입</h1>


        <label htmlFor='email'>이메일</label>
        <input {...register("email",{required: true, 
        pattern:{ 
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: '올바른 이메일을 입력해 주세요.'} })} type="email" id="email" className="border"/>
        {errors.email?.message && (
          <p>{errors.email?.message}</p>
        )}


        <label htmlFor='name'>이름</label>
        <input {...register("name",{required: true,
          minLength: {
            value:2,
            message:"너무 짧습니다. 2~8자 사이 숫자, 한글, 영어를 사용해주세요."
          },
          maxLength: {
            value:8,
            message:"너무 깁니다. 2~8자 사이 숫자, 한글, 영어를 사용해주세요."
          },
          pattern: {
            value: /^[ㄱ-ㅎ가-힣a-zA-Z0-9]*$/,
            message:"숫자, 한글, 영어만 사용해 주세요."
          }

        })}
        id='name' className="border"/>
        {errors.name?.message}


        <label htmlFor='password'>비밀번호</label>
        <input {...register("password",{required: true,
          minLength: {
            value:8,
            message:'너무 짧습니다. 8자리 이상 입력해 주세요.'
          }, maxLength: {
            value:25,
            message:'너무 깁니다. 25자리 이하로 입력해주세요.'
          },
          pattern:{
            value: /^[a-zA-Z0-9]*$/,
            message:'영어, 숫자 조합을 사용해야 합니다.'
          }
        }
        )} className="border"
        type="password"
        />
        {errors.password?.message}

        <label htmlFor='rePassword'>비밀번호 재입력</label>
        <input {...register("passwordCheck",{required: true,
          validate: (value) =>{
              const { password } = getValues();
              return password === value || '비밀 번호가 일치 하지 않습니다.'
            }
          

        })} type="password" id="rePassword" className="border"/>
        {errors.passwordCheck?.message}
        {console.log(errors)}
        <br />


        <button type="submit" className="border">회원가입</button>
      </form>
    </div>
  )
}