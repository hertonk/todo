import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, FlatList, Alert } from  'react-native';
import { styles } from './styles';
import { TaskItem } from '../../components/TaskItem';

import logo from '../../../assets/logo.png';
import plus from '../../../assets/plus.png';
import clipboard from '../../../assets/clipboard.png';

type Task = {
    description: string;
    done: boolean;
    onRemove: () => void;
}

export function Home(){
    const [countCreates, setCountCreates] = useState(0);
    const [countDones, setCountDones] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState('');

    function handleTaskAdd(){
        if(taskName === ''){
            return Alert.alert('Error', 'Insira uma descrição da tarefa.');
        }

        setTasks(prevState => [...prevState, { description: taskName, isDone: false }]);
        setTaskName('');
        setCountCreates(countCreates+1);
    }

    function changeDone(description: string){

        const index = tasks.findIndex(item => item.description == description);
        const tempTasks = [...tasks];
        tempTasks[index].done = !tempTasks[index].done;
        if(tempTasks[index].done){
            setCountDones(countDones+1)
            setCountCreates(countCreates-1)
        } else {
            setCountDones(countDones-1)
            setCountCreates(countCreates+1)
        }
        setTasks(tempTasks);
        
    }

    function handleTaskRemove(description: string){

        //Find Task
        const task = tasks.find(item => item.description == description);

        Alert.alert("Remover", `Deseja remover a tarefa ${task?.description}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    if(task?.done){
                        setCountDones(countDones-1)
                    } else {
                        setCountCreates(countCreates-1)
                    }
                    setTasks( prevState => prevState.filter(task => task.description !== description ));
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} />
            </View>
            <View style={styles.body}>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'
                        onChangeText={setTaskName}
                        value={taskName}
                    />
                    <TouchableOpacity 
                        onPress={handleTaskAdd}
                        style={styles.button}>
                        <Image source={plus} />
                    </TouchableOpacity>
                </View>
                <View style={styles.stats}>
                    <View style={styles.stats1}>
                        <Text style={styles.textCreates}>Criadas</Text>
                        <View style={styles.number}>
                            <Text style={styles.textNumber}>{countCreates}</Text>
                        </View>
                    </View>
                    <View style={styles.stats2}>
                        <Text style={styles.textDones}>Concluidas</Text>
                        <View style={styles.number}>
                            <Text style={styles.textNumber}>{countDones}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.items}>
                <FlatList 
                    data={tasks}
                    renderItem={({ item }) => (
                       <TaskItem 
                            key={item.id}
                            id={item.id}
                            description={item.description}
                            isDone={item.done}
                            setIsDone={() => changeDone(item.description)}
                            onRemove={() => handleTaskRemove(item.description)}
                       />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.noItems}> 
                            <Image source={clipboard} />
                            <Text style={styles.textNoItemsBold}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.textNoItems}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
                </View>
            </View>
        </View>
    );
}