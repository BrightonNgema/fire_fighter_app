import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import * as Animatable from 'react-native-animatable';

const GooglePlacesInput = ({ correctAddress, onSearch }) => {
  return (
    <Animatable.View
      style={{ position: 'absolute', top: 150, width: '100%' }}
      animation={correctAddress ? "fadeInDown" : "fadeOutUp"}
      duration={correctAddress ? 300 : 1}
    >
      <GooglePlacesAutocomplete
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          onSearch(data, details);
        }}
        placeholder="Enter Correct Location"
        minLength={2}
        listViewDisplayed={false}
        autoFocus={false}
        returnKeyType={"search"}
        fetchDetails={true}
        styles={inputStyles}
        renderDescription={row => row.description || row.vicinity}
        query={{
          components: "country:za",
          key: "", //Get key
          language: "en", // language of the results
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
          rankby: "distance",
        }}
      />
    </Animatable.View>
  );
};

const inputStyles = {
  textInputContainer: {
    backgroundColor: "white",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: '90%',
    alignSelf: "center"
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: "#5d5d5d",
    fontSize: 16,
    backgroundColor: "white",
  },
  listView: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center"
  },
  powered: {
    height: 0,
    width: 0
  },
  predefinedPlacesDescription: {
    color: "#1faadb",
    backgroundColor: "white",
  },
};

export { GooglePlacesInput };
