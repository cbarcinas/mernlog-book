import { Image, ImageKitProvider } from '@imagekit/react';

const ImageComponent = ({ src, className, w, h, alt }) => {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/6ir4qzahj/">
      <Image
        src={src}
        className={className}
        alt={alt}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        width={w}
        height={h}
      />
    </ImageKitProvider>
  );
};

export default ImageComponent;
