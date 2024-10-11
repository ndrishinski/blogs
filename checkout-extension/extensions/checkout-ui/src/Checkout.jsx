import {
  reactExtension,
  Banner,
  useExtensionApi,
} from '@shopify/ui-extensions-react/checkout';
export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);
function Extension() {
  const { lines } = useExtensionApi();
  let showNotice = lines.current.some(item => item.merchandise.title.includes('Snowboard'))
  if (showNotice) {
    return (
      <Banner
        status="warning"
        title="Snowboards do not ship to California, because it's California."
      />
    );
  }
}