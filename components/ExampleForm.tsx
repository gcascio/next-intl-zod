"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useI18nZodErrors } from '@/lib/useI18nZodErrors';

const schema = z.object({
  username: z.string().min(3),
  age: z.number().min(18),
});

type Schema = z.infer<typeof schema>;

export const ExampleForm = () => {
  useI18nZodErrors();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      age: 0,
    }
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register('username')} />
      {errors.username?.message && <span>{errors.username.message}</span>}
      <input type="number" {...register('age', { valueAsNumber: true })} />
      {errors.age?.message && <span>{errors.age?.message}</span>}
      <input type="submit" />
    </form>
  );
};