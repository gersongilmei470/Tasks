import React,{useState,useEffect} from "react";
import {View, 
    Text, 
    TouchableOpacity,
    FlatList
} from 'react-native';
import db  from "../../config/firebaseconfig";
import { collection, query,onSnapshot,deleteDoc,doc } from "firebase/firestore";

import {FontAwesome} from '@expo/vector-icons';
import styles from './style';


export default function Task({navigation}){
    const [task, setTask] = useState([]);
 

  function deleteTask(id) {
      deleteDoc(doc(db, "Tasks",id));
  }
   
  useEffect(() => {
     const q = query(collection(db,"Tasks"));
     const unsub = onSnapshot(q,(querySnapshot)=>{
       let taskArray = [];
       querySnapshot.forEach((doc) => {
        taskArray.push({...doc.data(), id: doc.id})
       });
       setTask(taskArray);
     })
      return () => unsub();
    },[])
   return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={( { item } )=>{
           return(
          <View style={styles.Tasks}>
            <TouchableOpacity
              style={styles.deleteTask}
              onPress={() => {
                deleteTask(item.id)
              }}
            >
            <FontAwesome
              name="star"
              size={23}
              color="#F92e6A"
            >
            </FontAwesome>
            </TouchableOpacity>
            <Text
              style={styles.DescriptionTask}
              onPress={()=>
                navigation.navigate("Details",{
                  id: item.id,
                  description: item.description,
                })
              }
            >
            {item.description}  {item.status} 
            </Text>  

          </View>
          )
        }}
      />
      <TouchableOpacity style
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}