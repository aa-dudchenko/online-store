const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
 
})


// module.exports = {
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @import "./src/assets/styles/variables.scss";
//           @import "./src/assets/styles/mixins.scss";
//         `,
//       },
//     },
//     }
//   };

