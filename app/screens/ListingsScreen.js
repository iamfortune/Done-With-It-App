import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton'
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);
  
  useEffect(() => {
    loadListings();
  }, []);

 

    return (
      <Screen style={styles.screen}>
        {error && (
          <>
          <AppText>Couldn't retrieve listings.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <ActivityIndicator visible={loading} />
        <FlatList 
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => 
            <Card 
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
        }
        />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        marginTop: 10,
        backgroundColor: colors.light
    },
})

export default ListingsScreen;