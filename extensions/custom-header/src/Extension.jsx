import {
  Divider,
  InlineLayout,
  Link,
  Text,
  View,
  useBuyerJourneySteps,
  useBuyerJourneyActiveStep,
  useShop,
  useTranslate,
} from '@shopify/ui-extensions-react/checkout';

export default function Extension() {
  // [START custom-header.buyer-journey]
  const steps = useBuyerJourneySteps();
  const activeStep = useBuyerJourneyActiveStep();
  const {storefrontUrl} = useShop();
  const translate = useTranslate();

  const assembledSteps = [
    {label: translate('cart'), handle: 'cart', to: `${storefrontUrl}cart`},
    ...steps,
  ];

  const activeStepIndex = assembledSteps.findIndex(
    ({handle}) => handle === activeStep?.handle,
  );
  // [END custom-header.buyer-journey]

  // [START custom-header.render]
  return (
    <InlineLayout
      accessibilityRole="orderedList"
      spacing="none"
      maxInlineSize="fill"
      border="base"
      padding="none"
      cornerRadius="base">
      {assembledSteps.map(({label, handle, to}, index) => (
        <InlineLayout
          accessibilityRole="listItem"
          inlineAlignment="end"
          blockAlignment="center"
          key={handle}
          spacing="none"
          columns={['fill', 'auto']}>
          <View
            inlineAlignment="center"
            minInlineSize="100%"
            padding="extraTight"
            cornerRadius={
              index === assembledSteps.length - 1
                ? ['none', 'base', 'base', 'none']
                : 'none'
            }
            background={
              activeStep?.handle === handle ? 'subdued' : 'transparent'
            }>
            {index < activeStepIndex || handle === 'cart' ? (
              <Link to={to}>{label}</Link>
            ) : (
              <Text
                emphasis={activeStep?.handle === handle ? 'bold' : undefined}
                appearance={
                  activeStep?.handle !== handle ? 'subdued' : undefined
                }>
                {label}
              </Text>
            )}
          </View>
          {index < assembledSteps.length - 1 ? (
            <Divider direction="block" />
          ) : null}
        </InlineLayout>
      ))}
    </InlineLayout>
  );
  // [END custom-header.render]
}
