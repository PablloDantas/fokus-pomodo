export const APP_CONTEXTS = {
    FOCUS: 'foco',
    SHORT_BREAK: 'short',
    LONG_BREAK: 'long'
};

export const stateConfig = {
    [APP_CONTEXTS.FOCUS]: {
        title: 'Otimize sua produtividade,',
        strong: 'mergulhe no que importa',
        totalTime: 5000, // 30 minutos
    },
    [APP_CONTEXTS.SHORT_BREAK]: {
        title: 'Que tal dar uma respirada?',
        strong: 'Faça uma pausa curta!',
        totalTime: 300000, // 5 minutos
    },
    [APP_CONTEXTS.LONG_BREAK]: {
        title: 'Hora de voltar a superfície.',
        strong: 'Faça uma pausa longa!',
        totalTime: 900000, // 15 minutos
    }
};