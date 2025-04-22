'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSignUpSchema } from './validators/UserSignUpSchema';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  petName: string;
  petWeight: string;
  idealPetWeight?: string;
}

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSignUpSchema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const formSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  return (
    <div className={styles.page}>
      <main className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.ollieImage}
            src='https://placehold.co/600x400'
            alt='Ollie image'
            width={600}
            height={400}
            priority
          />
        </div>
        <form className={styles.signUpForm} onSubmit={handleSubmit(formSubmit)}>
          <div className={styles.inputFieldContainer}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='andrewlo957@gmail.com'
              {...register('email')}
            />
            {errors.email && <div>{errors.email.message}</div>}
          </div>

          {/* <input />
          <input />
          <input />
          <input />
          <input /> */}
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}
