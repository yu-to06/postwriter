import UserAuthForm from "@/components/user-auth-form";
import Link from "next/link";

export default function Login() {
  return (
    <div className='container h-screen w-screen flex flex-col justify-center items-center'>
      <div className='mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6'>
        <div className='text-center space-y-2'>
          <h1 className='text-2xl font-semibold tracking-tight'>
            Welcome Back!!
          </h1>
          <p className='text-sm text-muted-foreground'>
            メールアドレスを入力してください
          </p>
        </div>

        <UserAuthForm />

        <p className='px-8 text-center text-sm text-muted-foreground'>
          <Link href={"/register"} className='underline underline-offset-4'>
            アカウントを持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  );
}
