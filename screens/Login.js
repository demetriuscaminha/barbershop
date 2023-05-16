import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }

  return (
    <View style={styles.container}>
      <Text h3>Open up App.js to start working on your app!</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType='email-address'
      />
      <Input
        placeholder="Sua Senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        icon={
          <Icon name="check" size={15} color="white" />
        }
        title="Entrar"
        buttonStyle={styles.button}
        onPress={() => entrar()}
      />
      <Button
        icon={
          <Icon name="check" size={15} color="white" />
        }
        title="Cadastrar"
        buttonStyle={styles.button}
        onPress={() => cadastrar()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: "100%",
    marginTop: 10
  }
});
