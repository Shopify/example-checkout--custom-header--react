import {
  BlockStack,
  Image,
  InlineLayout,
  Link,
  Text,
  View,
  useBuyerJourneySteps,
  useBuyerJourneyActiveStep,
  useShop,
} from '@shopify/ui-extensions-react/checkout';

export default function Extension() {
  // [START custom-header.buyer-journey]
  const steps = useBuyerJourneySteps();
  const activeStep = useBuyerJourneyActiveStep();
  const {storefrontUrl, name} = useShop();

  const activeStepIndex = steps.findIndex(
    ({handle}) => handle === activeStep?.handle,
  );
  // [END custom-header.buyer-journey]

  // [START custom-header.render]
  return (
    // Replace the image source with your own image url. Learn more:
    // https://help.shopify.com/en/manual/shopify-admin/productivity-tools/file-uploads
    <BlockStack spacing="tight">
      <Image source="https://cdn.shopify.com/path/to/image/file_name.png" />
      <InlineLayout accessibilityRole="orderedList" spacing="tight">
        <View
          accessibilityRole="listItem"
          inlineAlignment="center"
          border="base"
          padding="base"
          background="base">
          <Link to={storefrontUrl}>{name}</Link>
        </View>
        {steps.map(({label, handle, to}, index) => (
          <View
            accessibilityRole="listItem"
            inlineAlignment="center"
            key={handle}
            border="base"
            padding="base"
            background={activeStep?.handle === handle ? 'subdued' : 'base'}>
            {activeStep?.handle === handle || index > activeStepIndex ? (
              <Text>{label}</Text>
            ) : (
              <Link to={to}>{label}</Link>
            )}
          </View>
        ))}
      </InlineLayout>
    </BlockStack>
  );
  // [END custom-header.render]
}
