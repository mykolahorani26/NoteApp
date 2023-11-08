import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import SelectionModal from '../components/SelectionModal';
import data from '../data.json'; // Make sure you have this file with clients and categories

const NoteScreen = ({route, navigation}) => {
  const {note, index, saveNote} = route.params;
  const isEditing = route.params && route.params.index !== undefined;
  const [noteText, setNoteText] = useState(note ? note.text : '');
  const [client, setClient] = useState(note ? note.client : data.clients[0]);
  const [category, setCategory] = useState(
    note ? note.category : data.categories[0],
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [selectionType, setSelectionType] = useState(null);

  const handleSaveNote = () => {
    const updatedNote = {
      text: noteText,
      client: client,
      category: category,
    };
    const noteIndex = isEditing ? index : undefined;
    saveNote(updatedNote, noteIndex);
    navigation.goBack();
  };

  const openModal = type => {
    setSelectionType(type);
    setModalVisible(true);
  };

  const handleSelect = item => {
    if (selectionType === 'client') {
      setClient(item);
    } else if (selectionType === 'category') {
      setCategory(item);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter note text"
        value={noteText}
        onChangeText={setNoteText}
      />
      <Button title={`Client: ${client}`} onPress={() => openModal('client')} />
      <Button
        title={`Category: ${category}`}
        onPress={() => openModal('category')}
      />
      <Button title="Save Note" onPress={handleSaveNote} />
      <SelectionModal
        visible={modalVisible}
        data={selectionType === 'client' ? data.clients : data.categories}
        onSelect={handleSelect}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default NoteScreen;
