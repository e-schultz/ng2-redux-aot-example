export const exportedSelector = n => {
  console.log('Exported being called?')
  return n.test.exportedSelector;
}