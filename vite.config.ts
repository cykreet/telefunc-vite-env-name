import telefunc from 'telefunc/vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import vercel from 'vite-plugin-vercel/vite';

export default {
  plugins: [react(), vike(), telefunc(), vercel()],
}
