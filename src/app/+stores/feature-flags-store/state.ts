import { ThemeTypes } from 'src/app/interfaces/theme.interface';

export interface FeatureFlagsState {
  status: 'SUCCESS' | 'FAILED';
  data: {
    loadingPage: {
      visible: boolean;
      duration: number;
    };
    scrollDown: {
      visible: boolean;
    };
    codeEditor: {
      visible: boolean;
    };
    themes: {
      allowed: boolean;
      list: Array<{
        name: ThemeTypes;
        allowed: boolean;
        backgroundColor: string;
        colors: {
          colorBg: string;
          colorBgOffset: string;
          colorText: string;
          colorTextOffset: string;
          colorBorder: string;
          colorPrimary: string;
          colorPrimaryOffset: string;
          colorSecondary: string;
        };
      }>;
    };
    pages: {
      [key: string]: {
        visible: boolean;
      };
    };
  };
}

export const initialState: FeatureFlagsState = {
  status: 'FAILED',
  data: {
    loadingPage: {
      visible: false,
      duration: 0,
    },
    scrollDown: {
      visible: false,
    },
    codeEditor: {
      visible: false,
    },
    themes: {
      allowed: false,
      list: [],
    },
    pages: {
      home: {
        visible: true,
      },
    },
  },
};
