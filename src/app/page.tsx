'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSignUpSchema } from './validators/UserSignUpSchema';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormField from './components/FormField';

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
          <FormField
            type='email'
            id='email'
            placeholder='andrewlo957@gmail.com'
            register={register('email')}
            error={errors.email}
            label='Email'
          />
          <FormField
            type='password'
            id='password'
            placeholder='********'
            register={register('password')}
            error={errors.password}
            label='Password:'
          />
          <FormField
            type='password'
            id='confirmPassword'
            placeholder='********'
            register={register('confirmPassword')}
            error={errors.confirmPassword}
            label='Confirm Password:'
          />
          <FormField
            type='text'
            id='petName'
            placeholder='Wally'
            register={register('petName')}
            error={errors.petName}
            label='Pet Name'
          />
          <FormField
            type='text'
            id='petWeight'
            placeholder='32'
            register={register('petWeight')}
            error={errors.petWeight}
            label='Pet Weight'
          />
          <FormField
            type='text'
            id='idealPetWeight'
            placeholder='andrewlo957@gmail.com'
            register={register('idealPetWeight')}
            error={errors.idealPetWeight}
            label='Ideal Pet Weight'
          />
          <button type='submit'>Submit</button>
        </form>
      </main>
    </div>
  );
}
