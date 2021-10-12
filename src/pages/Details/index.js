import React,{useState} from "react";
import {View, Text,TextInput,TouchableOpacity} from 'react-native'
import db  from "../../config/firebaseconfig";
import {setDoc,doc } from "firebase/firestore";
import styles from './style';

export default function Details({navigation,route}){
    const [descriptionEdit,setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;

    function editTask(description,id){
        const docRef = doc(db, "Tasks",id);
        const payload = {
            description: description,
            status: false
            };
         setDoc(docRef,payload);
        navigation.navigate("Task");
     }
    return(
        <View style={styles.container}>
        <Text style={styles.label}>Description</Text>
        <TextInput 
        style={styles.inputText}
        placeholder="Ex: Estudar inglês"
        onChangeText={setDescriptionEdit}
        value = {descriptionEdit}
        />
        <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={()=>editTask(descriptionEdit,idTask)}
        >
       <Text style={styles.iconButton}>Save</Text>
        </TouchableOpacity>
    </View>
    )
}