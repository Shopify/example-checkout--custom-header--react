import {Image, InlineLayout} from '@shopify/ui-extensions-react/checkout';

// The image URLs to display in the header; replace these with your own images. Learn more:
// https://help.shopify.com/en/manual/shopify-admin/productivity-tools/file-uploads
const images = [
  "https://cdn.shopify.com/path/to/image/file_name_1.png",
  "https://cdn.shopify.com/path/to/image/file_name_2.png",
  "https://cdn.shopify.com/path/to/image/file_name_3.png",
  "https://cdn.shopify.com/path/to/image/file_name_4.png",
  "https://cdn.shopify.com/path/to/image/file_name_5.png",
  "https://cdn.shopify.com/path/to/image/file_name_6.png",
  "https://cdn.shopify.com/path/to/image/file_name_7.png",
  "https://cdn.shopify.com/path/to/image/file_name_8.png",
];

export default function Extension() {
  return (
    <InlineLayout columns="1fr" spacing="loose">
      {images.map((source, index) => (
        <Image key={index} source={source} aspectRatio={1} />
      ))}
    </InlineLayout>
  );
}
