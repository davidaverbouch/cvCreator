import { defaultCV } from '@/lib/defaultValues/cv';
import { defaultUser } from '@/lib/defaultValues/user';
import { getUserCV } from '@/lib/methods/cv';
import { getUser } from '@/lib/methods/user';

export const useGetCV = () => {
  const user = getUser({ firstName: 'David', lastName: 'Averbouch' });
  const userCV = getUserCV('David', 'Averbouch');

  return {
    cv: userCV ?? defaultCV,
    user: user ?? defaultUser,
  };
};
