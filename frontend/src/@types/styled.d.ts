import 'styled-components';

import { ThemeLight } from '@Shared/Styles/Themes/ThemeLight'

export type ITheme = typeof ThemeLight

declare module 'styled-components' {
    export interface DefaultTheme extends ITheme { }
}