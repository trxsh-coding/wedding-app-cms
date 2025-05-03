import { mergeConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    plugins: [react()],
    esbuild: {
      loader: {
        '.js': 'jsx',
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
