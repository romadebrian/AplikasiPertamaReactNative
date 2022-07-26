import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Axios from "axios";

const Item = ({ name, email, bidang, onPress, onDelete }) => {
  return (
    <View style={styles.itemContainer}>
      {/* <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzjBu8vdV53Wj1Gm0kA1on_lg3Lh1twHJtJg&usqp=CAU',
        }}
        style={styles.avatar}
      /> */}
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://i.pravatar.cc/150?u=${email}`,
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bidang, setBidang] = useState("");
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState("SIMPAN");
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name: name,
      email: email,
      bidang: bidang,
    };

    console.log("data before send ", data);

    if (button === "SIMPAN") {
      Axios.post("http://10.0.2.2:3000/users", data).then((res) => {
        console.log(res);
        setName("");
        setEmail("");
        setBidang("");
        getData();
      });
    } else if (button === "UPDATE") {
      Axios.put(`http://10.0.2.2:3000/users/${selectedUser.id}`, data).then(
        (res) => {
          console.log(res);
          setName("");
          setEmail("");
          setBidang("");
          setButton("SIMPAN");
          getData();
        }
      );
    }
  };

  const getData = () => {
    Axios.get("http://10.0.2.2:3000/users").then((res) => {
      console.log("res ", res);
      setUsers(res.data);
    });
  };

  const selectItem = (item) => {
    console.log("selected item ", item);

    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton("UPDATE");
  };

  const deleteItem = (item) => {
    console.log(item);

    Axios.delete(`http://10.0.2.2:3000/users/${item.id}`).then((res) => {
      console.log(res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>Local API (Json Server)</Text>
      <Text>Masukan Anggota Kabayan Coding</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Emial"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />

      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert("Peringantan", "Anda yakin mau menghapus akun ini?", [
                { text: "Tidak", onPress: () => console.log("button tidak") },
                { text: "Ya,", onPress: () => deleteItem(user) },
              ])
            }
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: { padding: 20 },
  texttitle: { textAlign: "center" },
  line: { width: 2, backgroundColor: "black", marginVertical: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatar: { width: 80, height: 80, borderRadius: 80 / 2 },
  itemContainer: { flexDirection: "row", marginBottom: 20 },
  desc: { marginLeft: 18, flex: 1 },
  descName: { fontSize: 20, fontWeight: "bold" },
  descEmail: { fontSize: 16 },
  descBidang: { fontSize: 12, marginTop: 8 },
  delete: { fontSize: 20, fontWeight: "bold", color: "red" },
});
