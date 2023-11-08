import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NoteItem = ({note, onDelete, onEdit}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{note.text}</Text>
      <Text>Client: {note.client}</Text>
      <Text>Category: {note.category}</Text>
      <TouchableOpacity onPress={onEdit} style={styles.button}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.button}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});

export default NoteItem;
