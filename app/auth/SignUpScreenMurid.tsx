import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';

const SignUpScreenMurid: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);
  const router = useRouter();

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false); // Close the DateTimePicker after selection
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textLayout}>
      <Text style={{ fontWeight: 'bold', fontSize: 32 }}>Isi data diri</Text>
      <Text style={{ textAlign: 'center' }}>
        Lanjut ke pendaftaran{'\n'}agar kamu terdata
      </Text>
      </View>

      <View style={styles.isi}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan email anda"
        />

        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password anda"
          secureTextEntry
        />

        <Text style={styles.text}>Konfirmasi Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password anda"
          secureTextEntry
        />

        <Text style={styles.text}>Tanggal Lahir</Text>
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShow(true)}
        >
          <Text style={styles.dateText}>
            {date.toISOString().split('T')[0]} {/* Format YYYY-MM-DD */}
          </Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>

        <Text style={styles.link} onPress={() => router.replace('/auth/LoginScreen')}>
          kembali
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  isi: {
    width: 300,
    bottom: 25
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 50,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    marginBottom: 50,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    width: 'auto',
    height: 50,
    top: 0,
    margin: 0,
    backgroundColor: '#161D6F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    top: 120,
  },
  textLayout:{
    bottom: 60
  },
  text:{
    fontSize: 15,
    fontWeight: '400',
    height: 18,
    marginBottom:5
  }
});

export default SignUpScreenMurid;
