import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Linking, Alert, ScrollView
} from 'react-native';
import { Menu, Button, Provider } from 'react-native-paper';


export default function AddExpenseScreen() {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const categories = ['Groceries', 'Food', 'Travel', 'Shopping', 'Other'];


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Log Expense</Text>

      <Text style={styles.label}>Spent on</Text>
      
      <View>
        <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
            <Button
                mode="outlined"
                onPress={() => setMenuVisible(true)}
                style={styles.dropdownButton}
                contentStyle={{ justifyContent: 'space-between' }}
                labelStyle={{ color: category ? '#fff' : '#888' }}
            >
                {category || 'Select category'}
            </Button>
            }
            style={{ backgroundColor: '#1c1c1c' }}
        >
            {categories.map((cat) => (
            <Menu.Item
                key={cat}
                onPress={() => {
                setCategory(cat);
                setMenuVisible(false);
                }}
                title={cat}
                titleStyle={{ color: '#000' }}
            />
            ))}
        </Menu>
      </View>
      
      <Text style={styles.label}>Amount spent</Text>
      <TextInput
        placeholder="₹ 0"
        placeholderTextColor="#fff"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={[styles.input, { color: '#fff' }]}
      />

      <Text style={styles.label}>Payment Method</Text>
      <View style={styles.paymentMethods}>
      </View>


      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#0c1f1f', flex: 1, paddingVertical: 100, paddingHorizontal: 25 },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 20 },
  label: { color: '#fff', fontWeight: '600', marginseTop: 15, marginBottom: 5 },
  dropdown: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  option: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 10,
    marginBottom: 10,
  },
  optionSelected: { backgroundColor: '#4caf50', borderColor: '#4caf50' },
  optionText: { color: '#fff' },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardOptions: { marginTop: 20 },
  submitBtn: {
    backgroundColor: '#e53935',
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 10,
  },
  submitText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
});
