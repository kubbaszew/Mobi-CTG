import { View, Text, StyleSheet, Picker } from "react-native";
import React, { Component } from "react";
import { Button, FormLabel, FormInput } from "react-native-elements";
import content from "../../config/content.js";

const { surveyOptions } = content;

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDnpI3PBuJYP1SD1T0kbc5laCF4HiC3dnY",
    authDomain: "mobictg-53f13.firebaseapp.com",
    databaseURL: "https://mobictg-53f13.firebaseio.com",
    storageBucket: "mobictg-53f13.appspot.com",
    messagingSenderId: "968648298389"
  };
  firebase.initializeApp(config);


class Survey extends Component {
  constructor () {
    super();
    this.state = {
      age: "",
      pregnancy: "pierwsza",
      ktg: "pierwsze",
      stressLevel: "mały stres",
      satisfactionLevel: "mały",
      steps: []
    };
    window.location = {
    href: null
}
  }
  validateResults () {
    return this.state.age.length
  }


  goToHomeScene () {
    if (!this.validateResults()) {
      alert("Wpisz swoj wiek zanim zakonczysz ankiete.")
      return; }
    this.setState({ steps: this.props.steps});
    this.setState({ list: [...this.state.list, ...[newObject]] });

    console.log(this.state);
    this.props.navigator.push({
      name: "HomeScene"
    });

  }
  render () {
    return (
      <View style={styles.container}>
      <FormLabel> Wiek </FormLabel>
      <FormInput onChangeText={age => this.setState({ age })} />

        <FormLabel style={styles.formlabel}> Ciąza </FormLabel>

        <Picker
          selectedValue={this.state.pregnancy}
          onValueChange={pregnancy => this.setState({ pregnancy })}>
        {surveyOptions.pregnancy.map((value, i) => <Picker.Item key={i} label={value} value={value}/>)}
        </Picker>

        <FormLabel> Badanie KTG podczas tej ciązy </FormLabel>

        <Picker
          selectedValue={this.state.ktg}
          onValueChange={ktg => this.setState({ ktg })}>
        {surveyOptions.KTG.map((value, i) => <Picker.Item key={i} label={value} value={value}/>)}
        </Picker>

        <FormLabel> Ocena poziomu stresu podczas wykonywania badania </FormLabel>

        <Picker
          selectedValue={this.state.stressLevel}
          onValueChange={stressLevel => this.setState({ stressLevel })}>
        {surveyOptions.stressLevel.map((value, i) =>
          <Picker.Item key={i} label={value} value={value}/>)}
        </Picker>

        <FormLabel> Poziom satysfakcji z wykonanego badania</FormLabel>

        <Picker
          selectedValue={this.state.satisfactionLevel}
          onValueChange={satisfactionLevel => this.setState({ satisfactionLevel })}>
        {surveyOptions.satisfactionLevel.map((value, i) =>
          <Picker.Item key={i} label={value} value={value}/>)}
        </Picker>

        <Button buttonStyle={styles.button} title="ZAKOŃCZ ANKIETĘ" onPress={() => this.goToHomeScene()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flex: 1,
    backgroundColor: "#2979ff",

  },
  text: {
    alignItems: "center"
  },
  button: {
    backgroundColor: "#1de9b6",
  },
  formlabel: {
    color: "#fff"
  }

});

export default Survey;
