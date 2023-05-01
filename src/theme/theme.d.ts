import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string,
            pink: string,
            purple: string,
            grey: string,
            yellow: string,
            green: string,
            charcoal: string,
            black: string
        },
        fontSizes: {
            default: string,
            h1: string,
            p: string,
            small: string,
        }
    }
}