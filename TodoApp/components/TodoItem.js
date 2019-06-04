// @flow
import * as React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Content, Icon, Text, Badge, View } from "native-base";
import type { Todo } from "./../types/todoTypes";

type Props = {
    todo: Todo,
    toogleTodo: (todoId: string) => void
};

type State = {
    showTodoOptions: false
};

class TodoItem extends React.Component<Props, State> {
    render(): React.Node {
        const { todo } = this.props;

        if (todo === undefined) return <></>;

        return (
            <TouchableOpacity
                onPress={() => this.props.toogleTodo(todo.id)}
            >
                <View style={styles.view}>
                    <Icon
                        style={styles.checkIcon}
                        name={
                            todo.isDone
                                ? Platform.OS === "ios"
                                    ? "ios-checkbox-outline"
                                    : "md-checkbox-outline"
                                : Platform.OS === "ios"
                                ? "ios-square-outline"
                                : "md-square-outline"
                        }
                    />
                    <Content style={styles.contentText}>
                        <Text
                            style={
                                todo.text.length < 80
                                    ? styles.shortText
                                    : styles.longText
                            }
                        >
                            {todo.text}
                        </Text>
                    </Content>

                    <Badge success>
                        <Text>22</Text>
                    </Badge>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    checkIcon: { fontSize: 30 },
    contentText: {
        alignSelf: "flex-start",
        marginLeft: 10,
        marginRight: 10
    },
    itemDoneColor: {
        color: "gray"
    },
    longText: {
        fontSize: 10,
        letterSpacing: 0
    },
    shortText: {
        paddingTop: 3
    },
    view: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
        marginTop: 5
    }
});

export default TodoItem;
