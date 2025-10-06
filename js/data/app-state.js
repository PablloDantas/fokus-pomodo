export const APP_CONTEXTS = {
    FOCUS: 'focus',
    SHORT_BREAK: 'short-break',
    LONG_BREAK: 'long-break'
};

export const stateConfig = {
    [APP_CONTEXTS.FOCUS]: {
        title: 'Otimize sua produtividade,',
        strong: 'mergulhe no que importa',
        imageUrl: 'assets/img/banner/focus.png',
        totalTime: 1500000, // 25 minutos
    },
    [APP_CONTEXTS.SHORT_BREAK]: {
        title: 'Que tal dar uma respirada?',
        strong: 'Faça uma pausa curta!',
        imageUrl: 'assets/img/banner/short-break.png',
        totalTime: 300000, // 5 minutos
    },
    [APP_CONTEXTS.LONG_BREAK]: {
        title: 'Hora de voltar a superfície.',
        strong: 'Faça uma pausa longa!',
        imageUrl: 'assets/img/banner/long-break.png',
        totalTime: 900000, // 15 minutos
    }
};