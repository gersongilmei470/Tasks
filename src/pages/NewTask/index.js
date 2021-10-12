import React,{useState} from "react";
import {View, Text,TextInput,TouchableOpacity} from 'react-native'
import db  from "../../config/firebaseconfig";
import { collection,addDoc } from "firebase/firestore";
import styles from './style';

export default function NewTask({navigation}){
    const [description,setDescription] = useState(null);
    
    function newTask(){
        const collectionRef = collection(db, "Tasks");
        const payload = {
            description: description,
            status: false
            };
         addDoc(collectionRef,payload);
         navigation.navigate("Task");
     }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput 
            style={styles.inputText}
            placeholder="Ex: Estudar inglês"
            onChangeText={setDescription}
            value = {description}
            onPress={() => {
                addTask()
              }}
            
            />
            <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={()=>newTask()}
            >
           <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}