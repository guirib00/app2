import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const App = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

export default function App() {
  return (
    <View style={styles.container}>
      
		<Text style={styles.titulo}>Teste</Text>

		  <View style={styles.bloco}>
			  <Text style={styles.label}> Nome: </Text>
			  <TextInput 
				  style={styles.input}
			  />
		  </View>
		  <View style={styles.container}>
			  <Switch
				  trackColor={{ false: '#767577', true: '#81b0ff' }}
				  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
				  ios_backgroundColor="#3e3e3e"
				  onValueChange={toggleSwitch}
				  value={isEnabled}
			  />
		  </View>
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
titulo:{
	fontSize:25,
	color:'#F00'
},
label:{
  fontSize:30
},
input:{
	borderWidth:2,
	fontSize:20	
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
}