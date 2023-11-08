import React, {useState, useEffect} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import NoteList from '../components/NoteList';
import {getNotes, saveNotes} from '../utils/storage';

const MainScreen = ({navigation}) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const loadNotes = async () => {
      const loadedNotes = await getNotes();
      setNotes(loadedNotes);
    };

    loadNotes();
  }, []);

  const handleAddNote = () => {
    navigation.navigate('Note', {saveNote});
  };

  const saveNote = async note => {
    const newNotes = [...notes];
    if (index !== undefined && index >= 0) {
      newNotes[index] = note;
    } else {
      newNotes.push(note);
    }
    await saveNotes(newNotes);
    setNotes(newNotes);
  };

  const handleDeleteNote = async index => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    await saveNotes(newNotes);
    setNotes(newNotes);
  };

  const handleEditNote = (note, index) => {
    navigation.navigate('Note', {note, index, saveNote});
  };

  return (
    <View style={styles.container}>
      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={handleEditNote}
      />
      <Button title="Add Note" onPress={handleAddNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;
