import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {

    const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome to <Text style={styles.brand}>Sherry!</Text></Text>
          <Text style={styles.subheading}>Expense Tracker</Text>
        </View>
        <Ionicons name="person-circle-outline" size={38} color="#fff" />
      </View>

      {/* Your Expenses */}
      <Text style={styles.sectionTitle}>Your Expenses</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.expenseScroll}>
        {/* Dummy category icons */}
        <View style={styles.expenseIcon} />
        <View style={styles.expenseIcon} />
        <View style={styles.expenseIcon} />
        <TouchableOpacity style={styles.addCircle}>
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
      </ScrollView>

      {/* Log Your Spending */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Log your spending</Text>
        <Text style={styles.cardSubtitle}>Manage your finances easily!</Text>
        <TouchableOpacity style={styles.redButton} onPress={() => navigation.navigate('AddExpense')}>
          <Text style={styles.redButtonText}>Add Expense</Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming Payments */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Rent Due</Text>
        <Text style={styles.cardSubtitle}>Next Week</Text>
        <TouchableOpacity style={styles.redButtonSmall}>
          <Text style={styles.redButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>

      {/* Insights */}
      <Text style={styles.sectionTitle}>Insights</Text>
      <View style={styles.insightGrid}>
        <View style={styles.insightItem}><Text style={styles.insightText}>Spending</Text></View>
        <View style={styles.insightItem}><Text style={styles.insightText}>Monthly</Text></View>
        <View style={styles.insightItem}><Text style={styles.insightText}>Payment</Text></View>
        <View style={styles.insightItem}><Text style={styles.insightText}>Track</Text></View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e1b1e',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  welcome: {
    color: '#fff',
    fontSize: 18,
  },
  brand: {
    fontWeight: 'bold',
    color: '#fff',
  },
  subheading: {
    color: '#aaa',
    fontSize: 14,
  },
  sectionTitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  expenseScroll: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  expenseIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1e2e2e',
    marginRight: 10,
  },
  addCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f33',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#1e2e2e',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardSubtitle: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 10,
  },
  redButton: {
    backgroundColor: '#f33',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  redButtonSmall: {
    backgroundColor: '#f33',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  redButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  insightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  insightItem: {
    width: '48%',
    height: 100,
    backgroundColor: '#1c2c2c',
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insightText: {
    color: '#fff',
  },
});
