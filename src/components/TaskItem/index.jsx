import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import trash from  '../../../assets/trash.png';
import uncheck from  '../../../assets/uncheck.png';
import check from  '../../../assets/check.png';

type Task = {
    id: number;
    description: string;
    isDone: boolean;
    onRemove: () => void;
}

export function TaskItem({id, description, isDone, setIsDone , onRemove}: Task){

    return (
        <View style={styles.container}>
            <View style={styles.buttonDone}>
                <TouchableOpacity onPress={setIsDone}>
                   {isDone && <Image source={check} />}
                   {!isDone && <Image source={uncheck} />}
                </TouchableOpacity>
            </View>
            <View style={styles.description}>
                {isDone && <Text style={styles.descriptionTextCheck}>{ description }</Text>}
                {!isDone && <Text style={styles.descriptionText}>{ description }</Text>}
            </View>
            <View style={styles.buttonTrash}>
                <TouchableOpacity onPress={onRemove}>
                    <Image source={trash} />
                </TouchableOpacity>
            </View>
        </View>
    );
}