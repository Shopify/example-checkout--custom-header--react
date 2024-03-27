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

  const activeStepIndex = steps.findIndex(
    ({handle}) => handle === activeStep?.handle,
  );

  const assembledSteps = [
    {label: translate('cart'), handle: 'cart', to: `${storefrontUrl}cart`},
    ...steps,
  ];
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
          <>
            {activeStep.handle === handle || index > activeStepIndex ? (
              <>
                <View
                  inlineAlignment="center"
                  minInlineSize="100%"
                  padding="extraTight"
                  background={
                    activeStep?.handle === handle ? 'subdued' : 'transparent'
                  }>
                  <Text
                    emphasis={
                      activeStep?.handle === handle ? 'bold' : undefined
                    }>
                    {label}
                  </Text>
                </View>
              </>
            ) : (
              <View inlineAlignment="center" minInlineSize="100%">
                <Link to={to}>{label}</Link>
              </View>
            )}
            {index < steps.length ? <Divider direction="block" /> : null}
          </>
        </InlineLayout>
      ))}
    </InlineLayout>
  );
  // [END custom-header.render]
}
