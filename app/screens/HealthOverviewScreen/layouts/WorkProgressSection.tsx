import React from 'react';
import { useNavigation } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WorkoutProgressSection = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Tập luyện hôm nay</Text>
        <TouchableOpacity onPress={() => navigation.navigate('WorkoutProgress')}>
          <Text style={styles.seeMoreText}>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Cards */}
      <View style={styles.cardsContainer}>
        {/* Calories Card */}
        <View style={[styles.card, styles.shadow]}>
          <Text style={styles.cardTitle}>Calories</Text>
          <Text style={styles.cardValue}>760 kCal</Text>
          <View style={styles.cardImageContainer}>
            <Image
              source={require('../../../../assets/images/calories-pie-icon.png')}
              resizeMode='contain'
              style={styles.cardImage}
            />
          </View>
        </View>

        {/* Workout Time Card */}
        <View style={[styles.card, styles.shadow]}>
          <Text style={styles.cardTitle}>Thời gian tập</Text>
          <Text style={styles.cardValue}>30 phút</Text>
          <View style={styles.cardImageContainer}>
            <Image
              source={require('../../../../assets/images/sleep-graph.png')}
              resizeMode='contain'
              style={styles.cardImage}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    color: '#1D1617',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26
  },
  seeMoreText: {
    color: '#ADA4A5',
    fontSize: 12,
    fontWeight: '500'
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 18,
    marginTop: 6
  },
  card: {
    width: 150,
    height: 150,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff'
  },
  cardTitle: {
    color: '#1D1617',
    fontSize: 12,
    fontWeight: '500'
  },
  cardValue: {
    color: '#98B9FE',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4
  },
  cardImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18
  },
  cardImage: {
    width: 60,
    height: 60
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5
  }
});

export default WorkoutProgressSection;
