import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../config/firebase';

interface UseAuthResult {
  user: User | null;
}

export default function useAuth(): UseAuthResult {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log('got user;', user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsub;
  }, []);

  return { user };
}

const styles = StyleSheet.create({});
