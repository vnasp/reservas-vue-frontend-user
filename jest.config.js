module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // Jest 28+ respeta el campo "exports" y bajo jsdom resuelve la condición
  // "browser", lo que carga el bundle de navegador de @vue/test-utils y falla
  // con "Vue is not defined". Forzamos la resolución de Node.
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
}
