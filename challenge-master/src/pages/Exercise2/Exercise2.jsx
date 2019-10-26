import React, { useState } from "react";
import classes from "./Excercise2.module.scss";
import DescriptionExercise from "../DescriptionExercise";
import TodoList from "./TodoList";

const instructions = [
    "Neste exercício começamos a desenvolver um TODO list. A feature de arrastar as tasks para a ordem desejada está implementada.",
    "Você deve identificar e corrigir todos os warnings/errors apresentados no console do Chrome.",
    "As features de arrastar items da lista e mostrar as próximas tasks de acordo com a categoria deverão funcionar corretamente."
];

const listBeforeTravel = "Antes viagem";
const documentList = "Documentos";
const allCategories = [listBeforeTravel, documentList];
const initialTodos = [
    {
        id: 1,
        content: "Checar passagem",
        category: listBeforeTravel
    },
    {
        id: 2,
        content: "Checar hospedagem (enviar email confirmando)",
        category: listBeforeTravel
    },
    {
        id: 3,
        content: "Seguro viagem",
        category: listBeforeTravel
    },
    {
        id: 4,
        content:
            "Aluguel de carro/rotas de ônibus/como funcionam os táxis/uber?",
        category: listBeforeTravel
    },
    {
        id: 5,
        content: "Ativar cartão internacional/sacar dinheiro/câmbio",
        category: listBeforeTravel
    },
    {
        id: 6,
        content: "Ativar roaming internacional para celular/sim card ",
        category: listBeforeTravel
    },
    {
        id: 7,
        content: "Fazer roteiro de viagem: passeios, restaurantes, etc",
        category: listBeforeTravel
    },
    {
        id: 8,
        content: "Separar documentos",
        category: listBeforeTravel
    },
    {
        id: 9,
        content: "Organizar a mala",
        category: listBeforeTravel
    },
    {
        id: 10,
        content: "Organizar mala de mão",
        category: listBeforeTravel
    },
    {
        id: 11,
        content:
            "Pensar em alternativas de leitura e música para o trajeto de avião",
        category: listBeforeTravel
    },
    {
        id: 12,
        content: "Programar resposta automática de email",
        category: listBeforeTravel
    },
    {
        id: 13,
        content: "Checar aplicativos disponíveis para turismo no destino",
        category: listBeforeTravel
    },
    {
        id: 14,
        content: "Comprovante do seguro",
        category: documentList
    },
    {
        id: 15,
        content: "Passaporte",
        category: documentList
    },
    {
        id: 16,
        content: "Cópias do passaporte autenticadas",
        category: documentList
    },
    {
        id: 17,
        content: "Passagens",
        category: documentList
    },
    {
        id: 18,
        content: "Carteira de motorista",
        category: documentList
    },
    {
        id: 19,
        content: "Cartão de crédito",
        category: documentList
    },
    {
        id: 20,
        content: "Voucher do hotel",
        category: documentList
    },
    {
        id: 21,
        content: "Telefones de emergência",
        category: documentList
    },
    {
        id: 22,
        content:
            "Telefones das bandeiras dos cartões em atendimento internacional",
        category: documentList
    },
    {
        id: 23,
        content: "Cartão de milhagem",
        category: documentList
    },
    {
        id: 24,
        content: "Checkin",
        category: documentList
    },
    {
        id: 25,
        content: "Carteirinha do plano de saúde",
        category: documentList
    }
];

const getNextActivities = todos => {
    const findNext = category => todos.find(todo => todo.category === category);

    const nextTasks = allCategories.reduce((map, category) => {
        const _newMap = Object.assign({}, map);
        _newMap[category] = findNext(category).content;
        return _newMap;
    }, {});
    
    return nextTasks;
};

function App() {
    const [nextActivities, setNextActivities] = useState(
        getNextActivities(initialTodos)
    );

    function onChangeOrder(todos) {
        setNextActivities(getNextActivities(todos));
    };

    return (
        <>
            <DescriptionExercise instructions={instructions} />
            <div className={classes.Excercise2}>
                <TodoList
                    todos={initialTodos}
                    onChangeOrder={todos => onChangeOrder(todos)}
                />
                <div className={classes.NextTasks}>
                    <h1>Próximas tarefas:</h1>
                    <ul>
                        {Object.keys(nextActivities).map(category => (
                            <li key={category}>
                                <strong>{category}</strong>:{" "}
                                {nextActivities[category]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
