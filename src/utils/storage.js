import AsyncStorage from '@react-native-async-storage/async-storage';

export const getNotes = async () => {
  const notesData = await AsyncStorage.getItem('notes');
  return notesData ? JSON.parse(notesData) : [];
};

export const saveNotes = async notes => {
  await AsyncStorage.setItem('notes', JSON.stringify(notes));
};
