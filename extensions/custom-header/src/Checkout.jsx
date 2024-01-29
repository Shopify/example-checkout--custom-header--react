import {reactExtension} from '@shopify/ui-extensions-react/checkout';

import Extension from './Extension.jsx';

// [START custom-header.ext-point]
export default reactExtension('purchase.checkout.header.render-after', () => (
  <Extension />
));
// [END custom-header.ext-point]
