The correct way to set the `source` prop is to use an object with a `uri` property:

```javascript
import React from 'react';
import { Image } from 'react-native';

const MyComponent = () => {
  return (
    <Image
      source={{
        uri: 'https://example.com/image.jpg',
      }}
      style={{
        width: 200,
        height: 200,
      }}
    />
  );
};

export default MyComponent;
```