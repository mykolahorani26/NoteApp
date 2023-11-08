import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ({notes, onDelete, onEdit}) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <NoteItem
          note={item}
          onDelete={() => onDelete(index)}
          onEdit={() => onEdit(item, index)}
        />
      )}
      ListEmptyComponent={
        <Text style={styles.noNotesText}>No notes available</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  noNotesText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
  },
});

export default NoteList;
