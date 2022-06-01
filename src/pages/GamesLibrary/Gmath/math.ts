enum Operations {
    Plus = 0,
    Minus,
    Multiply,
    Divide,
}

const MAX = 20;
const MAX_WRONG = 100;

type answerType = { id: number; an: number; correct: boolean };

const randomOperations: () => Operations = () => {
    return Math.floor(Math.random() * 4);
};

const shuffle = (items: Array<answerType>) => {
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
};

const randomOp2 = (op: Operations) => {
    let op2 = Math.floor(Math.random() * MAX);
    if (op === Operations.Divide) {
        do {
            op2 = Math.floor(Math.random() * MAX);
        } while (!op2);
    }
    return op2;
};

const constructQ = () => {
    let result: { question: string; answers: Array<answerType> } = {
        question: "",
        answers: [],
    };
    let cal_answer = 0;
    const temp = randomOperations();
    const op1 = Math.floor(Math.random() * MAX);
    const op2 = randomOp2(temp);
    switch (temp) {
        case Operations.Plus:
            result.question = `${op1} + ${op2} = `;
            cal_answer = op1 + op2;
            break;
        case Operations.Minus:
            result.question = `${op1} - ${op2} = `;
            cal_answer = op1 - op2;
            break;
        case Operations.Multiply:
            result.question = `${op1} * ${op2} = `;
            cal_answer = op1 * op2;
            break;
        case Operations.Divide:
            result.question = `${op1} / ${op2} = `;
            cal_answer = Math.floor(op1 / op2);
            break;
    }
    result.answers.push({ id: 0, an: cal_answer, correct: true });

    for (let i = 0; i < 3; i++) {
        result.answers.push({
            id: i + 1,
            an: Math.floor(Math.random() * MAX_WRONG),
            correct: false,
        });
    }
    shuffle(result.answers);
    return result;
};

export const getQuestions = (maxN: number) => {
    let result = [];
    for (let i = 0; i < maxN; i++) {
        result.push(constructQ());
    }
    return result;
};
