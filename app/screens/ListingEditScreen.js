import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import AppForm from "../components/forms/Form";
import AppFormPicker from '../components/forms/AppFormPicker'

import Screen from "../components/Screen";
import CategoryPickerItem from '../components/Picker/CategoryPickerItem';
import FormImagePicker from "../components/forms/FormImagePicker";
import { ScrollView } from "react-native-gesture-handler";
import listingsApi from '../api/listings';
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image")
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 5,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "phone",
    label: "Mobile Phones",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "laptop",
    label: "Laptops",
    value: 6,
  },
  {
    backgroundColor: "#4b6bef",
    icon: "headphones",
    label: "Headset",
    value: 7,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Others",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();

   const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing(
      { ...listing, location },
      progress => console.log(progress)
      );
    if (!result.ok) 
      return alert('Could not save listing.');
      alert('listing created successfully!')
  }


  return (
    <ScrollView>
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
      </Screen>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default ListingEditScreen;
