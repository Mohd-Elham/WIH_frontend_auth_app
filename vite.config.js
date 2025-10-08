import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
    , federation({
      name: 'auth_app',
      filename: 'AuthApp.js',
      exposes: {
        './CheckMailPage': './src/page/CheckMail/CheckMailPage.jsx',
        './SignUpPage': './src/page/SignUp/SignUpPage.jsx',
        './VerifyPage': './src/page/verifyOtp/VerifyOtpPage.jsx',
        './Urls' : './src/Urls.jsx',
        './GoogleKeys' :'./src/secrets/GoogleKeys.jsx',
        './Logo': './src/components/Logo.jsx',
        './ThemeContext' : './src/Context/ThemeContext.jsx',
        './logo' : './src/assets/logo.png' 
      },
      shared: ['react'],
    }),
    {
      name: 'vite-plugin-notify-host-on-rebuild',
      apply(config, { command }) {
        return Boolean(command === 'build' && config.build?.watch);
      },
      async buildEnd(error) {
        if (!error) {
          try {
            await fetch('http://localhost:5173/__fullReload'); // http://localhost:5000
          } catch (e) {
            console.log(e);
          }
        }
      },
    },
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
