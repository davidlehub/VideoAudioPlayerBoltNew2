import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';
    import tailwindcss from 'tailwindcss';
    import autoprefixer from 'autoprefixer';

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [
        react(),
        {
          ...tailwindcss({
            content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
            theme: {
              extend: {},
            },
            plugins: [],
          }),
          postcss: true,
        },
        autoprefixer,
      ],
    });
